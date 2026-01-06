import { Router } from "express";
import axios from "axios";
import { PAYSTACK_SECRET_KEY } from "../config/env.ts"

const paymentRoute = Router()

paymentRoute.post("/:code", async (req, res) => {
    try {
        const { email, amount } = req.body;

        const type = req.params.code;

        const response = await fetch('https://api.paystack.co/transaction/initialize', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                amount: amount * 100,
                metadata: {
                    ticket_type: ticketType, // e.g., "VIP" or "General"
                    event_id: eventId,
                    custom_fields: [
                        { display_name: "Ticket Type", variable_name: "ticket_type", value: ticketType }
                    ]
                }
            })
        });

        // if (!response.ok) {
        //     const errorData = await response.json();
        //     throw new Error(errorData.message || 'Payment initialization failed');
        // }

        const data = await response.json();

        res.status(201).json({ success: true, data: data.data })

    } catch (e) {
        res.status(e.statusCode || 500).json({ success: false, message: e })
    }
});

paymentRoute.get('/', async (req, res) => {
    const { reference } = req.query; // Paystack appends ?reference=... to the callback URL

    try {
        const response = await axios.get(
            `https://api.paystack.co/transaction/verify/${reference}`,
            {
                headers: {
                    Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`
                }
            }
        );

        if (response.data.data.status === 'success') {
            // Success! Update your database here
            res.status(200).json({ message: 'Payment Successful', data: response.data.data });
        } else {
            res.status(400).json({ message: 'Payment Failed' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
paymentRoute.get("/verify/:reference", async (req, res) => {
    const { reference } = req.params;

    try {
        const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
            headers: { 'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}` }
        });

        const result = await response.json();

        if (result.data.status === 'success') {
            // HERE IS YOUR DATA! 
            // Paystack returns exactly what you put in the metadata earlier
            const { event_id, ticket_type } = result.data.metadata;

            // Now you have the eventId and ticketType on the backend.
            // You can save to your DB here, then send it to the frontend.
            
            res.status(200).json({
                success: true,
                eventId: event_id,
                ticketType: ticket_type,
                customer: result.data.customer.email
            });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Verification failed" });
    }
});
export default paymentRoute

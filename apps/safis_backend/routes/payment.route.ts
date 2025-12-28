import { Router } from "express";
import axios from "axios";
import { PAYSTACK_SECRET_KEY } from "../config/env.ts"

const paymentRoute = Router()

paymentRoute.post("/", async (req, res) => {
    try {
        const { email, amount } = req.body;

        const response = await fetch('https://api.paystack.co/transaction/initialize', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                amount: amount * 100
            })
        });

        // if (!response.ok) {
        //     const errorData = await response.json();
        //     throw new Error(errorData.message || 'Payment initialization failed');
        // }

        const data = await response.json();
        
        res.status(201).json({ success: true,data: data.data})

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
export default paymentRoute

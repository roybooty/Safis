import tickets from "../schema/Ticket.ts"
import events from "../schema/Event.ts"
import query from "../config/database.ts";
import { eq } from "drizzle-orm";
import QRCode from "qrcode";
import { BASE_URL } from "../config/env.ts";

export const generateTicketGeneral = async (req, res) => {
    try {
        const id = req.params.id;

        const isAvailable = await query.select().from(events).where(eq(events.id, id));

        if(isAvailable[0].generalTicket <= 0){
            const err = new Error()
            err.message = "General Ticket is finished"
            err.statusCode = 303;
        }

        const ticket = await query.select().from(tickets).where(eq(tickets.eventId, id) && eq(tickets.sold, false) && eq(tickets.ticketCode, "") && eq(tickets.type, "General")).limit(1);

        const special = await QRCode.toDataURL(`${BASE_URL}/${ticket[0].id}`);
        const newTicket = await query.update(tickets).set({
            ticketCode: special,
            sold: true,
        }).where(eq(tickets.id, ticket[0].id))

        const newAmount = isAvailable[0].generalTicket - 1

        await query.update(events).set({
            generalTicket: newAmount,
        }).where(eq(events.id, isAvailable[0].id))

        res.status(201).json({
            success: true,
            message: "ticket aquired succesfully",
            data: special,
        })

    } catch (e) {
        res.status(e.statusCode || 500).json({ success: false, message: e})
        console.log(e)
    }
}

export const generateTicketVip = async (req, res) => {
    try {
        const id = req.params.id;

        const isAvailable = await query.select().from(events).where(eq(events.id, id));

        if(isAvailable[0].vipTicket <= 0){
            const err = new Error()
            err.message = "vip Ticket is finished"
            err.statusCode = 303;
        }

        const ticket = await query.select().from(tickets).where(eq(tickets.eventId, id) && eq(tickets.sold, false) && eq(tickets.ticketCode, "") && eq(tickets.type, "Vip")).limit(1);

        const special = await QRCode.toDataURL(`${BASE_URL}/${ticket[0].id}`);

        const newTicket = await query.update(tickets).set({
            ticketCode: special,
            sold: true,
        }).where(eq(tickets.id, ticket[0].id))

        const newAmount = isAvailable[0].vipTicket - 1

        await query.update(events).set({
            vipTicket: newAmount,
        }).where(eq(events.id, isAvailable[0].id))

        res.status(201).json({
            success: true,
            message: "ticket aquired succesfully",
            data: special,
        })

    } catch (e) {
        res.status(e.statusCode || 500).json({ success: false, message: e})
        console.log(e)
    }
}

export const confirmTicket = async (req, res) => {
    try{
        const id = req.params.id;

        const verify = await query.select().from(tickets).where(eq(tickets.id, id));

        if(!verify){
            const err = new Error()
            err.statusCode = 404;
            err.message = "Ticket invalid"
            throw err
        }

        res.status(201).json({
            success: true,
            message: "you are alowed to pass"
        })

    }catch (e) {
        res.status(e.statusCode || 500).json({ success: false, message: e})
        console.log(e)
    }
}
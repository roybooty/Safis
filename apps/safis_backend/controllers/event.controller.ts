import { eq } from "drizzle-orm";
import query from "../config/database.ts";
import events from "../schema/Event.ts";
import tickets from "../schema/Ticket.ts";

export const newEvent = async (req, res) => {
    try {
        const { name, venu, description, categories, date, generalTicket, vipTicket, generalPrice, vipPrice } = req.body

        const event: typeof events.$inferInsert = {
            name: name,
            venu: venu,
            description: description,
            categories: categories,
            imageUrl: req.file.path,
            organiserId: req.user.id,
            date: date,
            generalTicket: generalTicket,
            vipTicket: vipTicket
        }

       

        const createEvent = await query.insert(events).values(event).returning({ insertedId: events.id }); // Returns an array of objects;

         const ticketGeneral: typeof tickets.$inferInsert = {
            type: "General",
            eventId: createEvent[0].insertedId,
            sold: false,
            price: generalPrice
        }

        const ticketVip: typeof tickets.$inferInsert = {
            type: "Vip",
            eventId: createEvent[0].insertedId,
            sold: false,
            price: vipPrice
        }

        for(let i = 0;i < generalTicket;i++){
            await query.insert(tickets).values(ticketGeneral)
        }
        for(let i = 0;i < vipTicket;i++){
            await query.insert(tickets).values(ticketVip)
        }

        if(createEvent){
            res.status(200).json({
                success: true,
                message: "event created successfully"
            })
        }
    }catch(e){
        res.status(e.statusCode || 500 ).json({ message: e.message });
        console.log(e)
    }
}

export const getEvent = async (req, res) => {
    try{
        const id = req.params.id;

        const searchEvent = await query.select().from(events).where(eq(events.id, id));
        console.log(searchEvent)
        if(searchEvent.length < 1){
            const err = new Error();
            err.message = "Event does not exist",
            err.statusCode = 404;
            throw err;
        }

        res.status(201).json({
            success: true,
            message: "Event fetched sccesfully",
            data: searchEvent
        })
    }catch(e){
        res.status(e.statusCode || 500 ).json({ message: e.message });
        console.log(e)
    }
}
export const getAllEvents = async (req, res) => {
     try{
        const searchEvent = await query.select().from(events);
        console.log(searchEvent)
        if(searchEvent.length < 1){
            const err = new Error();
            err.message = "there is no events",
            err.statusCode = 201;
            throw err;
        }

        res.status(201).json({
            success: true,
            message: "Events fetched sccesfully",
            data: searchEvent
        })
    }catch(e){
        res.status(e.statusCode || 500 ).json({ message: e.message });
        console.log(e)
    }
}
export const updateEvent = () => {}
export const deleteEvent = async (req, res) => {
    try{
        const id = req.params.id;

        const searchEvent = query.delete(events).where(eq(events.id, id))
        console.log(searchEvent)
        if(searchEvent.length < 1){
            const err = new Error();
            err.message = "Event does not exist",
            err.statusCode = 404;
            throw err;
        }

        if(searchEvent){
            res.status(201).json({
                success: true,
                message: "Event deleted sccesfully",
            })
        }

    }catch(e){
        res.status(e.statusCode || 500 ).json({ message: e.message });
        console.log(e)
    }
}
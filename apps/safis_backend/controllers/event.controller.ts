import { eq } from "drizzle-orm";
import query from "../config/database.ts";
import events from "../schema/Event.ts";

export const getEvent = async (req, res) => {
    try{
        const id = req.params.id;

        const searchEvent = await query.select().from(events).where(eq(events.id, id) && eq(events.active, true));
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
        const searchEvent = await query.select().from(events).where(eq(events.active, true));
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

import { eq } from "drizzle-orm";
import query from "../config/database.ts";
import events from "../schema/Event.ts";
import tickets from "../schema/Ticket.ts";
import users from "../schema/User.ts";

export const getUser = async (req, res) => {
    try {
        const user = await query.select().from(users).where(eq(users.id, req.user.id));

        if(!user){
            const err = new Error()
            err.message = "user not found"
            err.statusCode = 404
        }

        res.status(201).json({ success: true, data: user})

    }catch(e){
        res.status(e.statusCode || 500).json({ success: false, message: e.message })
    }
};
export const updateUser = async (req, res) => {
    try {
        const { name, email } = req.body

        const user = await query.update(users).set({
            name: name,
            email: email
        }).where(eq(users.id, req.user.id))

        if(!user){
            const err = new Error()
            err.message = "user not updated or not found"
            err.statusCode = 404
        }

        res.status(201).json({ success: true, message: "user updated successfully"})

    }catch(e){
        res.status(e.statusCode || 500).json({ success: false, message: e.message })
    }
};
export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await query.delete(events).where(eq(users.id, req.user.id))

        if(!deletedUser){
            const err = new Error()
            err.message = "Could not delete user"
            throw err
        }

        res.status(201).json({success: true, message: "user deleted successfully"})
    }catch(e){
        res.status(e.statusCode || 500).json({ success: false, message: e.message })
    }
};
export const getUserEvents = async (req, res) => {
    try{
        const allEvents = await query.select().from(events).where(eq(events.organiserId, req.user.id));

        if(allEvents.length <= 0){
            res.status(200).json({ success: true, message: "No events"})
        }

        res.status(200).json({ success: true, data: allEvents})
    }catch(e){
        res.status(e.statusCode || 500).json({ success: false, message: e})
    }
};
export const getSingleEvents = async (req, res) => {
    try {
        const id = req.params.id
        const singleEvent = await query.select().from(events).where(eq(events.id, id) && eq(events.organiserId, req.user.id));

        if(singleEvent.length <= 0){
            res.status(200).json({ success: true, message: "No events"})
        }

        res.status(200).json({ success: true, data: singleEvent})

    }catch(e){
        res.status(e.statusCode || 500).json({ success: false, message: e})
    }
};
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
        res.status(e.statusCode || 500 ).json({ message: e.message });4
        console.log(e)
    }
}
export const deleteEvent = async (req, res) => {
    try{
        const id = req.params.id;

        const searchEvent = await query.delete(events).where(eq(events.id, id))
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

export const updateEvent = () => {}

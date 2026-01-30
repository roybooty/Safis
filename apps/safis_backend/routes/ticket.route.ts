import { Router } from "express";
import { generateTicketGeneral, confirmTicket } from "../controllers/ticket.controller.ts";

const ticketRoter = Router()

ticketRoter.post("/:id", generateTicketGeneral);
ticketRoter.get("/:id", confirmTicket)

export default ticketRoter
import { Router } from "express";
import { generateTicketGeneral, generateTicketVip, confirmTicket } from "../controllers/ticket.controller.ts";

const ticketRoter = Router()

ticketRoter.post("/generate-general/:id", generateTicketGeneral);
ticketRoter.post("/generate-vip/:id", generateTicketVip);
ticketRoter.get("/:id", confirmTicket)

export default ticketRoter
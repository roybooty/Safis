import { Router } from "express";
import { getAllEvents, getEvent } from "../controllers/event.controller.ts";

const eventRouter = Router();

eventRouter.get("/:id", getEvent);
eventRouter.get("/", getAllEvents);

export default eventRouter;
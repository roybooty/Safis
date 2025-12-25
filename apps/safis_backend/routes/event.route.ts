import { Router } from "express";
import { deleteEvent, getAllEvents, getEvent, newEvent, updateEvent } from "../controllers/event.controller.ts";
import authorize from "../middleware/auth.middleware.ts"
import storage from "../config/cloudinaryConfig.ts";
import multer from "multer";

const eventRouter = Router();

const upload = multer({ storage: storage });

eventRouter.post("/", authorize, upload.single("image"), newEvent);
eventRouter.get("/:id", getEvent);
eventRouter.get("/", getAllEvents);
eventRouter.put("/:id", updateEvent);
eventRouter.delete("/:id", deleteEvent);

export default eventRouter;
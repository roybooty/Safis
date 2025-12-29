import { Router } from "express";
import { getUser, updateUser, deleteUser, getUserEvents, getSingleEvents, newEvent, updateEvent, deleteEvent } from "../controllers/userProfile.controller.ts";
import authorize from "../middleware/auth.middleware.ts"
import storage from "../config/cloudinaryConfig.ts";
import multer from "multer";

const upload = multer({ storage: storage });

const userProfile = Router()

userProfile.post("/", authorize, upload.single("image"), newEvent);
userProfile.get("/", authorize, getUser);
userProfile.get("/getEvents", authorize ,getUserEvents);
userProfile.get("/getEvents/:id", authorize, getSingleEvents)
userProfile.put("/", authorize, updateUser);
userProfile.put("/:id", authorize,updateEvent);
userProfile.delete("/", authorize, deleteUser);
userProfile.delete("/:id", authorize,deleteEvent);

export default userProfile
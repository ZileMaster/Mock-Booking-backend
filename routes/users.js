import express from "express"; 
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.controller.js";
import User from "../models/User.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("Hello user, you are logged in!");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("Hello user, you are logged in!");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello Admin, you are logged in!");
// });

//update

router.put("/:id", verifyUser, updateUser);

//delete

router.delete("/:id", verifyUser,deleteUser);

//get

router.get("/:id", verifyUser, getUser);

//getAll

router.get("/", verifyAdmin, getAllUsers);

export default router
import express from "express"; 
import { countByCity, createHotel, deleteHotel, getAllHotels, getHotel, updateHotel, countByType } from "../controllers/hotel.controller.js";
import Hotel from "../models/Hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create

router.post("/", verifyAdmin, createHotel);

//update

router.put("/find/:id", verifyAdmin, updateHotel);

//delete

router.delete("/find/:id", verifyAdmin, deleteHotel);

//get

router.get("/find/:id", getHotel);

//getAll

router.get("/", getAllHotels);

//countByCity
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router
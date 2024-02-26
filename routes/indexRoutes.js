import express from "express";
import { getHome } from "../src/controller/indexController.js";

const router = express.Router()

router.get("/", getHome)

export default router
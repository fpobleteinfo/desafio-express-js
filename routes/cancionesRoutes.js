import express from "express";
import { getData,nuevaCancion,editarCancion,eliminarCancion } from "../src/controller/cancionesController.js";

const router = express.Router()


router.get("/canciones",getData)
router.post("/canciones",nuevaCancion)
router.put("/canciones/:id",editarCancion)
router.delete("/canciones/:id",eliminarCancion)

export default router;
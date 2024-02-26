//1. npm init --y
//2. npm i express
//3. npm i nodemon
//4. npm i cors
//5. npm i dotenv

import express from "express";
import indexRouter from "./routes/indexRoutes.js"
import cors from 'cors'
import 'dotenv/config.js';
import cancionesRouter from "./routes/cancionesRoutes.js"

const PORT = process.env.PORT || 3300;


const app = express();
app.use(cors());
app.use(express.json()); // middleware
app.use(cancionesRouter, indexRouter);


//routers
app.use('/api/v1', cancionesRouter)

app.listen(PORT, console.log(`¡Servidor encendido! http://localhost:${PORT}`));
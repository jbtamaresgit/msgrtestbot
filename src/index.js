import express from "express";
import viewEngine from "./config/viewEngine";
import webRoute from "./routes/web";
import bodyParser from "body-parser";


let app = express();

viewEngine(app);
webRoute(app);

let port = process.env.port || 8080;

app.listen(port, () => {console.log(`App is running using ${port}`)});


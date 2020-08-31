import express from "express";

let router = express.router();

let initWebRoutes = (app) => {
    router.get("/", (req, res) => {
        return res.send( data, "Hello World");
    });

    return app.use("/", router);
}

module.exports = initWebRoutes;

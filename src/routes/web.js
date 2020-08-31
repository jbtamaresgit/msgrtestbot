import express from "express";
import homeController from "../controllers/homeController";
import chatController from "../controllers/chatController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/webhook", chatController.getWebHook);
    router.get("/webhook", chatController.postWebHook);
    // router.get("/", (req, res) => {
    //     return res.send("Hello World");
    // });

    return app.use("/", router);
}

module.exports = initWebRoutes;

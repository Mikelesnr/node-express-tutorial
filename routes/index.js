const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get("/", (req, res) => 
    {
        res.send("Hello App");
    });

routes.get("/mike", lesson1Controller.mikeRoute);

routes.get("/ngoni", lesson1Controller.ngoniRoute);

module.exports = routes;
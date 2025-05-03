//expreess server
// This is a simple Express server that listens on port 3000 or the port specified in the environment variable PORT.
const express = require('express');
const app = express();

app.get("/", (req, res) => 
    {
        res.send("Hello World");
    });

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port 3000");
});

console.log("Server is listening on port",+ (process.env.PORT || 3000));
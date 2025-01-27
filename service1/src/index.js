const express = require("express");
const cors = require("cors");
const app = express();
const port = 5001;

app.use(cors());

app.get("/api/endpoint1", (req, res) => {
    res.status(200).json({ message: "Endpoint 1 service 1 ok" });
});

app.get("/api/endpoint2", (req, res) => {
    res.status(200).json({ message: "Endpoint 2 service 1" });
});

app.listen(port, () => {
    console.log("Service 1 escuchando");
});
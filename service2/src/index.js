const express = require("express");
const cors = require("cors");
const app = express();
const port = 5002;

app.use(cors());

app.get("/api/endpoint1", (req, res) => {
    res.status(200).json({ message: "Endpoint 1 service 2" });
});

app.get("/api/endpoint2", (req, res) => {
    res.status(200).json({ message: "Endpoint 2 service 2" });
});

if (require.main === module) {
    app.listen(port, () => {
        console.log("Service 2 escuchando");
    });
}
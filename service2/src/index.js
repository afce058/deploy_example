const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.get("/service2/api/endpoint1", (req, res) => {
    res.status(200).json({ message: "Endpoint 1 service 2" });
});

app.get("/service2/api/endpoint2", (req, res) => {
    res.status(200).json({ message: "Endpoint 2 service 2" });
});

if (require.main === module) {
    app.listen(port, () => {
        console.log("Service 2 escuchando");
    });
}

module.exports = app;
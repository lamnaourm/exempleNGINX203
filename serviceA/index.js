const express = require('express')

const app = express();

app.get("/", (req, res) => {
    res.json({message: "Reponse de service A"})
})

app.listen(3000);
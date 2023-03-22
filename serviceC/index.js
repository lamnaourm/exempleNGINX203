const express = require('express')

const app = express();

app.get("/", (req, res) => {
    res.json({message: "Reponse de service C"})
})

app.listen(3000);
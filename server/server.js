const express = require("express");
const app = express();
const error = 404

app.get('/', (req, res) => {
    res.send(error)
})

app.listen(3001, () => {
    console.log("Server running successfully!")
})
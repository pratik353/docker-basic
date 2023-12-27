const express = require('express');

const app = express();

const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
    res.json({message: "Hey, I'm in docker container"});
});

app.listen(PORT, ()=>{
    console.log("server running on port " + PORT);
})
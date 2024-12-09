const express = require("express");

const app = express();

app.get('/',(req,res) => {
    res.send("Hello, Welcome to your node.js app ");
});

const PORT = 3000;
app.listen(PORT, () =>{
    //just leanrt that temperal literal does not work on double quotes lol
    console.log(`Server is running on http://localhost:${PORT}`);

})
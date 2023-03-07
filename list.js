const express = require('express');
const app = express();
app.listen(4000, () => {
    console.log("mayank");
});



app.get("/detail", (req, res) => {
    res.send({

        name: "mayank",
        lastName: "singh"

    })
})

app.get("/detail2", (req, res) => {

    res.send({
        message: "success"
    })
})
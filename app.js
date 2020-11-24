const express = require('express')
const app = express()
const bodyParser = require('body-parser')

require("dotenv").config();

const PORT = process.env.PORT

app.use(bodyParser.urlencoded({
    extended: false,
}));
app.use(bodyParser.json());

app.get('/test/:id', (req, res) => {

    const { search } = req.query;
    const { id } = req.params;

    res.send({
       result: `you search for ${id}`,
    });
 });

 app.post('/items/add', (req, res) => {
    const { item } = req.body;

    res.json({
        message: `You have added ${item}`,
    })
 });

app.listen(PORT, () => {
    console.log(`The server has started at port ${PORT}.`);
});
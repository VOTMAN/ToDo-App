/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const itemsModel = require("./models/model");

// const { EventEmitter } = require("events");
// const eventEmitter = new EventEmitter();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/todolist");

try {
    app.post("/", (req, res) => {
        // console.log(req.body)
        itemsModel
            .create(req.body)
            .then((items) => res.json(items))
            .catch((err) => res.json(err));
    });
} catch (err) {
    console.log(err);
}

try {

    app.delete("/", (req, res) => {
        // console.log(req.body)
        const id = req.body._id
        itemsModel.deleteOne({ _id: req.body._id })
    });

} catch (err) {

    console.log(err)

}

const port = 3001;

app.listen(port, () => {
    console.log(`Server running on Port : ${port}`);
});

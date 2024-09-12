/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const itemsModel = require("./models/model");

// const { EventEmitter } = require("events");
// const eventEmitter = new EventEmitter();
const uri = "mongodb+srv://varanageshwaraarnav:vnarnav@cluster.rcbzija.mongodb.net/TodoApp?retryWrites=true&w=majority&appName=Cluster"
const db = "mongodb+srv://varanageshwaraarnav:vnarnav@cluster.rcbzija.mongodb.net/TodoApp?retryWrites=true&w=majority&appName=Cluster"

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(uri);

const postItem = async () => {

}

try {
    app.post("/", (req, res) => {
        // console.log(req.body)
        // const item = new itemsModel({ _id : req.body._id, item: req.body.item })
        // item.save()
        itemsModel
        .create({ _id : req.body._id, item: req.body.item })
            .then((items) => res.json(items))
            .catch((err) => res.json(err))
    });
} catch (err) {
    console.log(err);
}

const deleteItem = async (item) => {
    await itemsModel.deleteOne(item)
}
app.delete("/", (req, res) => {
    const delTask = itemsModel.find({ _id : req.body._id, item: req.body.item })
    deleteItem(delTask)
});


const port = 3001;

app.listen(port, () => {
    console.log(`Server running on Port : ${port}`);
});

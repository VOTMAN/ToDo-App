/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const dotenv = require("dotenv").config()
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const itemsModel = require("./models/model");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_ATLAS);

const getItems = async (req, res) => {
    const all = await itemsModel.find()
    // console.log(all)
    res.json(all)
}

try {
    app.get("/" ,(req, res) => {
        getItems(req, res)
    })
} catch (err) {
    res.json("fail")
    console.log(err)
} 

const postItem = async (req, res) => {
    itemsModel
    .create({ _id : req.body._id, item: req.body.item })
        .then((items) => res.json(items))
        .catch((err) => res.json(err))
}

try {
    app.post("/", (req, res) => {
        // console.log(req.body)
        // const item = new itemsModel({ _id : req.body._id, item: req.body.item })
        // item.save()
        postItem(req, res);
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

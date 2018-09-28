const Images = require('../../models/images');
const mongoose = require("mongoose");


module.exports = {
    get: async (req, res) => {
        try {
            const images = await Images.find({});
            res.json(images);
        }
        catch(e) {
            res.sendStatus(500);
        }
    },
    add: async (req, res) => {
        try {
            const link = req.body.link;
            const image = new Images({
                link
            });
            await image.save();
            res.json(image);
        }
        catch(e) {
            res.sendStatus(500);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            await Images.findByIdAndRemove(id);
            res.sendStatus(200);
        }
        catch(e) {
            res.sendStatus(500);
        }
    },
    update: async (req, res) => {
        try {
            const image = req.body;
            await Images.findOneAndUpdate({ _id: image._id}, image);
            res.sendStatus(200);
        }
        catch(e) {
            res.sendStatus(500);
        }
    }
}
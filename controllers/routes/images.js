const express = require("express");
const imageAPI = require('../api/images');
const authen = require('../api/authen');

const controller = express.Router();

controller.route("/get").get(imageAPI.get);
controller.route("/add").all(authen.verify).post(imageAPI.add);
controller.route("/delete/:id").all(authen.verify).delete(imageAPI.delete);
controller.route("/update").all(authen.verify).put(imageAPI.update);

module.exports = controller;
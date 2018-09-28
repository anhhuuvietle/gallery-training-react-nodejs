const express = require("express");
const authenAPI = require("../api/authen");
const authen = require('../api/authen');

const controller = express.Router();

controller.route("/login").post(authenAPI.login);
controller.route("/authen").all(authen.verify).post(authenAPI.authen);

module.exports = controller;
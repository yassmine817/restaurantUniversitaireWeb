
const config = require("../config/auth.config");
var { chef } = require("../models/chef.model");


var ObjectId = require('mongoose').Types.ObjectId;

var bcrypt = require("bcryptjs");
const { Menu } = require("../models/menu.models");



exports.addmenu = (req, res) => {
    const menu = new Menu({

        meal1: req.body.meal1,
        meal2: req.body.meal2,
        meal3: req.body.meal3,
        meal4: req.body.meal4,
        type: req.body.type,
       // description: req.body.description,
        dateM: req.body.dateM,
    });
    console.log(menu);
    menu.save((err, menu) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        res.send({ message: "Menu was registered successfully!" });

    });

}

exports.Listsmenu = (req, res) => {
    Menu.find((err, docs) => {
        if (!err) { res.send(docs); } else { console.log('Error in Retriving menus :' + JSON.stringify(err, undefined, 2)); }
    });
}

exports.ListsmenuOne = (req, res) => {
    const id = req.params.id;

    Menu.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Tutorial with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Tutorial with id=" + id });
        });
};

exports.updatemenu = (req, res) => {

    if (!req.body.meal1 || !req.body.meal2 || !req.body.meal3 || !req.body.meal4 || !req.body.type || !req.body.dateM) {
        res.status(400).send({
            message: "required fields cannot be empty",
        });
    }
    Menu.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((menu) => {
            if (!menu) {
                return res.status(404).send({
                    message: "No Menu found",
                });
            }
            res.status(200).send(menu);
            console.log(res);
        })
        .catch((err) => {
            return res.status(404).send({
                message: "error while updating the post",
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Menu.findByIdAndRemove(req.params.id)
        .then((menu) => {
            if (!menu) {
                return res.status(404).send({
                    message: "Menu not found ",
                });
            }
            res.send({ message: "Menu deleted successfully!" });
        })
        .catch((err) => {
            return res.status(500).send({
                message: "Could not delete menu ",
            });
        });
};
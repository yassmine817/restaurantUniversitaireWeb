const config = require("../config/auth.config");
//var  {Chef} =require ("../models/user.model");
const db = require("../models");
const User = db.user;
const Role = db.role;

const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
  
var bcrypt = require("bcryptjs");
//const Role = db.role;

exports.addchef = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          user.roles = roles.map(role => role._id);
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "User was registered successfully!" });
          });
        }
      );
    } else {
      Role.findOne({ name: "moderator" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        user.roles = [role._id];
        user.save(err => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "User was registered successfully!" });
        });
      });
    }
  });
  
  };

  exports.Listchef = (req, res) => {
    
    User.find({ "roles" : ObjectId("608f374864ae17500431f1c0")},(err, docs) => {
      if (!err) { res.send(docs); }
      else { console.log('Error in Retriving students :' + JSON.stringify(err, undefined, 2)); }
  });

};
  
exports.ListchefOne = (req, res) => {
  const id = req.params.id;

  User.findById(id).populate('Role')
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

exports.updatechef = (req, res) => {

  if (!req.body.username || !req.body.email || !req.body.password) {
    res.status(400).send({
      message: "required fields cannot be empty",
    });
  }
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "no user found",
        });
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      return res.status(404).send({
        message: "error while updating the post",
      });
    });
};

exports.delete= (req, res) => {
const id = req.params.id;
User.findByIdAndRemove(req.params.id)
.then((user) => {
if (!user) {
  return res.status(404).send({
    message: "User not found ",
  });
}
res.send({ message: "User deleted successfully!" });
})
.catch((err) => {
return res.status(500).send({
  message: "Could not delete user ",
});
});
};
// Retrieve all Tutorials from the database.

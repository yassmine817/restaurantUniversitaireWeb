
const config = require("../config/auth.config");
var  {student} =require ("../models/user.model");
const db = require("../models");
const User = db.user;
const Role = db.role;
var ObjectId = require('mongoose').Types.ObjectId;
  
var bcrypt = require("bcryptjs");


  
exports.addstudent = (req, res) => {
  const user = new User({
    fullname:req.body.fullname,
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    cin: req.body.cin,
    statut: req.body.statut

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
         // user.statut = [statut];
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
      Role.findOne({ name: "user" }, (err, role) => {
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
  
}


exports.Liststudent = (req, res) => {
  User.find({ "roles" : ObjectId("608f374864ae17500431f1bf")} && {"statut" : "Activer"},(err, docs) => {
    if (!err) { res.send(docs); }
    else { console.log('Error in Retriving students :' + JSON.stringify(err, undefined, 2)); }
  });
}

exports.ListstudentNot = (req, res) => {
  User.find({ "roles" : ObjectId("608f374864ae17500431f1bf")} && {"statut" : "Desactiver"},(err, docs) => {
    if (!err) { res.send(docs); }
    else { console.log('Error in Retriving students :' + JSON.stringify(err, undefined, 2)); }
  });
}

exports.ListstudentOne = (req, res) => {
  const id = req.params.id;

  User.findById(id)
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
/*exports.updatestudent = (req, res) => {

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
*/

exports.updatestudent = (req, res) => {
  
  User.findByIdAndUpdate(req.params.id, { statut: "Activer"})
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
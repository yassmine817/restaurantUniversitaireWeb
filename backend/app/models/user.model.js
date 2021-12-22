const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    fullname:String,
    username: String,
    email: String,
    statut : {
      type: String, 
      default: 'Desactiver' ,
      },
    password: String,
    cin:{type:String,
      unique: true},
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
    
  }),

  
);

module.exports = User;

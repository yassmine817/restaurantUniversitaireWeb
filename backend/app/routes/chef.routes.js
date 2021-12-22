const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/chef.controller");

const { authJwt } = require("../middlewares");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  }); 

  //crud chef routes
  app.post("/api/users/addchef",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.addchef
  );
  
};



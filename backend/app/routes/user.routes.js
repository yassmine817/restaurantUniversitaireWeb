const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/user.controller");
const controllerchef = require("../controllers/chef.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  }); 

  //crud student routes
  app.post(
    "/api/users/addstudent",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.addstudent
  );
  app.get("/api/users", controller.Liststudent);
  app.get("/api/users/Notstudent", controller.ListstudentNot);
  app.put("/api/users/updatestudent/:id", controller.updatestudent);     
  app.get("/api/users/ListstudentOne/:id", controller.ListstudentOne);
  app.delete("/api/users/Delete/:id", controller.delete);
  

  
   //crud chef routes
   app.post(
    "/api/users/addchef",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controllerchef.addchef
  );
  app.get("/api/users/chefs", controllerchef.Listchef);
  app.get("/api/users/ListcheftOne/:id", controllerchef.ListchefOne);
  app.put("/api/users/updatechef/:id", controllerchef.updatechef);
  app.delete("/api/users/Delete/:id", controllerchef.delete);
      
};





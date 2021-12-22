const controllerMenu = require("../controllers/menu.Controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    //crud menu routes
    app.post("/api/menus/addmenu", controllerMenu.addmenu);
    app.get("/api/menus", controllerMenu.Listsmenu);
    app.put("/api/menus/updatemenu/:id", controllerMenu.updatemenu);
    app.get("/api/menus/ListmenuOne/:id", controllerMenu.ListsmenuOne);
    app.delete("/api/menus/Delete/:id", controllerMenu.delete);




};
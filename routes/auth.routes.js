const authController = require("../controllers/auth.controller");

const routes = (app) => {
  /* route for sign up*/
  app.post("/ecomm/api/v1/auth/signup", authController.signup);

  /* route for sign in*/
  app.post("/ecomm/api/v1/auth/signin", authController.signin);
};

module.exports = routes;

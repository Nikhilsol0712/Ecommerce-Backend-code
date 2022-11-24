const ProductController = require('../controllers/product.controller');
const AuthenticationMiddleWare = require('../middlewares/authentication.validators')

/* this function will have all the routes of products api*/
const routes = (app) => {
    /* to get all the products */
    app.get('/ecomm/api/v1/categorieshttps://ecommce-be.herokuapp.com/ecomm/api/v1/categories', ProductController.getProducts);
;

}

module.exports = routes;
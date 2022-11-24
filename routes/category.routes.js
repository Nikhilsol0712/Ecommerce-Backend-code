const CategoryController = require('../controllers/category.controller');
const CategoryMiddleware = require('../middlewares/category.validators')
const AuthenticationMiddleWare = require('../middlewares/authentication.validators')

const routes = (app) =>{
    /* to get all the categories */
    app.get('/ecomm/api/v1/categorieshttps://ecommce-be.herokuapp.com/ecomm/api/v1/products', CategoryController.getCategories);
}

module.exports = routes;
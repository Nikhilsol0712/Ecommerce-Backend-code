const OrderController = require('../controllers/order.controller');
const AuthenticationMiddleWare = require('../middlewares/authentication.validators')

const routes = (app) => {
    //to add products to order
    app.post('/ecomm/api/v1/categorieshttps://ecommce-be.herokuapp.com/ecomm/api/v1/cart',AuthenticationMiddleWare.isAuthenticated, OrderController.addProduct);

    

}

module.exports = routes;

const User = require('../model/UserModel');
const Product = require('../model/ProductsModel');
const CartItem = require('../model/CartItemModel');
const Order = require('../model/OrderModel');

User.hasMany(CartItem, { onDelete: 'CASCADE' });
User.hasMany(Order, { onDelete: 'CASCADE' });

CartItem.belongsTo(User);
CartItem.belongsTo(Product);

Order.belongsTo(User);
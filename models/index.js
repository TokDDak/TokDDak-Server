const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
  config.database, config.username, config.password, config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.City = require('./cityModel')(sequelize, Sequelize);
db.Activity = require('./activityModel')(sequelize, Sequelize);
db.Food = require('./foodModel')(sequelize, Sequelize);
db.Shopping = require('./shoppingModel')(sequelize, Sequelize);
db.Snack = require('./snackModel')(sequelize, Sequelize);
db.Hotel = require('./hotelModel')(sequelize, Sequelize);
db.Transport = require('./transportModel')(sequelize, Sequelize);
db.Trip = require('./tripModel')(sequelize, Sequelize);
db.TripActivity = require('./tripActivityModel')(sequelize, Sequelize);
db.TripFood = require('./tripFoodModel')(sequelize, Sequelize);
db.TripShopping = require('./tripShoppingModel')(sequelize, Sequelize);
db.TripSnack = require('./tripSnackModel')(sequelize, Sequelize);
db.TripHotel = require('./tripHotelModel')(sequelize, Sequelize);
db.TripTransport = require('./tripTransportModel')(sequelize, Sequelize);

/** 1:N City : Activity */
db.City.hasMany(db.Activity);
db.Activity.belongsTo(db.City);

/** 1:N City : Food */
db.City.hasMany(db.Food);
db.Food.belongsTo(db.City);

/** 1:N City : Shopping */
db.City.hasMany(db.Shopping);
db.Shopping.belongsTo(db.City);

/** 1:N City : Snack */
db.City.hasMany(db.Snack);
db.Snack.belongsTo(db.City);

/** 1:N City : Hotel */
db.City.hasMany(db.Hotel);
db.Hotel.belongsTo(db.City);

/** 1:N City : Transport */
db.City.hasMany(db.Transport);
db.Transport.belongsTo(db.City);

/** 1:N Trip : TripActivity */
db.Trip.hasMany(db.TripActivity);
db.TripActivity.belongsToMany(db.Trip);

/** 1:N Trip : TripHotel */
db.Trip.hasMany(db.TripHotel);
db.TripHotel.belongsToMany(db.Trip);

/** 1:N Trip : TripFood */
db.Trip.hasMany(db.TripFood);
db.TripFood.belongsToMany(db.Trip);

/** 1:N Trip : TripShopping */
db.Trip.hasMany(db.TripShopping);
db.TripShopping.belongsToMany(db.Trip);

/** 1:N Trip : TripSnack */
db.Trip.hasMany(db.TripSnack);
db.TripSnack.belongsToMany(db.Trip);

/** 1:N Trip : TripTransport */
db.Trip.hasMany(db.TripTransport);
db.TripTransport.belongsToMany(db.Trip);

module.exports = db;
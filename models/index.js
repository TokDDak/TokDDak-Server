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
db.Transportation = require('./transportationModel')(sequelize, Sequelize);
db.Trip = require('./tripModel')(sequelize, Sequelize);

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

/** 1:N City : Transportation */
db.City.hasMany(db.Transportation);
db.Transportation.belongsTo(db.City);

/** N:M Trip : Activity */
db.Trip.belongsToMany(db.Activity, { through : 'TripActivity' });
db.Activity.belongsToMany(db.Trip, { through : 'TripActivity' });

/** N:M Trip : Food */
db.Trip.belongsToMany(db.Food, { through : 'TripFood' });
db.Food.belongsToMany(db.Trip, { through : 'TripFood' });

/** N:M Trip : Shopping */
db.Trip.belongsToMany(db.Shopping, { through : 'TripShopping' });
db.Shopping.belongsToMany(db.Trip, { through : 'TripShopping' });

/** N:M Trip : Snack */
db.Trip.belongsToMany(db.Snack, { through : 'TripSnack' });
db.Snack.belongsToMany(db.Trip, { through : 'TripSnack' });

/** N:M Trip : Transportation */
db.Trip.belongsToMany(db.Food, { through : 'TripTransportation' });
db.Transportation.belongsToMany(db.Trip, { through : 'TripTransportation' });

/** N:M Trip : Hotel */
db.Trip.belongsToMany(db.Hotel, { through : 'TripHotel' });
db.Hotel.belongsToMany(db.Trip, { through : 'TripHotel' });

module.exports = db;
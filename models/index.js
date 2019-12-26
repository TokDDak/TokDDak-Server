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

/** N:M Trip : Activity */
db.Trip.belongsToMany(db.Activity, { 
  through : db.TripActivity,
  foreignKey : 'activityId',
  constraints: false,
});
db.Activity.belongsToMany(db.Trip, { 
  through : db.TripActivity,
  foreignKey : 'tripId',
  constraints: false,
});

/** N:M Trip : Hotel */
db.Trip.belongsToMany(db.Hotel, { 
  through : db.TripHotel,
  foreignKey : 'hotelId',
  constraints: false,
});
db.Hotel.belongsToMany(db.Trip, { 
  through : db.TripHotel,
  foreignKey : 'tripId',
  constraints: false,
});

/** N:M Trip : Food */
db.Trip.belongsToMany(db.Food, { 
  through : db.TripFood,
  foreignKey : 'foodId',
  constraints: false, 
});
db.Food.belongsToMany(db.Trip, { 
  through : db.TripFood,
  foreignKey : 'tripId',
  constraints: false,
});

/** N:M Trip : Shopping */
db.Trip.belongsToMany(db.Shopping, { 
  through : db.TripShopping,
  foreignKey : 'shoppingId',
  constraints: false, 
});
db.Shopping.belongsToMany(db.Trip, { 
  through : db.TripShopping,
  foreignKey : 'tripId',
  constraints: false,
});

/** N:M Trip : Snack */
db.Trip.belongsToMany(db.Snack, { 
  through : db.TripSnack,
  foreignKey : 'snackId',
  constraints: false, 
});
db.Snack.belongsToMany(db.Trip, { 
  through : db.TripSnack,
  foreignKey : 'tripId',
  constraints: false,
});

/** N:M Trip : Transport */
db.Trip.belongsToMany(db.Transport, { 
  through : db.TripTransport,
  foreignKey : 'transportId',
  constraints: false,
});
db.Transport.belongsToMany(db.Trip, { 
  through : db.TripTransport,
  foreignKey : 'tripId',
  constraints: false,
});

module.exports = db;
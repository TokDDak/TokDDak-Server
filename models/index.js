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

module.exports = db;
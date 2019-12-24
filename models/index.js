const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
  config.database, config.username, config.password, config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Activity = require('./activityModel')(sequelize, Sequelize);
db.Country = require('./countryModel')(sequelize, Sequelize);
db.Food = require('./foodModel')(sequelize, Sequelize);
db.Shopping = require('./shoppingModel')(sequelize, Sequelize);
db.Snack = require('./snackModel')(sequelize, Sequelize);
db.Transportation = require('./transportationModel')(sequelize, Sequelize);

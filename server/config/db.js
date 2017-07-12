'use strict'

const Sequelize = require('sequelize');
const env = require('./env');
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  dialect: env.DATABASE_DIALECT,
  define: {
    underscored: true
  }
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;




//Models/tables
db.userNames = require('../models/userNames.js')(sequelize, Sequelize);
db.userProfiles = require('../models/userProfiles.js')(sequelize, Sequelize);

//Relations
// db.userProfiles.belongsTo(db.userNames);
// // User.hasMany(Picture, {
// //   foreignKey: {
// //     name: 'uid',
// //     allowNull: false
// //   }
// // })
db.userNames.hasMany(db.userProfiles);
// db.userNames.hasMany(db.userProfiles, {
//   foriegnKey: {
//     name: 'user_id',
//     allowNull: false
//   }
// });

// db.userProfiles
//        .belongsTo(db.userNames, {
//            foreignKeyConstraint: true
//        })
//    ;
   // The following (since dev11) creates OrdersId in InternetOrders
   // Notice the extra 's' appended to Order(s)Id
// db.userNames
//        .hasMany(db.userProfiles, {
//            foreignKeyConstraint: true
//        })
//    ;

module.exports = db;

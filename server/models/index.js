const fs = require('fs'),
    path = require('path'),
    Sequelize = require('sequelize'),
    basename = path.basename(module.filename),
    env = process.env.NODE_ENV || 'development',
    config = require(`${__dirname}/../../config/config.js`)[env],
    db = {},
    app = require('express');

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(
    config.database, config.username, config.password, config
  );
}

fs
  .readdirSync(__dirname)
  .filter(file =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user_names = require('./user_names.js')(sequelize, Sequelize);
db.user_profiles = require('./user_profile.js')(sequelize, Sequelize);
db.User = require('./user.js')(sequelize, Sequelize);

db.user_profiles.belongsTo(db.user_names);


module.exports = db;

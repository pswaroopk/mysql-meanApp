
'use strict';
module.exports = (sequelize, DataTypes) => {
  //Define the Author model
  const UserName = sequelize.define('user_name', {
    //Define the data types of the User fields
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    full: {
      type: DataTypes.STRING
    },
    display: {
      type: DataTypes.STRING
    },
    first: {
      type: DataTypes.STRING
    },
    last: {
      type: DataTypes.STRING
    },
    middle: {
      type: DataTypes.STRING
    },
    last_two: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  });
  return UserName;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserProfile = sequelize.define('user_profile', {
    mobile_number: {
      type: DataTypes.STRING
    },
    user_status: {
      type: DataTypes.INTEGER
    },
    // user_id: {
    //   type: DataTypes.STRING,
    //   primaryKey: true
    // },
    email: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  });
  return UserProfile;
};

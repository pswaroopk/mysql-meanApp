// 'use strict';
// const models = require('../models');
// module.exports = function(sequelize, DataTypes) {
//
//   var UserProfile = sequelize.define('user_profile', {
//
//
//     mobile_number: {
//       type: DataTypes.STRING
//       // allowNull: false
//     },
//     user_status: {
//       type: DataTypes.INTEGER
//     },
//     user_id: {
//       type: DataTypes.STRING
//     },
//     email: {
//       type: DataTypes.STRING
//     }
//   }, {
//     //set the timestamps to be underscored: (created_at, updated_at)
//     // underscored: true,
//     classMethods: {
//       associate: function(models) {
//         UserProfile.belongsToMany(models.user_names);
//
//         // associations can be defined here
//         // User.hasMany(models.Book, {
//         //   onDelete: 'cascade'
//         // })
//       }
//     }
//   });
//   return UserProfile;
// };


'use strict';
// const models = require('../models');
module.exports = (sequelize, DataTypes) => {
  const UserProfile = sequelize.define('user_profile', {
    mobile_number: {
      type: DataTypes.STRING
      // allowNull: false
    },
    user_status: {
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  });
  return UserProfile;
};

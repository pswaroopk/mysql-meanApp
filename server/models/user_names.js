// 'use strict';
// var models = require('../models');
// module.exports = function(sequelize, DataTypes) {
//   //Define the Author model
//   var UserName = sequelize.define('user_names', {
//     //Define the data types of the User fields
//     user_id: {
//       type: DataTypes.STRING,
//       primaryKey: true
//     },
//     full: {
//       type: DataTypes.STRING,
//       // allowNull: false,
//     },
//     display: {
//       type: DataTypes.STRING,
//       // allowNull: false,
//     },
//     first: {
//       type: DataTypes.STRING,
//       // allowNull: false
//     },
//     last: {
//       type: DataTypes.STRING,
//       // allowNull: false
//     },
//     middle: {
//       type: DataTypes.STRING,
//       // allowNull: false
//     },
//     last_two: {
//       type: DataTypes.STRING,
//       // allowNull: false
//     }
//   }, {
//     //set the timestamps to be underscored: (created_at, updated_at)
//     // underscored: true,
//     timestamps: false,
//     classMethods: {
//       associate: function(models) {
//
//         // associations can be defined here
//         UserName.belongsToMany(models.user_profile);
//
//         // User.hasMany(models.Book, {
//         //   onDelete: 'cascade'
//         // })
//       }
//     }
//   });
//   return UserName;
// };

'use strict';
module.exports = (sequelize, DataTypes) => {
  //Define the Author model
  const UserName = sequelize.define('user_names', {
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

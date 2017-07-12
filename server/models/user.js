// 'use strict';
// module.exports = function(sequelize, DataTypes) {
//   const User = sequelize.define('User', {
//     full_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     display: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     first: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     last: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     mobile: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }
//   },
//   {
//     classMethods: {
//       associate: function(models) {
//         // associations can be defined here
//       }
//     }
//   });
//   return User;
// };

//working ------------------------------------------->
'use strict';
module.exports = function(sequelize, DataTypes) {
  //Define the Author model
  var User = sequelize.define('User', {
    //Define the data types of the User fields
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    display: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    //set the timestamps to be underscored: (created_at, updated_at)
    // underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // User.hasMany(models.Book, {
        //   onDelete: 'cascade'
        // })
      }
    }
  });
  return User;
};
//here--------------------------------------->

// 'use strict';
// const models = require('../models');
// // const Sequelize = require('sequelize');
// //
// // var sequelize = new Sequelize('user', 'rdsdevuser');
//
//
// const UserProfile = sequelize.define('user_profile', {
//   mobile_number: {
//     type: sequelize.STRING
//   },
//   user_status: {
//     type: sequelize.INTEGER
//   },
//   user_id: {
//     type: sequelize.STRING
//   },
//   email: {
//     type: sequelize.STRING
//   }
// }, {
//   classMethods: {
//     associate: function(models) {
//       UserProfile.belongsTo(models.user_names);
//     }
//   }
// });
//
//
//
// const UserName = sequelize.define('user_names', {
//   user_id: {
//     type: sequelize.STRING,
//     primaryKey: true
//   },
//   full: {
//     type: sequelize.STRING
//   },
//   display: {
//     type: sequelize.STRING
//   },
//   first: {
//     type: sequelize.STRING
//   },
//   last: {
//     type: sequelize.STRING
//   },
//   middle: {
//     type: sequelize.STRING
//   },
//   last_two: {
//     type: sequelize.STRING
//   }
// }, {
//   timestamps: false,
//   classMethods: {
//     associate: function(models) {
//       UserName.belongs(UserProfile);
//     }
//   }
// });
// module.exports = {
//   models: {
//     UserName,
//     UserProfile
//   }
// }

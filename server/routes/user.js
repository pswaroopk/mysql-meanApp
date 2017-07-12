'use strict';

module.exports = (app, db) => {
  // console.log('app: ', app);
  // console.log('db: ', db);
  // console.log('db_p: ', db.user_profiles);
  // console.log('db_p: ', db.User);
  app.get('/', (req, res) => {
    db.user_names.findAll({
      include: [
        {
          model: db.user_profiles
        }
      ]
    })
  }).then(data => {
    const resObj = data.map(user =>{
      return Object.assign(
        {},
        {
          user_id: user.user_id,
          full_name: user.full,
          display: user.display,
          first: user.first,
          last: user.last,
          email: user.email,
          mobile: user.mobile_number
        }
      )
    })
  });
}


//var users = require('../controllers/users')
// var router = require('express').Router();
// var { sequelize } = require("../../config/config");




// // var User = sequelize.import("../models/user");
// // var UserDetails = require('../models').user_names;
// // var UserName = require('../m')
//
// //testing
//
// router.get('/:id', function(req, res) {
//   UserDetails.find({
//     // where: {
//     //   id: req.params.user_id
//     // }
//   }).then(function(data) {
//     res.json({
//       status: '1',
//       users: data
//     });
//   });
// });
//
// router.get('/', function(req, res) {
//   UserDetails.findAll({
//     $or :[
//       {
//         email:{
//           $eq: req.params.email
//         },
//         mobile: {
//           $eq: req.params.mobile
//         }
//       }
//
//     ]
//   }).then(function(data) {
//     res.json({
//       status: '1',
//       users: data
//     });
//   });
// });
//
// //testing
// router.post('/create', function(req, res) {
//   UserDetails.create({
//     full_name: req.body.full_name,
//     display: req.body.display,
//     first: req.body.first,
//     last: req.body.last,
//     email: req.body.email,
//     mobile: req.body.mobile
//   })
//   .then(function() {
//     // res.redirect('/');
//     res.redirect('../../public/assets/html/success.html');
//   });
// });
//
// // router.get('/', function(req, res) {
// //   console.log("user", User);
// //   User.findAll({
// //     // include: [ models.Task ]
// //   })
// //   .then(function(data) {
// //     res.json({
// //       status: '1',
// //       users: data
// //     });
// //   });
// // });
//
// // router.post()
//
// module.exports = router;

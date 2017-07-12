'use strict'

const routes = [
  require('./routes/user')
];


// Add access to the app and db objects to each route
module.exports = function router(app, db) {
  return routes.forEach((route) => {
    route(app, db);
  });
};

// const router = require('express').Router();
// const userRouter = require('./routes/user.js');
// router.use('/api/users', userRouter);
// module.exports = router;

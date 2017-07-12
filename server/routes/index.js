const router = require('express').Router();
const userRouter = require('./user.js');
router.use('/api/users', userRouter);
module.exports = router;

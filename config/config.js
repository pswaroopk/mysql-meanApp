module.exports = {
  // "development": {
  //   "username": "root",
  //   "password": "1234",
  //   "database": "users",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // },
  "development": {
    "username": "rdsdevuser",
    "password": "password123",
    "database": "user",
    "host": "cloudhost.cdeqq6kdbc7q.us-west-2.rds.amazonaws.com",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
};

'use strict';

const env = {
  PORT: process.env.PORT || 8082,
  DATABASE_URL: process.env.DATABASE_URL || 'jdbc:mysql://cloudhost.cdeqq6kdbc7q.us-west-2.rds.amazonaws.com:3306/user',
  DATABASE_NAME: process.env.DATABASE_NAME || 'user',
  DATABASE_HOST: process.env.DATABASE_HOST || 'cloudhost.cdeqq6kdbc7q.us-west-2.rds.amazonaws.com',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'rdsdevuser',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'password123',
  DATABASE_PORT: process.env.DATABASE_PORT || 3306,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',

  NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = env;

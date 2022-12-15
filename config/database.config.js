require('dotenv').config();

const databasePassword = process.env.DEVELOPMENT_DATABASE_PASSWORD;

module.exports = {
    "development": {
      "username": "ugzu9tqnskugahja",
      "password": databasePassword,
      "database": "bqtp7enqpmzv8yafvpxz",
      "host": "bqtp7enqpmzv8yafvpxz-mysql.services.clever-cloud.com",
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
  }
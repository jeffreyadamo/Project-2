require('dotenv').config();
module.exports = {
  "development": {
    "username": "root",
    "password": process.env.MYSQL_PASSWORD,
    "database": "passport_demo",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "o2m1feax5jdm5qgc",
    "password": "sve6g57elfwpezzr",
    "database": "m4k9szrmlhvoxnvl",
    "host": "arfo8ynm6olw6vpn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "dialect": "mysql"
  },
  "production": {
    "dialect": "mysql",
    "use_env_variable": "JAWSDB_URL"
  }
}
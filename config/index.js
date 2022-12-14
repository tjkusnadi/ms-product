require('dotenv').config();

const config = {
  db: {
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD
  },
  http: {
    httpPort: process.env.HTTP_PORT
  },
  msAuth: {
    baseUrl: process.env.MS_AUTH_BASE_URL,
  }
};

module.exports = config;
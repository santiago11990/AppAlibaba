const dotenv = require("dotenv");

const config = {
    http:{
        host: process.env.HOST || "0.0.0.0",
        port: process.env.PORT || process.env.HTTP_PORT
    },

    dbString: process.env.DB_CONECTION.STRING
};

module.exports = config;
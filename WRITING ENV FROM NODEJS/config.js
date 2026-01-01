require("dotenv").config();
module.exports = {
    port : process.env.PORT || 3000, 
    dbPassword: process.env.DB_PASSWORD,
};
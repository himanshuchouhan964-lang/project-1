const {pool} = require("pg");
const pool = new pool({
    user: "postgres",
    host: "localhost",
    database: "amity_db",
    password: "2727",
    port: "5432"
});

module.exports = pool;  
module.exports = {
    Host: "localhost",
    USER: "gustaf",
    PASSWORD: "0000",
    DB: "testdb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle:10000
    }
};
const Sequelize = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./sqlite/database.db"
})

sequelize.sync().then(() => {
    console.log('All models were successfully synced')
});

module.exports = { Sequelize, sequelize};
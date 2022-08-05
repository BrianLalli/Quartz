const Sequelize = require('sequelize');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

let sequelize;

if (process.env JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
}else{
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3301
        }
    );
}

module.exports = sequelize;
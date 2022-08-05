const { default: mongoose } = require('mongoose')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })


// establish connection to mongo DB
// you must have the MONGO_URI in your .env file
// in production we will add this uri on the backend
mongoose.connect(process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
    }
);

module.exports = mongoose.connection;

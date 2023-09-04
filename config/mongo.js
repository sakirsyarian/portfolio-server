if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const mongoose = require('mongoose');

const MONGO = process.env.MONGO || 27017;
const URL_MONGO = process.env.URL_MONGO || `mongodb://127.0.0.1:${MONGO}/portfolio`;

try {
    const URI = URL_MONGO;
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;
    db.once('open', () => {
        console.log(`MongoDB database connection`);
    });

    db.on('error', (error) => {
        console.log(`MongoDB connection error: ${error}`);
    });
} catch (error) {
    console.log(error);
}

module.exports = mongoose;

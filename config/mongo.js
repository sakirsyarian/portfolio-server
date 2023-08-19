const mongoose = require('mongoose');

try {
    const URI = 'mongodb://127.0.0.1:27017/portfolio';
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;
    db.once('open', () => {
        console.log(`MongoDB database connection: ${URI}`);
    });

    db.on('error', (error) => {
        console.log(`MongoDB connection error: ${error}`);
    });
} catch (error) {
    console.log(error);
}

module.exports = mongoose;

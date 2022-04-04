const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`MongoDB connecting to: ${connect.connection.host}`);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDb;

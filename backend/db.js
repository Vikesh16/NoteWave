const mongoose = require('mongoose');

const dotenv = require('dotenv')
dotenv.config({ path: './config.env' });

// const mongoURI = "mongodb://localhost:27017/iNoteBook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const mongoURI = process.env.DATABASE ;
// connecting mongodb database to project notewave

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
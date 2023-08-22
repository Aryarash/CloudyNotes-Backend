const mongoose = require('mongoose');
const mongoUrl = 'mongodb://0.0.0.0:27017/Ninja';

const connectToMongo = ()=>{
    mongoose.connect(mongoUrl,()=>{
        console.log('connected to Mongo hello successfully');
    })
};

module.exports = connectToMongo;
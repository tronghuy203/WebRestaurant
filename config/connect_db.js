const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/restaurant',{
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
        console.log("DB connected !!")
    } catch (error) {
        console.log("DB connect fail !!")
    }
    
}

module.exports = {connect}
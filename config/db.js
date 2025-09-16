

// establish a DB connection

const mongoose = require ("mongoose");


const connectionDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");
    }catch(error){
        console.log("MongoDb connection failed")
    }
};

module.exports= connectionDB;


const mongoose = require ("mongoose");

const BookingSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,  // booking specific to each user
        ref:"User",    // user reference booking
        required: true,
    },
    service:{
        type: String,   // type of massage nedded
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    time:{
        type: String,   // like "11am"
        required:true,
    },
    status:{
        type:String,
        enum: ["Pending", "Confirmed", "Cancelled"],
        default:"Pending",
    },
    
    createdAt:{
        type:Date,
        default:Date.now,
    }
});

module.exports= mongoose.model('Booking', BookingSchema)


const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({

  name:{
        type: String,
        required:true,
        trim:true,
    },
    email:{
        type: String,
        required:true,
        unique: true,
    },
    password:{
        type: String,
        required:true,
    },
    
    phone:{ 
        type:String,
    },

    createdAt:{
        type:Date,
        default:Date.now,
    }
});
// for authentication and authgorization purpose - hash password before saving by using
// pre(save) mongoose middleware, runs before the document saved to the database, when the password is modified
//or updated every time - hashing occurs,
//this.isModified("password") checks if the password has been changed.
//If the password hasn’t changed, we skip hashing and call next() to continue saving.
//bcrypt.genSalt(10) generates a salt, a random string used to strengthen the password hash
//this.password is then replaced with the hashed version, so the plain text password is never stored in the database.
//(next)Calls the next middleware or continues the save operation.

//serSchema.set('autoIndex', 



userSchema.pre("save", async function(next){
    if (! this.isModified ("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password, salt)
    next();
});

//compare and match the password
//this.password= enteredPassword

userSchema.methods.matchPassword = async function(enteredPassword){
   return await bcrypt.compare(enteredPassword, this.password);

};


const User = mongoose.models.User || mongoose.model('User', userSchema);
// const User = mongoose.model( "User", userSchema);
 module.exports= User;

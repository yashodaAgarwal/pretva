const mongoose = require("mongoose");
//const crypto = require("crypto");
//const uuidv1 = require("uuid/v1");
const bcrypt = require("bcryptjs")

let userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      //required: true,
      maxlength: 32,
      trim: true,
    },
    lname: {
      type: String,
      //required:true,
      maxlength: 32,
      trim: true,
    },
    CompanyName:{
      type: String,
      //required:true,
      maxlength: 32,
      trim: true,
    },
    country:{
      type: String,
      //required:true,
      maxlength: 32,
      trim: true,
    },
    ContactNo:{
      type: String,
      //required:true,
      maxlength: 32,
      trim: true,
    },
    Type:{
        type: String,
        //required:true,
        maxlength: 32,
        trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
    }, 
},
{ timestamps: true }
);

userSchema.pre('save', async function (next) {
try {
  console.log('entered');
  // if (!this.methods.includes('local')) {
  //   next();
  // }
  //the user schema is instantiated
  const user = this;
  //check if the user has been modified to know if the password has already been hashed
  if (!user.isModified('password')) {
    next();
  }
  // Generate a salt
  const salt = await bcrypt.genSalt(10);
  // Generate a password hash (salt + hash)
  const passwordHash = await bcrypt.hash(this.password, salt);
  // Re-assign hashed version over original, plain text password
  this.password = passwordHash;
  console.log('exited');
  next();
} catch (error) {
  next(error);
}
});

userSchema.methods.isValidPassword = async function (newPassword) {
try {
  return await bcrypt.compare(newPassword, this.password);
} catch (error) {
  throw new Error(error);
}
}

module.exports = mongoose.model("User", userSchema);

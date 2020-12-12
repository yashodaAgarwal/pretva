const JWT = require('jsonwebtoken');
const User = require('../models/User');
const { JWT_SECRET } = require('../configuration');

signToken = user => {
  return JWT.sign({
    iss: 'CodeWorkr',
    sub: user.id,
    iat: new Date().getTime(), // current time
    exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
  }, JWT_SECRET);
}

module.exports = {
    signUp:async (req,res,next)=>{
      const {fname,lname,Type,CompanyName,country,ContactNo,email,password} = req.body;

      const foundUser =await User.findOne({email})
      if (foundUser) { 
          return res.status(403).json({ error: 'Email is already in use'});
        }

      const newUser = new User({fname,lname,Type,CompanyName,country,ContactNo,email,password})
      await newUser.save();

      const token = signToken(newUser);
 
      res.status(200).json({ newUser});
  },
    signIn: async (req, res, next) => {
      // Generate token
      const token = signToken(req.user);
      res.cookie('access_token', token, {
        httpOnly: true
      });
      res.status(200).json({ success: true });
    },
}  

// const User = require("../models/User");
// const { check, validationResult } = require("express-validator");
// var jwt = require("jsonwebtoken");
// var expressJwt = require("express-jwt");

// exports.signUp = (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({
//       err: errors.array()[0].msg,
//     });
//   }

//   const user = new User(req.body);
//   user.save((err, user) => {
//     if (err) {
//       return res.status(400).json(
//         console.log(err.message)
//         //error: user.length < 1 ? "User Not Found" : err.message,
//       );
//     }
//     res.json({
//       name: user.name,
//       email: user.email,
//       id: user._id,
//     });
//   });
// };

// exports.signIn = (req, res) => {
//   const errors = validationResult(req);
//   const { email, password } = req.body;

//   if (!errors.isEmpty()) {
//     return res.status(400).json({
//       error: errors.array()[0].msg,
//     });
//   }
//   User.findOne({ email }, (err, user) => {
//     if (err || !user) {
//       return res.status(400).json({
//         error: err ? err.message : "Please Register First",
//       });
//     }
//     if (!user.autheticate(password)) {
//       return res.status(401).json({
//         error: "Wrong Password.",
//       });
//     }
//     //create token
//     const token = jwt.sign({ _id: user._id }, process.env.SECRET);

//     //send response to frontend
//     const { _id, name, email, role } = user;
//     return res.json({ token, user: { _id, name, email, role } });
//   });
// };

// //protected routes
// exports.isSignedIn = expressJwt({
//   secret: process.env.SECRET,
//   userProperty: "auth",
// });

// //custom middlewares
// exports.isAuthenticated = (req, res, next) => {
//   let checker = req.profile && req.auth && req.profile._id == req.auth._id;
//   if (!checker) {
//     return res.status(403).json({
//       error: "Access Denied",
//     });
//   }
//   next();
// };
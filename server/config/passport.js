const bcrypt = require('bcrypt');
const user = require('../models/user');
const saltRound = 12;

const passport = require('passport'),
  localStrategy = require('passport-local').Strategy,
  JWTStrategy = require('passport-jwt').Strategy,
  ExtractJWT = require('passport-jwt').ExtractJwt;

//   passport.use(
//       'register',
//       new localStrategy({
//           usernameField:'username',
//           passwordField:'passport',
//           session:false,
//       },
//       (username, password,done)=>{
//           try{
//               user.findOne({
//                   where:{
//                       username:username
//                   },
//               }).then(user=>{
//                   if(user!==null){
//                       console.log('username already taken')
//                       return done(null, false,{message:'username already taken'})
//                   }) else{
//                       bcrypt.hash(passport, saltRound)
//                       .then(hashed => {
//                           user.create({
//                               username,password:hashed
//                           })
//                           .then(user =>      {
//                               console.log('user created')
//                               return done(null, user)
//                           })
//                       })
//                   } catch (err){
//                       done(err)
//                   }
//               })
//           }
//       }
//       )
//   )

/*Assignment 5

Write a Sample API'S for POST,PUT,GET,DELETE APIS using mongodb

. push /create new user by using Post method api
. update existing user by using Put method
. get  users list by using Get method
. delete existing user by  Delete method */

//const express = require("express");
//const app = express();
//const mongoose = require("mongoose");
const userModel = require("./model").userModel;
/*mongoose.connect("mongodb://localhost:27017/node-training", {}, (err) => {
  if (err) {
    console.log("unable to connect database");
  } else {
    console.log("DB connection created");
  }
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));*/


//create user
exports.createUser=(req,res)=>{
//app.post("/create-user", (req, res) => {
    console.log("User details", req.body);
    
    userModel.create(req.body, (err, userResp) => {
      console.log("error", err);
      if (err) {
        res.send("User creation failed" + err.message);
      } else {
        res.send({ msg: "User created successfuuly", userResp });
      }
    });
  };
  
  
  //find user
  exports.getUser=(req,res)=>{
  //app.get("/get-user", (req, res) => {
    userModel.find({name :{$exists:true}}, (err, usersList) => {
      if (err) {
        res.send("Failed to fetch users list" + err.message);
      } else {
        res.send({ msg: "Users list", data: usersList });
      }
    });
  };

 //update user    
 exports.updateUser=(req,res)=>{
  //app.put("/update-user", (req, res) => {
    
    userModel.updateOne({ _id: req.body._id },{$set: {name: req.body.name, age: req.body.age}},(err, userUpdateResp) => {
        if (err) {
          res.send("Failed to user update failed" + err.message);
        } else {
          res.send({ msg: "Successfully user updated", data: userUpdateResp });
        }
      }
    );
  };


//delete user
exports.deleteUser=(req,res)=>{
  //app.delete("/delete-user", (req, res) => {
    
  userModel.deleteOne({ _id: req.body._id },(err, deleteResp) => {
        if (err) {
          res.send("Failed to user update failed" + err.message);
        } else {
          res.send({ msg: "Successfully user updated", data: deleteResp });
        }
      }
    );
  };
  
/*app.listen(5002,() => {
    console.log("Port number running on local host:5002");
})*/
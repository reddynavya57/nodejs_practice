/*Assignment 4:-
Write a Sample API'S for POST,PUT,GET,DELETE Methods
. declare usersList as array
. push /create new user by using Post method api
. update existing user by using Put method
. get  users list by using Get method
. delete existing user by  Delete method */




const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

let array = [];

//fetch user
app.post("/create-user", (req,res) => {
    console.log("User details", req.body);
    array.push(req.body)
    res.send({msg:"User added successfully",Data:array});
});

//get users
app.get("/get-user", (req,res) => {
    res.send({msg:"User Details",Data:array});
});

//update user
app.put("/update-user",(req,res) => {
    arrIndex = array.findIndex(i => i.name == req.body.name);
    array[arrIndex].name = req.body.newname;
    res.send({msg: "Data updated", data :array});
    
})

//delete user
app.delete("/delete-user",(req,res) => {
    //console.log(req.body)
    // let toremove = req.body.name;
    array.splice(array.findIndex(a => a.name == req.body.name))

    res.send({ msg: "Successfully deleted user", data: array });
})

app.listen(5001,() => {
    console.log("Port number running on local host:5001");
})




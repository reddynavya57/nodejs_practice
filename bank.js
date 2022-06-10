//Write a program for banking application.write a withdraw,check balance and finalAmount functions.

//1.withraw function takes withdraw amount as input  

//2.checkBalance function check the amount

//3. finalAmount shows the remaining amount if the requested amount is success

//Solve the above with both callbacks and event loops
//current bal=1000
//withdraw=1500

let currentBalance=1000;

const checkBalance = function(callback) {
    // setTimeout(function () {
        console.log("Current Balance: "+currentBalance);
        callback(currentBalance);
    // }, 1000);
}

const withdraw = function(withdrawAmount, callback){
    // setTimeout(function(){
        checkBalance(function(balance){
            if(balance > withdrawAmount) {
                finalAmount(withdrawAmount,function(remAmount){
                    callback("amount withdrawn is "+withdrawAmount +  "and remaining is" +remAmount);
                });
            } else {
                callback("amount not available");
            }
        });
    // },1000);
}

const finalAmount = function(withdrawAmount, callback) {
    // setTimeout(function () {
        let remAmount = currentBalance-withdrawAmount;
        console.log("Final balance: "+remAmount);
        callback(remAmount);
    // }, 1000);
}

withdraw(100);
//withdraw(1500);
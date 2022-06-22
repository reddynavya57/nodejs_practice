var fs = require('fs');
 
fs.readFile('./content/tynybay.txt', 'utf-8', function(err, data) {
    if (err){
        console.log(err)
        return
    } 
//console.log(data.toString())
let str = data.toString()
if (str.indexOf("tynybay") != -1 )
//if (data.toString() == 'tynybay') 
{
var newValue = data.replace(/tynybay/, 'TYNYBAY INDIA PRIVATE LIMITED');
 
result = fs.writeFile('./content/tynybay.txt', newValue, 'utf-8', function(err, data) {
    if (err) {
        console.log(err)
        return
     }
})

} else{
    console.log("tynybay not found")
}

})

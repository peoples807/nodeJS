var fs = require("fs");
var options = {encoding: "utf-8"};
fs.readFile("C:\\Users\\ChidiIfediora\\Dev\\Data\\stockquote_json.txt", options, function(err, data){
    if(err){
        console.log("There was an error reading the file."+err.message);
        return;
    }
    var targetChar = data.match(/t/gi);
    //console.log(targetChar);
    if(targetChar == null)
        console.log("Character not found.");
    else
        console.log(targetChar.length + " occurence(s) were found.");
})

console.log("Does this come first?");
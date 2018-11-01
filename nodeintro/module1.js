var username = "Chidi";
var greeting = "hi ";

var sayHello = function(){
    console.log(greeting + username+"!");
}

exports.sayHello = sayHello;

function greatNews(){
    console.log("Great News!");
}

exports.greatNews = greatNews;

sayHello();
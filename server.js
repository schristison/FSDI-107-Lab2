
var express = require("express");
var app = express(); //create an app

//this is the end request
//the root page
app.get('/', (req, res) => {
    console.log("Someone wants the root page");
    res.send("Hello my friend!! This is my first server!!");
});

//contact page
app.get('/contact', (req, res) =>{
    res.send("This will be the contact page - people working over here!!!");

});

app.get('/aboutme', (req, res) =>{
    res.send("<h1 style='color:blue;'>Sandra Christison</h1>");

});


app.get('/exc/:message', (req, res) => {
    console.log("Message from client: ", req.params.message);
    console.log("testing");

    var msg = req.params.message;
    var vowels = '';
    var allVowels = ['a','e','i','o','u'];
    //1 travel the msg string and print on the console each letter
    for(var i=0; i < msg.length; i++){
        var letter = msg[i];
        console.log(letter);    
        //2 check if each letter is a vowel
        //if it is, add the vowel to vowels string
        if(allVowels.indexOf(letter.toLowerCase()) != -1){
            //3 return each vowel ONLY ONCE
            if(!vowels.includes(letter)) {
                //Decide
                vowels += letter;
            }            
            
        }    
        
    }
    

    res.status(202);
    res.send(vowels);
    //res.send("Thanks for the message");
});



//always leave at the end
app.listen(8080, function(){
    console.log("server running at http://localhost:8080"); //local host has IP address 127.0.0.1
    console.log("Press ctrl+C to kill it");
});

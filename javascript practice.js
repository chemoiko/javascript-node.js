//Cannot be a reserved keyword
//Should be meaningful
//Cannot start with a number (1name)
//cannot contain a space or hyphen
//are case-sensitive


//outputting strings
// console.log('i love pizza');
// console.log('i hate stress');

//////////////////////////////STRING CONCATENATION
// var b = "i love juice " + "and food"

//**********************************APPENDING VARIABLES TO STRINGS */
var lastname = "chemoiko"
var fname = 'elijah'
lastname += fname
console.log(lastname);  //outputs chemoiko elijah


/******************************GETTING STRING LENGTH */
var lastname = "chemoiko"
hisName = lastname.length
console.log(hisName)        //outputs 8


/**************************88ARRAYS */

var words = ("big ", "dog", "bull", "")

// /* multiline comment*/
// //Variable assignment
// let year = 21;
// let lastname ="elijah";
// console.log(age);
// console.log("hello",firstname);
// console.log("You are",age,"years old");


//*********************IF ELSE STATEMENT */
var beast = 9;
if (beast > 1)
{
    console.log("i want it")
}
else{
    console.log("no sir")
}

// //change contents of the html document with its id
// document.getElementById("boom").innerHTML = " we ruminate?";
// document.getElementById("cre").innerHTML = "i am the second line";

document.title = 'yello!';  //this to change title of html document

//arithmetic
// let student = 5;
// students = students + 1;
// console.log(students);
// rem = students % 4;
// console.log(rem);


// //no. increment
// var b = 4;
// b++;          //the no. increasses by 1

//no. decrement
// var c = 5;
// //b--;

// //increment
// var b = 6;
// b+=7; //same shit with other languages

// //decrement
// var y =  8;
// y-= 5;

// divide then initialize
// y /= 5;


// //user input
// /*age = window.prompt("how old are you?")
// age = Number(age)    //this is to convert input into an int
// console.log(age)*/

// let username = "elijah";
// console.log(typeof username);  //displays the datatype
// // all integers are of type number
// //constants 
// const run = 3.14;
// console.log(run);  //constants cannot be re-assigned

// //outputting stuff
// let sername = 'elijahstrom';
// console.log(sername);

// //booleans
// // let skyisblue = false;
// // console.log(skyisblue);



// //objects
// let individual = {
//     hisname: 'elijah',
//     age: 40

// };
// console.log(individual);


// individual.hisname = 'billy'; //changing value of an object
// console.log(individual);

// //lists
// let laptops = ['dell', 'laptop', 'acer'];
// console.log(laptops[1]);

// laptops[3] = 'hp';   //adding items to the list
// console.log(laptops);

//***************************************functions
// function greet()
//     {
//  console.log('how are you');
//     }
// greet();

// function greetheguy(name) //this is parameter
//     {
//         console.log('hello'+ name);
//     }

// greetheguy(' elijah ')  //argument is value to supply for parameter

// function greetguyfully(firstname, lastname) // passing 2 arguments
// {
//     console.log('helo' + firstname + lastname)
// }

// greetguyfully(' elijah ', 'chemoiko')

//storing function in variables (so that you can use it in another function)
function add()
{
    return 5+7;
}
let p =add();  //storing the value of the function in p variable


//annonymous function
var p = function (a,b) {
    return a * b;
}

var x= p(5, 3)
console.log(x);

// *************if statements
// weather = 'cloudy'

// if (weather = 'sunny'){
//     console.log('its a bright day');
// }
// else (weather = 'cloudy')
// {
//     console.log('its  a cloud y');
// }


// //functions simple calulator
// function addition (a, b)
// {
//     return a + b;
// }
// function subtraction (a, b)
// {
//     return a - b;
// }
// function division (a, b)
// {
//     return a / b;
// }
// function multioplication (a, b)
// {
//     return a * b;
// }


// let a = 5;
// let b = 3;
// let choice = 4;  //this is a global funciton seen by all functions because it is outside everything



// console.log("select one");
// console.log("1. addition");
// console.log("2. subtraction");
// console.log("3. division");
// console.log("4. multioplication");


// if(choice === 1)
// {
//     console.log(addition(a, b));

// }else if(choice === 2)
// {
// console.log(subtraction(a,b));

// }
// else if(choice ===3 )
// {
// console.log(division(a,b));

// }
// else if(choice ===4)
// {
// console.log(multioplication(a,b));

// }               





//create a variable function
let greet = function(){
    return "hello world";
}

console.log(greet());

// //******************************************************ARRAYS */

// var myArray = ["string", 24] //arrays can be of any data type
// var myArray = [40, 50, 47, 24]
// myArray[1] = 21 ///changing a value of an element in the array
// console.log(myArray)


// //nested arrays
// let ourArray = [[20, 30, 40], ["hp", "lenovo", "dell"], ["samsung", "iphone", "tecno"]]
// console.log(ourArray[0][2])  //accessing item from nested array


// //adding element to array
// ourArray.push(["beyonce","selena","shakira"]) //it's now added
// console.log(ourArray)

// //removing last element from array
// let hisArray = ["audi", "toyota", "corona"]
// console.log(hisArray)
// hisArray.pop()
// console.log(hisArray)
// let removedElement = hisArray.pop() //storing removed element into this variable
// console.log(removedElement)

// //removing element from beginning of array
// let yourArray = ["beyonce","selena","shakira"]
// yourArray.shift()   //removes beyonce from the array
// console.log(yourArray)


// //adding element to beginning of array
// let herArray = ["beyonce","selena","shakira"]
// console.log(herArray)
// herArray.unshift("ciara") //ciara added to beginning of array
// console.log(herArray)

// //for loop to add values to an array
// let forLoopArray =[];  ///first, show the compiler that this variable is an array
// for(var i = 0; i<5; i++) 
// {
//     forLoopArray.push(i);
// }
// console.log(forLoopArray)

// //for loop to sum values in an array
// let sumArray = [1, 2, 3]
// let total;
// for (var i = 0; i<sumArray.length ; i++)
// {
//     total += sumArray[i]
// }

// //arrays

// var myArray = ["string", 24] //arrays can be of any data type
// var myArray = [40, 50, 47, 24]
// myArray[1] = 21 ///changing a value of an element in the array
// console.log(myArray)


// //nested arrays
// let ourArray = [[20, 30, 40], ["hp", "lenovo", "dell"], ["samsung", "iphone", "tecno"]]
// console.log(ourArray[0][2])  //accessing item from nested array


// //adding element to array
// ourArray.push(["beyonce","selena","shakira"]) //it's now added
// console.log(ourArray)

// //removing last element from array
// let hisArray = ["audi", "toyota", "corona"]
// console.log(hisArray)
// hisArray.pop()
// console.log(hisArray)
// let removedElement = hisArray.pop() //storing removed element into this variable
// console.log(removedElement)

// //removing element from beginning of array
// let yourArray = ["beyonce","selena","shakira"]
// yourArray.shift()   //removes beyonce from the array
// console.log(yourArray)


// //adding element to beginning of array
// let herArray = ["beyonce","selena","shakira"]
// console.log(herArray)
// herArray.unshift("ciara") //ciara added to beginning of array
// console.log(herArray)

// //for loop to add values to an array
// let forLoopArray =[];  ///first, show the compiler that this variable is an array
// for(var i = 0; i<5; i++) 
// {
//     forLoopArray.push(i);
// }
// console.log(forLoopArray)

//for loop to sum values in an array
let sumArray = [1, 2, 3]
let total;
for(var i = 0; i < sumArray.length ; i++)
{
    total += sumArray[i]
}
console.log(total)


//finding the last characters in an array
let username = "elijah"
console.log(username[username.length - 1]) //getting the last letter 
console.log(username[username.length - 2]) //getting the second last letter  





//*******************************************GETTING TODAYS DATE */
let myDate = new Date(),        
 month = myDate.getMonth(),
 day = myDate.getDay(),
 date = myDate.getDate();
console.log(myDate);


var num = Math.ceil(Math.random()*10)
console.log(num)

var guess = prompt("guess anumber between")

//**************************************************GETTING RANNDOM NUMBER */

var num = Math.ceil(Math.random()*10) //gets random value between 1 and 10 (the ceil rounds it up)
console.log(num)



//sorting through arrays (arranging in alphabetical order)
let numberArray = ["orange", "apple", "bana"]
numberArray.sort();
console.log(numberArray) //this method only works for strings


numberArray.reverse();
console.log(numberArray) 


//reverses the array

let numeralArray = [32,4,5,214,124];
console.log(numeralArray);
numeralArray.sort(function(a, b){return a - b}); //this method sorts integers
console.log(numeralArray);  



//************************************************converting to array
let universeString = "jupiter mars saturn earth"
console.log(universeString)
let universeStringConvertedToArray = universeString.split(" ") //remember waht is in split brakcets is the character you want to split the string by(for this case it will spllit whenever we find a space, while if it was split(","), we wwere to split whenever we find a comma)
console.log(universeStringConvertedToArray)

//*************************************************converting to string
let countryArray = ["uganda", "kenya", "moscow"]
console.log(countryArray)
let countryArrayConvertedToString = countryArray.join("-")  //same concept of array applies to string
console.log(countryArrayConvertedToString)




//*********************************************DOM */
//basic to knows
console.log(document.title)  //printing out document title on console
console.log(document.URL)

document.title = "new title"  //changing the title of the web page
console.log(document.title)  //printing out document title on console

document.title = "kenya game on 17th"
// document.location = "http://www/google.com"
document.body.style.backgroundColor = "yellow";  //changing the background color of the web page




//**************************************888ADDING AND CREATING ELEMENTS */
//best to use create Element instead of innerHTML because of xss attaacks by hackers
const heading = document.createElement('h1')
heading.textContent = "i am the first"; //this assigns the string to heading
document.body.append(heading); //adding the heading content to the body

const drinksList = document.querySelector("#drinks"); //selecting drinks list
const drink = document.createElement("li"); //creating new list element
drink.textContent = "lemonade";
drinksList.append(drink); //adding lemonade to the end of list

const another = document.querySelector("#fruit");
const anotheritem = document.createElement("li");
listitem.textContent = "guava";
myList.prepend(listitem); //adding mango to beginning of list items

//inserting element in middle of list
    let fruits = document.getElementById("fruits")
    let fruitItem = document.createElement("li");
    fruitItem.textContent = "mango"
    fruits.insertBefore(fruitItem, fruits.getElementsByTagName("li")[1])  //this inserts new item at index no. 1
    



//********************************************************inserting css
    const title = document.querySelector("#title");
    title.style.border = "2px solid blue";
    title.style.textAlign = "center";

//*******DOMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM */
document.body  (the body in this is the actual body of the document)
//get elements by id  (btw its only id that has singular element)
document.getElementById("first").innerHTML = "hello" //changing contents of element with id first
let heading = document.getElementById("first")
heading.style.backgroundColor = "lightgreen";  //changing color of heading to light green


//get elements by name //mainly for radio buttons //it will return all the items with name fruits
let fruits = document.getElementsByName("fruits");
console.log(fruits[0])

fruits.forEach(fruit =>
{
    if(fruit.checked)
        {
console.log(fruit.value);
    }
})   //this will print out the value of the checked fruit


//get elements by tag name //this is to access elements
let vegetables = document.getElementsByTagName("li");
vegetables[2].style.backgroundColor = "aliceblue"; //changes the background color of the 3rd item
 

//get elements by class name
let desserts = document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor = "pink"

//query selector. (here u can select an element by id,class name, tag or attribute)
//query selector by default selects all elements  of the group
let firstheading = document.querySelector("#first") //for the id  we use a hash prefix
firstheading.style.backgroundColor = "blue";


let drinks = document.querySelector(".drinks"); //for the class we use a period prefix
drinks.style.backgroundColor = "grey";

let attributes = document.querySelector("[for]"); //for the attributes we use sq brackets. here the first element with for attribute is selected
attributes.style.backgroundColor = "indigo";

let selectingAllOfTheIndictedType = document.querySelectorAll("li"); //here all the of the type li are edited
selectingAllOfTheIndictedType.forEach(selectingAllOfTheIndictedType=>
{
    selectingAllOfTheIndictedType.style.backgroundColor = "lightgreen";  //changes all li elements to background color of green
})

//this styles all li elements red
let elements = document.querySelectorAll("li");
elements.forEach(element =>
    {
        element.style.backgroundColor = "red";
    })

//*****************************CHANGING CSS ELEMENTS */
const first = document.getElementById("lead");
first.style.backgroundColor= "#282287";
first.style.color = "rgb(40, 43, 23)";
first.style.textAlign = "center";
first.style.border = "2px solid black";



//******************************************DOM traversal */

//firstElementChild
//LastElementChild
//parentElement
//nextElementSibling
//previousElementSibling
//children[]
//Array.from.(.children)

let element = document.body;
let child = element.firstElementChild;  //changes the first child of the body element to light green
child.style.backgroundColor = "lightgreen"; 

let item = document.querySelector("#vegetables"); 
let parent = item.parentElement;
parent.style.backgroundColor = "maroon"; //changes the background  color of the parent of elements in vegetables id which is the body


let brother = document.querySelector("#vegetables");
let sibling = brother.nextElementSibling; //this gives us the next sibling of the first element with the vegetables id
sibling.style.backgroundColor = "yellow";

let yummies = document.querySelector("#fruits");
let firstborn = yummies.firstElementChild;  //changes the first child of the body element to light green
firstborn.style.backgroundColor = "pink"; 

let  usingIndexes= document.querySelector("#fruits");
let theSecondOne = usingIndexes.children[1];  //changing an individual components color with indexes
theSecondOne.style.backgroundColor = "blue"; 


let  usingArrays = document.querySelector("#desserts");
let children = Array.from(element.children);  //it iterates through elements of dessert it and changes their background color to white
children.forEach(child => child.style.backgroundColor = "white"); 











//**************************EVENTS  */
//************************************EVENT HANDLERS */
// //method 1(here in the html there is the onclick attribute)
// const box = document.getElementById("myButton");

// function changeRed(){
//     box.style.backgroundColor = "orange";
// }

//method 2(here you dont need the onclick attribute in html)
const box = document.getElementById("myButton");
box.onclick = changeRed; 

function changeRed()
{
    box.style.backgroundColor = "blue";
}


//or if u just want it to execute from javascript
// const element = document.getElementById("button");
// element.onclick = askforname;


//every time the page loads, it invokes the given function
// const element = document.body;
// element.onload = askforname; 

// const element = document.getElementById("myDiv");
// element.onmouseover = doSomething;
// element.onmouseout = doSomethingElse; //when the mouse leaves the div area , do what is in the doSomethingElse function
// element.onmousedown = doSomethingElse;
// element.onmouseup = doSomethingElse; 

// function doSomething()
// {
//     element.style.backgroundColor = "red";
// }

// function doSomethingElse()
// {
//     element.style.backgroundColor = "lightgreen";
// }



//**********************************EVENT LISTENERS */(event, function, usecapture)
// //their advantage is you can add many event handlers to one element.
// const innerDiv = document.getElementById("innerDiv")
// const outerDiv = document.getElementById("outerDiv")

// outerDiv.addEventListener("mouseover", doSomething);
// innerDiv.addEventListener("mouseover", doSomething);

// outerDiv.addEventListener("mouseout", doSomethingElse);
// innerDiv.addEventListener("mouseout", doSomethingElse);

// function doSomething(){
//     innerDiv.style.backgroundColor = "blue";
// }

// function doSomethingElse(){
//     innerDiv.style.backgroundColor = "lightgreen";
// }


//for the case  of one div being inside another div

//event listeners 
const element2 = document.getElementById("innerDiv");
const element = document.getElementById("outerDiv");
element.addEventListener("click", changeRed);
element2.addEventListener("click", changeRed, true); //this true element specifies which element is to be handled first

function changeRed(){
    alert(`You selected ${this.id}`);
    this.style.backgroundColor = "red";
}


//using function as second parameter
let box = document.getElementById('box');
// box.addEventListener('click', function (){
//     this.style.backgroundColor = "red"
// });


//user input
let a = window.prompt("enter first number");
a = Number(a)

let b = window.prompt("enter second name");
b = Number(b)

c = a + b;
console.log(c);

let userName = window.prompt("what's your name?");
console.log(userName);

let heading = document.getElementById("first");
let furst =  document.createElement("h3")
furst.textContent = "i am the third";
heading.append(furst);



//***************8DOM TRAVERSAL */
//firstElementChild
//.lastElementChild
//.parentElement
//.nextElementSibling
//.previousElementSibling
//..children[]
//Array.from(.children)

// let element = document.body  //this is indicating the referal element (therefore any thing after is referring to this e.g child of body is obviously the lists, if it were a list here the child would be the list items)
// let child = element.firstElementChild;  // this is getting the child of the body above
// child.style.backgroundColor = "lightgreen";  

// let anotherElement = document.getElementById("fruits")
// let anotherChild = anotherElement.firstElementChild;
// anotherChild.style.backgroundColor = "yellow";

// let anotherElement2 = document.getElementById("desserts")
// let anotherChild2 = anotherElement2.firstElementChild;
// anotherChild2.style.backgroundColor = "yellow";

// //getting parents
// let thing = document.getElementById("desserts");
// let thingParent = thing.parentElement;  //this gets the parent element of thing and stores it in thing
// thingParent.style.backgroundColor  = "purple";

//getting sibling

// let one = document.getElementById("fruits");
// let onesSibling = one.nextElementSibling;
// onesSibling.style.backgroundColor = "black";

// let two = document.getElementById("vegetables");
// let twosSibling = two.previousElementSibling;
// twosSibling.style.backgroundColor = "red";



let elijah = document.body;
let elijahsLastChild = elijah.lastElementChild;
elijahsLastChild.style.backgroundColor = "yellow";


//or we can use array method
let element = document.querySelector("#fruits");
let children = Array.from(element.children)

children.forEach(child =>
    
        child.style.backgroundColor = "skyblue"  //changes all children of id fruits to blue
    )


        //inserting element in middle of list
let fruits = document.getElementById("fruits")
let fruitItem = document.createElement("li");
fruitItem.textContent = "mango"
fruits.insertBefore(fruitItem, fruits.getElementsByTagName("li")[1])  //this inserts new item at index no. 1






//printing keys you have pressed
// window.addEventListener("keydown", event => console.log(event.key));


//moving a box around
const outerDiv = document.getElementById("outerDiv");
window.addEventListener("keydown", move);
let x = 0;
let  y= 0;

function move(event)
{
    switch(event.key){
        case "ArrowDown":
            y+=5;
            outerDiv.style.top = y + "px";
            break;
        case "ArrowUp":
            y-=5;
            outerDiv.style.top= y + "px";
            break;
        case "ArrowRight":
            x+=5;
            outerDiv.style.left = x + "px";
            break;
        case "Arrowleft":
            x-=5;
            outerDiv.style.left = x + "px";
            break;
        }

}


//***************************8arrow functions (converting ordinary to arrow functions)
//2 parameters
function add(a, b){
    return a + b;
}

console.log(add(3, 4)); 

//arrow style
let addition = (a, b) => a+b;   //asumes whatever comes after arrow is returned by the funciton}
console.log(addition(3,4))


//1 parameter

var a =5;
function arith(a){
    return a;
}

let a2 = a => a;  //when one parameter , brakcets are removed from parameter after equal sign
console.log(a2);  //outputs 5


//0 parameters
function greet(){
    return 'hello'
}

let gd = () => 'hello'  
console.log(gd);

//using normal way

let box = document.getElementById("box");
// box.addEventListener('click', dosomething)

// function dosomething(){
//     this.style.backgroundColor = "red"
// }

//using function as second parameter
// box.addEventListener('click', function (){
//     this.style.backgroundColor = "red"
// });

// box.addEventListener('click', dosomething)

// function dosomething(){
//     this.style.backgroundColor = "red"
// }

//using arrow function
box.addEventListener('click', ()=> this.style.backgroudColor = "red")    //u dont have to give the function a name

//objects
const person ={
    firstName: 'sponge',
    lastName: 'bob',
    age: 30,
    sex: 'male'
}

console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)


//*********************************NODEJS */

//text/plain is the same as plain text
// var http = require('http');
// var fs = require('fs');


// http.createServer(function (req, res) {
//     fs.readFile('demofile1.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       return res.end();
//     });
//   }).listen(8080);

//creating files
-open
-append
-write

//updating files
-append
-write







//append methdod..(the append method appends specified content to a file .if the file doesn't exist, a new file will be created)
// var fs= require('fs');
// fs.appendFile('mynewFile1.txt', 'hello content!', function(err)
// {
//     if(err) throw err;
//     console.log('Saved!');
// });

//open file  ...(this takes a flag 'w' as the second argument ,which is for writing, and if there was no existing file, an empty file is created )
// var fs=require('fs');

// fs.open('mynewfile2', 'w', function(err, data)
// {
//     if(err) throw err;
//     console.log('Saved!')
// })

    

//writing files...(it replaces the specified content if exists, and if not exists, creates new file containing specified content)
// var fs=require('fs');

// fs.writeFile('mynewfile3', 'Hello Content!', function(err)
// {
//     if(err) throw err;
//     console.log('Saved!');
// })


// //deleting
// var fs=require('fs');

// fs.unlink('mynewfile2.txt', function(err)
// {
//     if(err) throw err;
//     console.log('file deleted!');

// })



//renaming
// var fs=require('fs');

// fs.rename('mynewfile1.txt', 'ycmpb.txt', function(err){
//     if(err) throw err
//     console.log('File renamed!');
// })


//url parsing
var url = require('url')
var adr =  'http://localhost:8080/default.htm?year=2017&month=february'
var q = url.parse(adr, true)

console.log(q.host);
console.log(q.pathname);
console.log(q.search);


var qdata = q.query;
console.log(qdata.month);



//URL module
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8090);
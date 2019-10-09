function sayHelloWorld(){
    console.log("Hello, world!");
  }

  sayHelloWorld(); 
// Expected output: "Hello, world!"

function ilovejavascript(){
    console.log("i love javascript");
  }

  ilovejavascript(); 
// Expected output: "i love javascript"

function greetAFriend(friendName){
    console.log(`Hello, ${friendName}!`)
  }

  greetAFriend("David");
greetAFriend("Dwayne");
greetAFriend("Kim");

function greetAFriend2(friendName, timeOfDay){
    var greeting;
    if(timeOfDay === "morning"){
      greeting = "Good morning";
    } else if (timeOfDay === "afternoon"){
      greeting = "Good afternoon";
    } else if (timeOfDay === "evening"){
      greeting = "Good evening";
    } else {
      greeting = "Hello";
    }
    var personalGreeting = `${greeting}, ${friendName}!`;
    console.log(personalGreeting);
  }
  
  greetAFriend2("Todd", "evening"); // Good evening, Todd!
  greetAFriend2("Jamie", "morning"); // Good morning, Jamie!
  greetAFriend2("Hannah", "afternoon"); // Good afternoon, Hannah!
  greetAFriend2("Norman", "midnight"); // Hello, Norman!


  function makeAPizza(crustType, size, toppingsArray){
    var finishedPizza = `A ${size} pizza with ${crustType} crust and ${toppingsArray.join(", ")} on top.`
    return finishedPizza;
  }
  
  var myPizza = makeAPizza("wheat", "large", ["green peppers", "onions", "pepperoni"]);
  
  var yourPizza = makeAPizza("white", "medium", ["anchovies", "feta", "pineapple"]);
  
  console.log(myPizza); 
  // Expected output: "A large pizza with wheat crust and green peppers, onions, pepperoni on top."
  
  console.log(yourPizza);
  // Expected output: "A medium pizza with white crust and green anchovies, feta, pineapple on top."

  var classPizza= makeAPizza("thin", "xxxl", ["pep", "pineapples", "brazilnuts"])

console.log(classPizza);

function tacotruck(typeOfShell, topping){
    var finishedTaco = "your${typeOfShell} taco with ${topping} is ready!"
return finishedTaco;
}

var tacotruck("softshell", "chicken")

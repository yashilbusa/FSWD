//Task 1 
//Declare a variable using var, let, and const. Assign different data types to each variable and print their values.


function task1(){

    let x;
    var y;
    const z=0;
    
    x=16;
    y=10
    //z=34;
    
    console.log(x);
    console.log(y);
    console.log(z);
    
    }
    
    task1();
    
    
    
    //Task 2
    //Write a function that takes two numbers as arguments and returns their sum, difference, product, and quotient using arithmetic operators.
    
    function sum(a,b)
    {
        return a+b;
    }
    
    function dif(a,b)
    {
        return a-b;
    }
    
    function mul(a,b)
    {
        return a*b;
    }
    
    function div(a,b)
    {
        return a/b;
    }
    
    console.log("Sum is " +sum(9,10));
    console.log(`Differnce is ${dif(50,6)}`);
    console.log("Multiplication is " +mul(9,10));
    console.log("Division is " +div(90,10));
    
    
    //Task 3
    //Write a program that prompts the user to enter their age. Based on their age, display different messages:
    // 1st If the age is less than 18, display "You are a minor."
    // 2nd If the age is between 18 and 65, display "You are an adult."
    //3 rd If the age is 65 or older, display "You are a senior citizen."
    
    
    function age(a){
        if(a<18)
        {
            console.log("You are a minor.");
        }
    
        else if(a>18 && a<65)
        {
            console.log("You are an adult.");
        }
    
        else if(a>65)
        {
            console.log("You are a senior citizen.");
        }
    }
    
    let a = prompt("Enter a age");
    age(a);
    
    
    
    
    //Task 4 
    //Write a function that takes an array of salary as an argument and returns the min/max salary in the array.
    
    function task4(arr){
    
        let min=arr[0];
        let max=arr[0];
    
        for(i in arr)
        {
            if(arr[i]<min)
            min=arr[i];
    
            if(arr[i]>max)
            max=arr[i];
        }
    
        console.log(min +" is Minimum");
        console.log(max +" is Maximum");
    
    }
    
    task4([10,13,16]);
    
    
    
    //Task 5 
    //Create an array of your favorite books. Write a function that takes the array as an argument and displays each book title on a separate line.
    
    let favouritebook = ["Book1" , "Book2" , "Book3"];
    function task5(favouritebook){
    
        for(i in favouritebook)
        console.log(favouritebook[i] +"\n");
    }
    
    task5(favouritebook);
    
    
    
    //Task 6
    //Declare a variable inside a function and try to access it outside the function. Observe the scope behavior and explain the results. [var vs let vs const]
    
    
    //Task 7
    //Create an HTML page with a button. Write JavaScript code that adds an event listener to the button and changes its text when clicked.
    
    
     document.addEventListener("DOMContentLoaded", function(event) {
          function changeText() {
            let button = document.getElementById("myButton");
            button.textContent = "Button Clicked!";
          }
          
          let button = document.getElementById("myButton");
          button.addEventListener("click", changeText);
        });
    
    
    
    //Task 8
    //Write a function that takes a number as an argument and throws an error if the number is negative. Handle the error and display a custom error message.
    
    function task9(n)
    {
        if(n<0)
        throw ("It is a Negative Number");
    }
    
    try{
        task9(-16);
    }
    catch(err){
        document.getElementById("demo").innerHTML = err.message;
    }
    
    
    
    
    //Task 9
    //Write a function that uses setTimeout to simulate an asynchronous operation. Use a callback function to handle the result.
    
    setTimeout(() => {
        console.log("21IT016")
    }, 1000);
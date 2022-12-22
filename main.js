
// Callback Function
function doSomething(number, callback){
    console.log("My Favourite number is ",number);
    callback();
}

/*
// implemented the callback function
function myFun(){
    console.log("JavaScript is Beautiful");
}

// call to function
doSomething(7,myFun());
*/

// call function
doSomething(7,()=>{
    console.log("JavaScript is Beautiful")
})

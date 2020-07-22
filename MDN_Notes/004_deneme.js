for (i = 0 ; i < 5; i++ ){

    console.log(i)
    i = i + 3
}

let anObj = {
    model : "toyota",
    make : "1984"
}

function dump_props(obj, obj_name) {
    let result = '';
    for (let i in obj) {
        console.log("hello2")
      result += obj_name + '.' + i + ' = ' + obj[i] + '<br>';
    }
    result += '<hr>';
    return result;
}

console.log(dump_props(anObj,"car"))

console.log(
Function(
    function f (){
        console.log("this is a function...")
    }
) )

// This property gets the inner function not the outer function and the properties of the outer function can 
// only be reacheable by the inner function...
var getCode = (function() {
    var apiCode = '0]Eal(eh&2';    // A code we do not want outsiders to be able to modify...
    
    return function() {
      return apiCode;
    };
}
)();
  

function x (){
    console.log("selam")
}

function x (message){
    console.log(message)
}

x()
console.log(getCode.apiCode);    // Returns the apiCode
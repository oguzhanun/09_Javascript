// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but
// exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// eg:

// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false



function validatePIN (pin) {
  
    if((pin.trim().split("").filter((e)=>{
      return !isNaN(Number(e))
    }).length == pin.length) && (pin.length == 4 || pin.length == 6)){
      return true
    } else return false
}

console.log(!isNaN(Number(" ")))  // THIS SHOWS THAT THE NUMBER FUNCTION RETURNS A NUMBER FOR " "

console.log("-1.234".split("").filter((e)=>{
    return !isNaN(Number(e)) 
  }).length)

console.log(validatePIN("123 "))




// ------OTHERS SOLUTION--------
// function validatePIN(pin) {
//     return /^(\d{4}|\d{6})$/.test(pin)
//   }


// function validatePIN (pin) {
//     return  (pin.length == 4 || pin.length == 6) && parseInt(pin) == pin
//   }


// function validatePIN (pin) {
//     var reg = new RegExp('^([0-9]{4}|[0-9]{6})$');
//     return reg.test(pin);
//   }
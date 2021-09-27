const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('welcome, try out the password validator tool')

reader.question('Please enter password---', function(input){
  
let password = input

if (password.length > 10) {
  console.log("You have a strong password")
} else {
  console.log("password is weak, must contain 10 characters")
}


  reader.close()

});

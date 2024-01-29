console.log("Select an option: \n 1.Add \n 2.Substract \n 3.Multiply \n 4.Divide");

var num1 = prompt("Please Enter first number: ");
var num2 = prompt("Please Enter second number: ");
var option = prompt("Please  choose an operation: ");
var result = null;

num1 = parseInt(num1);
num2 = parseInt(num2);
option = parseInt(option);

var num1Con = isNaN(num1);
var num2Con = isNaN(num2);
var optionCon = isNaN(option);

if (num1Con || num2Con || optionCon) {
    console.log("Invalid input!")
} else {
    switch (option) {
        case 1:
            result = num1 + num2;
            break;
        case 2:
            result = num1 - num2;
            break;
        case 3:
            result = num1 * num2;
            break;
        case 4:
            result = num1 / num2;
            break;
        default:
            break;
    }
}

if (result == null) {
    console.log("No result!");
} else {
    console.log("result : " + result);
}













// *****   Grade calculator    ********




// var number = prompt("Please Enter your marks: ");
// number = parseInt(number);
// var grade;

// if (number <= 100 && number >= 80) {
//     grade = "A+";
// } else if (number <= 80 && number >= 70) {
//     grade = "A";
// } else if (number <= 70 && number >= 60) {
//     grade = "B";
// } else if (number <= 60 && number >= 50) {
//     grade = "C";
// } else if (number <= 50 && number >= 40) {
//     grade = "D";
// } else if (number <= 40 && number >= 0) {
//     grade = "F";
// } else {
//     grade = "Invalid Input";
// }

// console.log("Your grade is : " + grade);













// *****   Temparature calculator    ********




// var temp = prompt("Please Enter a temparature: ")
// var result = 9 / 5 * temp + 32;
// alert("Farenheit: " + result + "Degree");
// console.log("Task Complete!")



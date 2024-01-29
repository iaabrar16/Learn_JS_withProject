var number = prompt("Please Enter your marks: ");
number = parseInt(number);
var grade;

if (number <= 100 && number >= 80) {
    grade = "A+";
} else if (number <= 80 && number >= 70) {
    grade = "A";
} else if (number <= 70 && number >= 60) {
    grade = "B";
} else if (number <= 60 && number >= 50) {
    grade = "C";
} else if (number <= 50 && number >= 40) {
    grade = "D";
} else if (number <= 40 && number >= 0) {
    grade = "F";
} else {
    grade = "Invalid Input";
}

console.log("Your grade is : " + grade);



// *****   Temparature calculator    ********
// var temp = prompt("Please Enter a temparature: ")
// var result = 9 / 5 * temp + 32;
// alert("Farenheit: " + result + "Degree");
// console.log("Task Complete!")



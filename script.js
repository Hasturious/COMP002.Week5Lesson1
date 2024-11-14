myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;

for (let i = 0; i < myGrades.length; i++) {

myAverage += myGrades[i];

}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);

//OK so to start arrays first elements are ZERO so the "let i = 1" should be "let i = 0" the "1" skips the first value in the array skewing the average
//Still we get a Nan
//The value should be ~=88.71
//OK so removing the = from i <= myGrades.length seems to fix the rest of the code
//My guess is that something about the array length is undefined or NaN

function numberInput(number) {
    if ()
}

console.log(numberInput(50))
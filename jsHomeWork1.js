'use strict';

//תאבת נאטור חגאגרה - 212790406
//חכם נאטור - 318486479


/////////////////////////////////////////////////
//#region - if\else from task 1 to 7 :

//Task 1: Alert ? yes there is hello because ("0") is true - (string that has content.)
if ("0") {
  alert('Hello');
}


//Task 2 : official name of JAVA-SCRIPT :
let task2 = prompt("What is the official name of JAVA-SCRIPT?")
if (task2 === "ECMAScript") {
  alert("Correct!")
}
else {
  alert("you don't know? its ECMAScript!")
}


/*Task 3 : transfer (if\else) to (teranry operator) :
// let score = 75;
// let grade;
// if (score >= 90) {
//   grade = "A";
// } else if (score >= 80) {
//   grade = "B";
// } else if (score >= 70) {
//   grade = "C";
// } else if (score >= 60) {
//   grade = "D";
// } else {
//   grade = "F";
// }
 console.log("הציון הוא:", grade);*/
// Answer :
let score = 75;
let grade = (score >= 90) ?
  "A" : (score >= 80) ?
    "B" : (score >= 70) ?
      "C" : (score >= 60) ?
        "D" : "F";

console.log("The score is: ", grade);


//Task 4 : x bigger\equal\smaller 0 :
let task4 = Number(prompt("enter a number: "))
if (task4 > 0) {
  alert("1")
}
else if (task4 === 0) {
  alert("0")
}
else if (task4 < 0) {
  alert("-1")
}
else {
  alert("not a number!")
}


//Task 5 : from (if\else) to (teranry operator) :
// let result;
// if (a + b < 4) {
//   result = 'Not enough';
// } else {
//   result = 'A lot';
// }
//////////////////////////////
let result = (a + b < 4) ? 'Not enough' : 'A lot';


//Task 6 : from (if\else) to (teranry operator) :
// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Hello';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
let message = (login == 'Employee') ?
  'Hello' : (login == 'Director') ?
    'Hello' : (login == '') ?
      'No login' : '';


//Task 7 : console.log() results are:
console.log(false || 'sdf'); // true
console.log(false && ''); // false
console.log(true || ''); // true
console.log(true && ''); // '' - it returns empty console.log. last false is empty string.
console.log(undefined || null); // null
console.log(undefined || 0 || null); // null
console.log(undefined && 0 && null); // undefined
console.log(1 || 0); // 1
console.log(null || 1); // 1
console.log(null || 0 || 1); // 1

//#endregion - (if\else)
//////////////////////////////////////////

//////////////////////////////////////////
//#region - loops from task 1 to 10 :

//Task 1: sum of numbers from 1 to 100.
let i = 1, res = 0;
while (i <= 100) {
  res += i;
  i++;
}
console.log("result is " + res);


//Task 2: type positive number in loop do-while.
do {
  let y = Number(prompt("enter a positive number : "))
} while (isNaN(y) || y <= 0);
console.log("the number is: " + x)


//Task 3:
for (let i = 1; i <= 10; i++) {
  console.log("7" + "*" + i + "=" + (7 * i))
}


//Task 4: guees the number from 1 to 10
const secretNum = 7;
for (; ;) { // infinite loop
  let guess = Number(prompt("guess the number between 1 to 10 :"))
  if (guess === secretNum) {
    alert("true! the number is: " + secretNum)
    break;
  }
  else {
    alert("false, it is not: " + guess)
  }
}


//Task 5: הצגת כל המספרים חוץ מאלו שמתחלקים ב 3 ללא שארית.
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0)
    continue;
  console.log(i)
};


//Task 6: Answer :
/**
 * הערך האחרון הוא 0, בגלל שפעולת חיסור נמצאת משמאל למשתנה i.
 * אז הקוד מבצע חיסור קודם כל ואז מדפיס אותו. וכשהוא מגיע ל 0 ומדפיס, חוזר לבדוק תנאי ו 0 מקבל
 * FALSE.
 */

i = 3;
while (i) {
  alert(--i);
}


//Task 7:
/**
 * NO, in the first loop(++i), the increament is done before checking the Condition if its smaller than 5, so the last console log is 4.
 *
 * and the second loop is making the increament after cheking the Condition smaller than 5, so the last console log is 5.
 */
i = 0;
while (++i < 5)
  console.log(i);

i = 0;
while (i++ < 5)
  console.log(i)


//Task 8: YES, they do show the same results, because the action i++\++i in for loop is done after finishing all of the loop functions. they both show the numbers from 0 to 4.
for (i = 0; i < 5; i++)
  console.log(i);

for (i = 0; i < 5; ++i)
  console.log(i);


//Task 9: 2,4,6,8,10
for (i = 1; i <= 10; i++)
  if (i % 2 === 0)
    console.log(i);


//Task 10:
// for (i = 0; i < 3; i++) {
//   alert(`number ${i}!`); // 0,1,2
// }
i = 0;
while (i < 3) {
  alert(`number ${i}!`); // 0,1,2
  i++;
}
////////////////////////////////////////////////
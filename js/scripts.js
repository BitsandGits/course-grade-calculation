/************** PART 1 **************/

// STEP 1: Write a variable that will store the total points possible (2500 points) that you can get in this course.
const totalPoints = 2500;

// STEP 2: Use a prompt to collect the number of points a student currently has in the course and store that number in a variable.
const studentPoints = Number(prompt("How many points do you have right now?"));

// STEP 3: Write an arrow function that accepts two arguments. The function should calculate and return the student's CURRENT grade percentage.
const gradePercentage = (studentPoints, totalPoints) => Math.round(studentPoints / totalPoints * 100);
console.log(gradePercentage(studentPoints,totalPoints));

// STEP 4: Write on the page a sentence that will say, "Your current grade is [CURRENT GRADE PERCENTAGE]%."
// document.getElementById("one").innerHTML = `Your current grade is ${gradePercentage(studentPoints, totalPoints)}%.`;
document.write(`Your current grade is ${gradePercentage(studentPoints, totalPoints)}%.`);

/************** PART 2 **************/

// STEP 5: Use a prompt to collect the grade that the student would like to achieve. The prompt should state, "What is the grade you want? 90, 80, 70 or 60?" Store that number in a variable.
const goalGrade = Number(prompt("What is the grade you want? 100, 90, 80, 70 or 60?"));

// STEP 6: Write an arrow function that accepts THREE arguments. This function will calculate and return the number of ADDITIONAL points the student needs to receive a specified grade. For example, if I tell the function that I have 1200 points and want to know how many points it will take to get a 90% in the course, the function will return 1050.
const gradeNeeded = (goalGrade, studentPoints, totalPoints) => totalPoints * goalGrade / 100 - studentPoints;

// STEP 7: Write a switch statement that will write on the page a sentence. The cases depends on what the student has entered for the grade that they want. The results for each case should say, "You have [CURRENT POINTS] points. You need [ADDITIONAL POINTS NEEDED] points to earn a [GRADE WANTED]% in this course." 
// EXAMPLE: "You have 1200 points. You need 1050 points to earn 90% in this course."
// The default should say, "To receive a specified grade, please enter either 90, 80, 70 or 60 to find out how many additional points you need."

switch(goalGrade){
    case 100:
    case 90:
    case 80:
    case 70:
    case 60:
        // document.getElementById("two").innerHTML = `You have ${studentPoints} points. You need ${gradeNeeded(goalGrade, studentPoints, totalPoints)} points to earn a ${goalGrade}% in this course.`; 
        document.write(`You have ${studentPoints} points. You need ${gradeNeeded(goalGrade, studentPoints, totalPoints)} points to earn a ${goalGrade}% in this course.`);
        break;
    default:
        // document.getElementById("two").innerHTML = `To receive a specified grade, please enter either 100, 90, 80, 70 or 60 to find out how many additional points you need.`;
        document.write(`To receive a specified grade, please enter either 100, 90, 80, 70 or 60 to find out how many additional points you need.`);
}



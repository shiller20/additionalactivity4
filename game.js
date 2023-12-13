// get the id's of the necessary HTML Tags
const multiplier = document.getElementById('multiplier');
const multiplicand = document.getElementById('multiplicand');
const userAnswer = document.getElementById('userAnswer');
const checkAnswer = document.getElementById('checkAnswer');
const displayResullt = document.getElementById('displayResullt');

var correctAnswer;

start = () => {
    // get two values when the page loads
    var multiplierValue = Math.floor(Math.random()*10);
    var multiplicandValue = Math.floor(Math.random()*10);
    // calculate the correct answer and update the correctAnswer global variable
    correctAnswer = multiplierValue * multiplicandValue

    // update the html tag
    multiplier.innerText = multiplierValue;
    multiplicand.innerText = multiplicandValue;
}

checkAnswer.addEventListener('click', () => {
    // first check if the answer meets the requirement, it must be a number and between 0-100
    if(userAnswer.value == '' || userAnswer.value > 100 || userAnswer.value < 0){
        // remove the class "correct" if it has been added to the tag previously
        displayResullt.classList.remove('correct');
        // add new class if true
        displayResullt.classList.add('failed');
        displayResullt.innerText='Invalid Input'
        // do not call a new task so they user can see the invalid input and make corrections
        return
    }

    if(userAnswer.value == correctAnswer){
        // remove any existing class
        displayResullt.classList.remove('failed');
        // add new class if true
        displayResullt.classList.add('correct');
        displayResullt.innerText='Correct! A new task is now available'
        // clear the input box before next task
        userAnswer.value = ''
    }
    else{
        // remove any existing class
        displayResullt.classList.remove('correct');
        // add new class if true
        displayResullt.classList.add('failed');
        displayResullt.innerText='Incorrect! Try a new task'
        // clear the input box before next task
        userAnswer.value = ''
    }

    //call a new task
    newTask()
})

newTask = () => {

    // display new task
    // get two new random values
    var multiplierValue = Math.floor(Math.random()*10);
    var multiplicandValue = Math.floor(Math.random()*10);
    // calculate the correct answer and update the correctAnswer global variable
    correctAnswer = multiplierValue * multiplicandValue

    // update the html tag
    multiplier.innerText = multiplierValue;
    multiplicand.innerText = multiplicandValue;
}

window.addEventListener('load', start);
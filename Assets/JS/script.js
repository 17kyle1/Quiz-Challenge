//Project is a work-in-progress and will receive further updates along with resubmission


function startTimer(){
    var playNow = window.confirm("Do you wanna play?")
        if(playNow){
// Timer will go in here when it is later added
        }
        else{
            window.alert("As you wish")
            location.reload()
        }
    }
    startTimer()
// Created Array Object to store questions and answers as keys and values
var questionsAndAnswers = [{
    question: "When did WWII end?",
    a: "1960",
    b: "1945",
    c: "1984",
    d: "1939",
    correct: 'b'
} ,
{
question: "What is my the capital of Russia?",
a: "Paris",
b: "Tokyo",
c: "Moscow",
d: "Berlin",
correct: 'c'
},
{
    question: "Where does the Prince of Egypt take place?",
    a: "Russia",
    b: "India",
    c: "North Dakota",
    d: "Egypt",
    correct: 'd'
    }
]

// questionNumber holds the value of which question the user is on
var questionNumber = 0
// Score holds the value of the users score
var score = 0

var quiz = document.getElementById('quiz');
// Question element
var question = document.getElementById('header')
// Answer elements
var answerChoices = document.getElementById('Answer')
// Element used as a placeholder for answer text to appear on the screen 
var textA = document.getElementById('textA')
var textB = document.getElementById('textB')
var textC = document.getElementById('textC')
var textD = document.getElementById('textD')

var nextButton = document.getElementById('next')

addText()
function addText(){
    // newData stores the questionsAndAnswers array along with the questionNumber array to indicate which question the user is on

    var newData = questionsAndAnswers[questionNumber]
    // sets the question text to be equal to the question value in the array object
    question.innerText = newData.question
    console.log(newData)
    // sets the answer text equal to the answer values in the array object
    textA.innerText =newData.a
    textB.innerText =newData.b
    textC.innerText =newData.c
    textD.innerText =newData.d
}

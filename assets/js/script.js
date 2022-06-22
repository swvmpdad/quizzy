var question = document.getElementById("question");
var answer1 = document.getElementById("answer-one");
var answer2 = document.getElementById("answer-two");
var answer3 = document.getElementById("answer-three");
var answer4 = document.getElementById("answer-four");
var startButton = document.getElementById("start-btn");

var questions = [
    {
        prompt: 1,
        question: "When storing data in local storage, in what format does Javascript save it?",
        answer: "String",
        options: [
            "Array",
            "String",
            "Boolean",
            "Integer"
        ]
    },
    {
        prompt: 2,
        question: "What is the proper html tag to add a javascript reference file in your code?",
        answer: "<script>",
        options: [
            "<link>",
            "<a href>",
            "<meta>",
            "<script>"
        ]
    },
    {
        prompt: 3,
        question: "What type of variable is needed to store multiple items in a single variable?",
        answer: "Array",
        options: [
            "Array",
            "Boolean",
            "String",
            "Integer"
        ]
    },
    {
        prompt: 4,
        question: "What code is needed to display a message in the console of your developer tools?",
        answer: "console.log()",
        options: [
            "window.alert()",
            "window.prompt()",
            "console.log()",
            "alert()"
        ]
    }
];
var seconds = 90;

var countdownTimer = function(seconds) {
    let counter = seconds;

    const interval = setInterval(() => {
        counter--;
        var timeLeft = document.getElementById("time-left");
        var timerHeading = document.getElementById("timer-heading");
        if (counter > 0) {
            timeLeft.innerHTML = counter;
        }
        else if (counter < 0 ) {
            clearInterval(interval);
            timeLeft.innerHTML = "";
            timerHeading.innerHTML = "Time's Up!";
        }
    }, 1000);
    return counter;
    return seconds;
}

var startQuiz = function () {
    countdownTimer(seconds);
    
    for (var i = 0; i < questions.length; i++) {
        if (seconds > 0) {
            question.innerHTML = questions[i].question;
            answer1.innerHTML = "<button class = 'answer-btn'>" + questions[i].options[0] + "</button>";
            answer2.innerHTML = "<button class = 'answer-btn'>" + questions[i].options[1] + "</button>";
            answer3.innerHTML = "<button class = 'answer-btn'>" + questions[i].options[2] + "</button>";
            answer4.innerHTML = "<button class = 'answer-btn'>" + questions[i].options[3] + "</button>";
        }
        else if (seconds < 0) {
            question.innerHTML = "";
            answer1.innerHTML = "";
            answer2.innerHTML = "";
            answer3.innerHTML = "";
            answer4.innerHTML = "";
            break;
        }
    }
};

startButton.addEventListener('click', function(event) {
    startQuiz();
})

// function to display questions and answers

// allow for clicking of answer

// check option vs correct answer

// display correct or incorrect

// move to next question

// set up a timer

// subtract from timer when wrong answer

// save remaining time as high score

// save high score to local storage

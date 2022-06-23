var seconds = 90;
var result = document.getElementById('result-message');
// array storing the HTML elements for the answers
var startButton = document.getElementById("start-btn");
var counter = 0;

// array storing the quiz
var questions = [
    {
        id: 0,
        q: "When storing data in local storage, in what format does Javascript save it?",
        options: [
            { text: "Array", isCorrect: false },
            { text: "String", isCorrect: true },
            { text: "Boolean", isCorrect: false },
            { text: "Integer", isCorrect: false }
        ]
    },
    {
        id: 1,
        q: "What is the proper html tag to add a javascript reference file in your code?",
        options: [
            { text: "<link>", isCorrect: false },
            { text: "<a href>", isCorrect: false },
            { text: "<meta>", isCorrect: false },
            { text: "<script>", isCorrect: true }
        ]
    },
    {
        id: 2,
        q: "What type of variable is needed to store multiple items in a single variable?",
        options: [
            { text: "Array", isCorrect: true },
            { text: "Boolean", isCorrect: false },
            { text: "String", isCorrect: false },
            { text: "Integer", isCorrect: false }
        ]
    },
    {
        id: 3,
        q: "What code is needed to display a message in the console of your developer tools?",
        options: [
            { text: "window.alert()", isCorrect: false },
            { text: "window.prompt()", isCorrect: false },
            { text: "console.log()", isCorrect: true },
            { text: "alert()", isCorrect: false }
        ]
    }
];

function iterate(id) {
    if (id < 3) {
    // Timer function
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
            question.innerHTML = "";
            ans1.innerHTML = "";
            ans2.innerHTML = "";
            ans3.innerHTML = "";
            ans4.innerHTML = "";
            result.innerHTML = "";
        }
    }, 1000);
    return counter;
    };
    countdownTimer(seconds);
    var question = document.getElementById("question");
    var evalBtn = document.getElementById("evaluate");
    evalBtn.innerHTML = "<button id='evaluate-btn'>Check Answer!</button>";

    question.innerText = questions[id].q;
    
    // setting answer ids
    var ans1 = document.getElementById("answer-one");
    var ans2 = document.getElementById("answer-two");
    var ans3 = document.getElementById("answer-three");
    var ans4 = document.getElementById("answer-four");

    // getting answer text
    ans1.innerHTML = "<button class= 'answer-btn' id= 'btn-one'></button>";
    ans2.innerHTML = "<button class= 'answer-btn' id= 'btn-two'></button>";
    ans3.innerHTML = "<button class= 'answer-btn' id= 'btn-three' ></button>";
    ans4.innerHTML = "<button class= 'answer-btn' id= 'btn-four'></button>";

    ans1 = document.getElementById("btn-one");
    ans2 = document.getElementById("btn-two");
    ans3 = document.getElementById("btn-three");
    ans4 = document.getElementById("btn-four");

    ans1.innerText = questions[id].options[0].text;
    ans2.innerText = questions[id].options[1].text;
    ans3.innerText = questions[id].options[2].text;
    ans4.innerText = questions[id].options[3].text;

    // providing true/false value to the options
    ans1.value = questions[id].options[0].isCorrect;
    ans2.value = questions[id].options[1].isCorrect;
    ans3.value = questions[id].options[2].isCorrect;
    ans4.value = questions[id].options[3].isCorrect;

    var selected = "";

    ans1.addEventListener("click", () => {
        ans1.style.backgroundColor = "navy";
        ans2.style.backgroundColor = "blueviolet";
        ans3.style.backgroundColor = "blueviolet";
        ans4.style.backgroundColor = "blueviolet";
        selected = ans1.value;
    });

    ans2.addEventListener("click", () => {
        ans1.style.backgroundColor = "blueviolet";
        ans2.style.backgroundColor = "navy";
        ans3.style.backgroundColor = "blueviolet";
        ans4.style.backgroundColor = "blueviolet";
        selected = ans2.value;
    });
    
    ans3.addEventListener("click", () => {
        ans1.style.backgroundColor = "blueviolet";
        ans2.style.backgroundColor = "blueviolet";
        ans3.style.backgroundColor = "navy";
        ans4.style.backgroundColor = "blueviolet";
        selected = ans3.value;
    });

    ans4.addEventListener("click", () => {
        ans1.style.backgroundColor = "blueviolet";
        ans2.style.backgroundColor = "blueviolet";
        ans3.style.backgroundColor = "blueviolet";
        ans4.style.backgroundColor = "navy";
        selected = ans4.value;
    });

    evalBtn.addEventListener("click", () => {
        if (selected == "true") {
            result.innerHTML = "Correct!";
            id++;
            iterate(id);
        } else {
            result.innerHTML = "Incorrect!";
            id++;
            iterate(id);
        }
    })   
} else if (id > 4) {
    var ans1 = document.getElementById("answer-one");
    var ans2 = document.getElementById("answer-two");
    var ans3 = document.getElementById("answer-three");
    var ans4 = document.getElementById("answer-four");
    var question = document.getElementById("question");
    question.innerText = "You have finished the quiz with a score of " +  + "!";
            ans1.innerHTML = "";
            ans2.innerHTML = "";
            ans3.innerHTML = "";
            ans4.innerHTML = "";
            result.innerHTML = "";
} 
};

startButton.addEventListener('click', function() {
    iterate(0);
});

// function to display questions and answers

// allow for clicking of answer

// check option vs correct answer

// display correct or incorrect

// move to next question

// set up a timer

// subtract from timer when wrong answer

// save remaining time as high score

// save high score to local storage

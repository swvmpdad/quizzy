var seconds = 90;
var result = document.getElementById('result-message');
var startButton = document.getElementById("start-btn");
var counter = null;
var NO_OF_HIGH_SCORES = 3;
var HIGH_SCORES = "highScores";
var highScoreString = localStorage.getItem(HIGH_SCORES);
var score = null;
var highScores = JSON.parse(highScoreString) ?? [];
var lowestScore = highScores[NO_OF_HIGH_SCORES - 1]?.score ?? 0;




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


function saveHighScore(score, highScores) {
    var name = prompt("You got a high score! Enter initials:");
    var newScore = { score, name };

    // add to the list
    highScores.push(newScore);

    // sort list
    highScores.sort((a, b) => b.score - a.score);

    // select new list
    highScores.splice(NO_OF_HIGH_SCORES);

    // save to local storage
    localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores));
    score = 0;
};

function showHighScores() {
    var highScoreList = document.getElementById(HIGH_SCORES);

    highScoreList.innerHTML = highScores
    .map((score) => '<li>' + score.score + " - " + score.name )
    .join('');
    score = 0; 
}

// Timer function
var countdownTimer = function(num) {
        var timeLeft = document.getElementById("time-left");
        let counter = num;


        const interval = setInterval(() => {
            counter--;
            
            var timerHeading = document.getElementById("timer-heading");
            if (counter > 0) {
                timeLeft.innerHTML = counter;
            }
            else if (counter < 0 ) {
                clearInterval(interval);
                var question = document.getElementById("question");
                var ans1 = document.getElementById("answer-one");
                var ans2 = document.getElementById("answer-two");
                var ans3 = document.getElementById("answer-three");
                var ans4 = document.getElementById("answer-four");
                var evalBtn = document.getElementById("evaluate");
                timeLeft.innerHTML = "";
                timerHeading.innerHTML = "Time's Up! Your score is 0!";
                question.innerHTML = "";
                ans1.innerHTML = "";
                ans2.innerHTML = "";
                ans3.innerHTML = "";
                ans4.innerHTML = "";
                result.innerHTML = "";
                evalBtn.innerHTML = "";
            }
        }, 1000)
    };

// function to check and save to storage
function checkHighScore(score) {
    var question = document.getElementById("question");

    if (score > lowestScore) {
        saveHighScore(score, highScores);
        showHighScores();
        question.innerHTML = "Your score of " + score + " has been added to the high scores!";
    } else {
        question.innerHTML = "Your score of " + score + " didn't get the high score. Refresh the page and try again!";
        showHighScores();
    }
}

function endGame(num) {
    var score = num;
    checkHighScore(score);
};

// function for the quiz
function startQuiz(id) {
    if (id < 4) {
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

    // getting created buttons
    ans1 = document.getElementById("btn-one");
    ans2 = document.getElementById("btn-two");
    ans3 = document.getElementById("btn-three");
    ans4 = document.getElementById("btn-four");

    // assigning answers to buttons
    ans1.innerText = questions[id].options[0].text;
    ans2.innerText = questions[id].options[1].text;
    ans3.innerText = questions[id].options[2].text;
    ans4.innerText = questions[id].options[3].text;

    // providing true/false value to the answers
    ans1.value = questions[id].options[0].isCorrect;
    ans2.value = questions[id].options[1].isCorrect;
    ans3.value = questions[id].options[2].isCorrect;
    ans4.value = questions[id].options[3].isCorrect;

    // set up the answer selection
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

    // check if correct answer
    evalBtn.addEventListener("click", () => {
        if (selected == "true") {
            result.innerHTML = "Correct!";
            id++;
            startQuiz(id);
        } else {
            result.innerHTML = "Incorrect!";
            id++;
            startQuiz(id);
            counter = document.getElementById("time-left").innerHTML - 20;
            countdownTimer(counter);
        }
    })   
    // end the quiz once cycled through every question
    } else {
    var timer = document.getElementById("time-left").innerHTML;
    var ans1 = document.getElementById("answer-one");
    var ans2 = document.getElementById("answer-two");
    var ans3 = document.getElementById("answer-three");
    var ans4 = document.getElementById("answer-four");
    var question = document.getElementById("question");
    ans1.innerHTML = "";
    ans2.innerHTML = "";
    ans3.innerHTML = "";
    ans4.innerHTML = "";
    result.innerHTML = "";
    score = timer;
    endGame(score);
    return score;
} 
};

// start the quiz
startButton.addEventListener('click', function() {
    startQuiz(0);
    countdownTimer(seconds);
    startButton = document.querySelector(".start");
    startButton.innerHTML = "";
});


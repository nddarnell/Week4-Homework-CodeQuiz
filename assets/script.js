var counter = document.querySelector("#counter");
var question = document.querySelector("#question");
var optionOne = document.querySelector("#optionOne");
var optionTwo = document.querySelector("#optionTwo");
var optionThree = document.querySelector("#optionThree");
var optionFour = document.querySelector("#optionFour");
var startButton = document.querySelector("#startButton");
var optionOneAnswer = document.querySelector("#optionOne");
var list = document.querySelector(".list-group")

var myTimerObj = (function (document) {

    var myTimer;
    var correct = false;
    var incorrect = false;
    var count = 60;
    var stop = document.querySelector("#stopTimer")

    function start() {
        myTimer = setInterval(secondsRemaining, 1000);

        function secondsRemaining() {
            document.getElementById("counter").innerHTML = --count;
            if (myTimerObj.correct == true){
                count = count+7
                document.getElementById("counter").innerHTML = count;
                myTimerObj.correct = false;
            }
            else if (myTimerObj.incorrect == true){
                count = count-20
                document.getElementById("counter").innerHTML = count;
                myTimerObj.incorrect = false;
            }
            // this is where we can stop the timer.
            stop.addEventListener("click", function(){
                clearInterval(myTimer);
                location.href="./assets/highscore.html"
            })


            if (count == 0) {
                clearInterval(myTimer);
                alert("Reached zero");
            }
        }
    }

    function end() {
        clearInterval(myTimer)
    }
    return { start: start, end: end };
})(document);


// Below is for questions one switching to question 2
optionOne.addEventListener("click", function(){
    myTimerObj.incorrect = true;
    question.setAttribute("id", "question2")
    optionOne.setAttribute("id", "answerTwoOne")
    optionTwo.setAttribute("id", "answerTwoTwo")
    optionThree.setAttribute("id", "answerTwoThree")
    optionFour.setAttribute("id", "answerTwoFour")
})
optionTwo.addEventListener("click", function(){
    myTimerObj.incorrect = true;
    question.setAttribute("id", "question2")
    optionOne.setAttribute("id", "answerTwoOne")
    optionTwo.setAttribute("id", "answerTwoTwo")
    optionThree.setAttribute("id", "answerTwoThree")
    optionFour.setAttribute("id", "answerTwoFour")
})
optionThree.addEventListener("click", function(){
    myTimerObj.incorrect = true;
    question.setAttribute("id", "question2")
    optionOne.setAttribute("id", "answerTwoOne")
    optionTwo.setAttribute("id", "answerTwoTwo")
    optionThree.setAttribute("id", "answerTwoThree")
    optionFour.setAttribute("id", "answerTwoFour")
})
optionFour.addEventListener("click", function(){
    myTimerObj.correct = true;
    question.setAttribute("id", "question2")
    optionOne.setAttribute("id", "answerTwoOne")
    optionTwo.setAttribute("id", "answerTwoTwo")
    optionThree.setAttribute("id", "answerTwoThree")
    optionFour.setAttribute("id", "answerTwoFour")
})
// needs to switch to another page after all of the questions answered
// probably requires a loop
// use todos activity 28 for submit button

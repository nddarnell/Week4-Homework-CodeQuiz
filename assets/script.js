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
    // myTimerObj.incorrect = true;
    // question.setAttribute("id", "question2")
    // optionOne.setAttribute("id", "answerTwoOne")
    // optionTwo.setAttribute("id", "answerTwoTwo")
    // optionThree.setAttribute("id", "answerTwoThree")
    // optionFour.setAttribute("id", "answerTwoFour")
    switch(optionOne.className){
        case "number1":
            console.log("brandon");
            break;
        case "w-25 mx-auto mt-10 list-group-item list-group-item-action highlight":
            console.log("joe");
            optionOne.setAttribute("class", "number2 w-25 mx-auto mt-10 list-group-item list-group-item-action highlight")
            // all options would go here to change all of the options on the screen class name "number2" not defined on css content
            myTimerObj.incorrect = true;
            break;
        case "number2 w-25 mx-auto mt-10 list-group-item list-group-item-action highlight":
            console.log("this");
            optionOne.setAttribute("class", "number3 w-25 mx-auto mt-10 list-group-item list-group-item-action highlight")
            myTimerObj.correct = true;
            break;
    }
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
// change setattribute by class or get attribute and have it change to the question/option you need and then if true switch to another class? qwiujbfscvedsiwuwgedsihebv

// needs to switch to another page after all of the questions answered
// probably requires a loop
// use todos activity 28 for submit button
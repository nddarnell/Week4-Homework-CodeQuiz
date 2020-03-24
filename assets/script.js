var counter = document.querySelector("#counter");
var question = document.querySelector("#question");
var optionOne = document.querySelector("#optionOne");
var optionTwo = document.querySelector("#optionTwo");
var optionThree = document.querySelector("#optionThree");
var optionFour = document.querySelector("#optionFour");
var startButton = document.querySelector("#startButton");
var optionOneAnswer = document.querySelector("#optionOne");

var myTimerObj = (function (document) {

    var myTimer;

    function start() {
        myTimer = setInterval(secondsRemaining, 1000);
        var count = 60;

        function secondsRemaining() {
            document.getElementById("counter").innerHTML = --count;
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
    question.setAttribute("id", "question2")
    optionOne.setAttribute("id", "answerTwoOne")
    optionTwo.setAttribute("id", "answerTwoTwo")
    optionThree.setAttribute("id", "answerTwoThree")
    optionFour.setAttribute("id", "answerTwoFour")
})
optionTwo.addEventListener("click", function(){
    question.setAttribute("id", "question2")
    optionOne.setAttribute("id", "answerTwoOne")
    optionTwo.setAttribute("id", "answerTwoTwo")
    optionThree.setAttribute("id", "answerTwoThree")
    optionFour.setAttribute("id", "answerTwoFour")
})
optionThree.addEventListener("click", function(){
    question.setAttribute("id", "question2")
    optionOne.setAttribute("id", "answerTwoOne")
    optionTwo.setAttribute("id", "answerTwoTwo")
    optionThree.setAttribute("id", "answerTwoThree")
    optionFour.setAttribute("id", "answerTwoFour")
})
optionFour.addEventListener("click", function(){
    question.setAttribute("id", "question2")
    optionOne.setAttribute("id", "answerTwoOne")
    optionTwo.setAttribute("id", "answerTwoTwo")
    optionThree.setAttribute("id", "answerTwoThree")
    optionFour.setAttribute("id", "answerTwoFour")
})

// ughghghhghghg this doesnt work keep trying
optionOne.addEventListener("click", function(){
    var addTime = start.setInterval(add, 7000)
    function add() {
        document.getElementById("counter").innerHTML = 7+count;
    }
})
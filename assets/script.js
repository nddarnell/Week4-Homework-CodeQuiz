var counter = document.querySelector("#counter");
var questions = document.querySelector("#questions");
var optionOne = document.querySelector("#optionOne");
var optionTwo = document.querySelector("#optionTwo");
var optionThree = document.querySelector("#optionThree");
var optionFour = document.querySelector("#optionFour");
var startButton = document.querySelector("#startButton");

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

// Need to add a question that pops up (3 of them) and doesnt change until an option is clicked
function nextQuestion (){

}
// Use css to change questions and options? setAttribute("class", "question2")?
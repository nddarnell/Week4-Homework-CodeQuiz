var counter = document.querySelector("#counter");
var question = document.querySelector("#question");
var optionOne = document.querySelector("#optionOne");
var optionTwo = document.querySelector("#optionTwo");
var optionThree = document.querySelector("#optionThree");
var optionFour = document.querySelector("#optionFour");
var startButton = document.querySelector("#startButton");
var optionOneAnswer = document.querySelector("#optionOne");
var list = document.querySelector(".list-group")
var afterFiveAlert = document.querySelector("#afterFiveHeader")
var playerScore = document.querySelector("#playerScore")

var myTimerObj = (function (document) {

    var myTimer;
    var correct = false;
    var incorrect = false;
    var count = 75;
    var stop = document.querySelector("#stopTimer")

    function start() {
        myTimer = setInterval(secondsRemaining, 1000);

        function secondsRemaining() {
            document.getElementById("counter").innerHTML = --count;

            if (myTimerObj.correct == true){
                count = count+6
                document.getElementById("counter").innerHTML = count;
                myTimerObj.correct = false;
            }
            else if (myTimerObj.incorrect == true){
                count = count-10
                document.getElementById("counter").innerHTML = count;
                myTimerObj.incorrect = false;
            }

            if (count == 0) {
                clearInterval(myTimer);
                alert("Reached zero");
            }
        }
        //stop event was here
    }
    // stop.addEventListener("click", function(){
    //     clearInterval(myTimer);
    //     localStorage.setItem("Time Remaining", count);
    //     const extractedTime = localStorage.getItem("Time Remaining");
    //     playerScore.append(extractedTime)
    //     // location.href = "./assets/highscore.html";
    //     // below is other ways to display the extracted time
    //     // playerScore.append(document.createTextNode(extractedTime))
    //     // playerScore.innerHTML = 
        
    // })
    var playerScore = document.querySelector("#playerScore")

    stop.addEventListener("click", function(){
        clearInterval(myTimer);
        var playerName = prompt("What is your name?");
        var scores = [];
        if (localStorage.getItem("scores") != null){
            var scores = JSON.parse(localStorage.getItem("scores"));
            console.log({name: playerName, score: playerHighscores.innerHTML});
            scores.push({name: playerName, score: playerHighscores.innerHTML});
            console.log(scores);
            localStorage.setItem("scores", JSON.stringify(scores));
        }else{
            scores.push({name: playerName, score: playerHighscores.innerHTML});
            console.log({name: playerName, score: playerHighscores.innerHTML});
            console.log(scores);
            localStorage.setItem("scores", JSON.stringify(scores));
        }
        window.location.href = "./assets/highscore.html"
    })
    

    function end() {
        clearInterval(myTimer)
    }
    return { start: start, end: end };
})(document);

optionOne.addEventListener("click", function(){
    switch(optionOne.className){
        case "question1OptionOne w-25 mx-auto mt-10 list-group-item list-group-item-action highlight":
            myTimerObj.incorrect = true;
            optionOne.setAttribute("class", "question2OptionOne w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionTwo.setAttribute("class", "question2OptionTwo w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionThree.setAttribute("class", "question2OptionThree w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionFour.setAttribute("class", "question2OptionFour w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            question.setAttribute("class", "questionsTwo");
            break;
        case "question2OptionOne w-25 mx-auto mt-10 list-group-item list-group-item-action highlight":
            myTimerObj.correct = true;
            optionOne.setAttribute("class", "question3OptionOne w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionTwo.setAttribute("class", "question3OptionTwo w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionThree.setAttribute("class", "question3OptionThree w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionFour.setAttribute("class", "question3OptionFour w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            question.setAttribute("class", "questionsThree");
            break;
        case "question3OptionOne w-25 mx-auto mt-10 list-group-item list-group-item-action highlight":
            myTimerObj.incorrect = true;
            optionOne.setAttribute("class", "question4OptionOne w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionTwo.setAttribute("class", "question4OptionTwo w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionThree.setAttribute("class", "question4OptionThree w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionFour.setAttribute("class", "question4OptionFour w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            question.setAttribute("class", "questionsFour");
            break;
        case "question4OptionOne w-25 mx-auto mt-10 list-group-item list-group-item-action highlight":
            myTimerObj.correct = true;
            optionOne.setAttribute("class", "question5OptionOne w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionTwo.setAttribute("class", "question5OptionTwo w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionThree.setAttribute("class", "question5OptionThree w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionFour.setAttribute("class", "question5OptionFour w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            question.setAttribute("class", "questionsFive");
            afterFiveAlert.setAttribute("class", "afterFiveH2");
            break;
        case "question5OptionOne w-25 mx-auto mt-10 list-group-item list-group-item-action highlight":
            myTimerObj.incorrect = true;
            break;
    }
})
optionTwo.addEventListener("click", function(){
    switch(optionTwo.className){
        case "question1OptionTwo w-25 mx-auto mt-10 list-group-item list-group-item-action highlight":
            myTimerObj.correct = true;
            optionOne.setAttribute("class", "question2OptionOne w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionTwo.setAttribute("class", "question2OptionTwo w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionThree.setAttribute("class", "question2OptionThree w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionFour.setAttribute("class", "question2OptionFour w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            question.setAttribute("class", "questionsTwo");
            break;
        case "question2OptionTwo w-25 mx-auto mt-10 list-group-item list-group-item-action highlight":
            myTimerObj.incorrect = true;
            optionOne.setAttribute("class", "question3OptionOne w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionTwo.setAttribute("class", "question3OptionTwo w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionThree.setAttribute("class", "question3OptionThree w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionFour.setAttribute("class", "question3OptionFour w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            question.setAttribute("class", "questionsThree");
            break;
        case "question3OptionTwo w-25 mx-auto mt-10 list-group-item list-group-item-action highlight":
            myTimerObj.incorrect = true;
            optionOne.setAttribute("class", "question4OptionOne w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionTwo.setAttribute("class", "question4OptionTwo w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionThree.setAttribute("class", "question4OptionThree w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionFour.setAttribute("class", "question4OptionFour w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            question.setAttribute("class", "questionsFour");
            break;
        case "question4OptionTwo w-25 mx-auto mt-10 list-group-item list-group-item-action highlight":
            myTimerObj.incorrect = true;
            optionOne.setAttribute("class", "question5OptionOne w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionTwo.setAttribute("class", "question5OptionTwo w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionThree.setAttribute("class", "question5OptionThree w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionFour.setAttribute("class", "question5OptionFour w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            question.setAttribute("class", "questionsFive");
            afterFiveAlert.setAttribute("class", "afterFiveH2");
            break;
        case "question5OptionTwo w-25 mx-auto mt-10 list-group-item list-group-item-action highlight":
            myTimerObj.incorrect = true;
            break;
    }
})
optionThree.addEventListener("click", function(){
    switch(optionThree.className){
        case "question1OptionThree w-25 mx-auto mt-10 list-group-item list-group-item-action highlight":
            myTimerObj.incorrect = true;
            optionOne.setAttribute("class", "question2OptionOne w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionTwo.setAttribute("class", "question2OptionTwo w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionThree.setAttribute("class", "question2OptionThree w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionFour.setAttribute("class", "question2OptionFour w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            question.setAttribute("class", "questionsTwo");
            break;
        case "question2OptionThree w-25 mx-auto mt-10 list-group-item list-group-item-action highlight":
            myTimerObj.incorrect = true;
            optionOne.setAttribute("class", "question3OptionOne w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionTwo.setAttribute("class", "question3OptionTwo w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionThree.setAttribute("class", "question3OptionThree w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionFour.setAttribute("class", "question3OptionFour w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            question.setAttribute("class", "questionsThree");
            break;
        case "question3OptionThree w-25 mx-auto mt-10 list-group-item list-group-item-action highlight":
            myTimerObj.correct = true;
            optionOne.setAttribute("class", "question4OptionOne w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionTwo.setAttribute("class", "question4OptionTwo w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionThree.setAttribute("class", "question4OptionThree w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionFour.setAttribute("class", "question4OptionFour w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            question.setAttribute("class", "questionsFour");
            break;
        case "question4OptionThree w-25 mx-auto mt-10 list-group-item list-group-item-action highlight":
            myTimerObj.incorrect = true;
            optionOne.setAttribute("class", "question5OptionOne w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionTwo.setAttribute("class", "question5OptionTwo w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionThree.setAttribute("class", "question5OptionThree w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionFour.setAttribute("class", "question5OptionFour w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            question.setAttribute("class", "questionsFive");
            afterFiveAlert.setAttribute("class", "afterFiveH2");
            break;
        case "question5OptionThree w-25 mx-auto mt-10 list-group-item list-group-item-action highlight":
            myTimerObj.incorrect = true;
            break;
    }
})
optionFour.addEventListener("click", function(){
    switch(optionFour.className){
        case "question1OptionFour w-25 mx-auto mt-10 list-group-item list-group-item-action highlight":
            myTimerObj.incorrect = true;
            optionOne.setAttribute("class", "question2OptionOne w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionTwo.setAttribute("class", "question2OptionTwo w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionThree.setAttribute("class", "question2OptionThree w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionFour.setAttribute("class", "question2OptionFour w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            question.setAttribute("class", "questionsTwo");
            break;
        case "question2OptionFour w-25 mx-auto mt-10 list-group-item list-group-item-action highlight":
            myTimerObj.incorrect = true;
            optionOne.setAttribute("class", "question3OptionOne w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionTwo.setAttribute("class", "question3OptionTwo w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionThree.setAttribute("class", "question3OptionThree w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionFour.setAttribute("class", "question3OptionFour w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            question.setAttribute("class", "questionsThree");
            break;
        case "question3OptionFour w-25 mx-auto mt-10 list-group-item list-group-item-action highlight":
            myTimerObj.incorrect = true;
            optionOne.setAttribute("class", "question4OptionOne w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionTwo.setAttribute("class", "question4OptionTwo w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionThree.setAttribute("class", "question4OptionThree w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionFour.setAttribute("class", "question4OptionFour w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            question.setAttribute("class", "questionsFour");
            break;
        case "question4OptionFour w-25 mx-auto mt-10 list-group-item list-group-item-action highlight":
            myTimerObj.incorrect = true;
            optionOne.setAttribute("class", "question5OptionOne w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionTwo.setAttribute("class", "question5OptionTwo w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionThree.setAttribute("class", "question5OptionThree w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            optionFour.setAttribute("class", "question5OptionFour w-25 mx-auto mt-10 list-group-item list-group-item-action highlight");
            question.setAttribute("class", "questionsFive");
            afterFiveAlert.setAttribute("class", "afterFiveH2");
            break;
        case "question5OptionFour w-25 mx-auto mt-10 list-group-item list-group-item-action highlight":
            myTimerObj.correct = true;
            break;
    }
})

if (document.getElementById("playerHighscores")!= null){
    var highScores = document.getElementById("playerHighscores");
    var sortable = [];
    var scores = JSON.parse(localStorage.getItem("scores"));

    for (x = 0; x < scores.length; x++) {
        sortable.push([
            scores[x].name,
            scores[x].score
        ])
    }

    sortable.sort(function(a, b){
        return b[1] - a[1];
    })

    for (x = 0; x < sortable.length; x++) {
        var newItem = document.createElement("li");
        var text = document.createTextNode(sortable[x][0] + ": " + sortable[x][1]);
        newItem.appendChild(text);
        highScores.appendChild(newItem);
    }

    document.getElementById("newTime").innerHTML =
        localStorage.key(0)[0].toUpperCase() + localStorage.key(0).slice(1) + ": ";
}

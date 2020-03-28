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
        stop.addEventListener("click", function(){
            clearInterval(myTimer);
            localStorage.setItem("Time Remaining", count);
            const extractedTime = localStorage.getItem("Time Remaining");
            // location.href = "./assets/highscore.html";
            // playerScore.append(document.createTextNode(extractedTime))
            // playerScore.innerHTML = extractedTime
            playerScore.append(extractedTime)
        })
    }
    

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

// pulled from act.28
var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

init();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

function init() {
  // Get stored todos from localStorage
  // Parsing the JSON string to an object
  var storedTodos = JSON.parse(localStorage.getItem("todos"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedTodos !== null) {
    todos = storedTodos;
  }

  // Render todos to the DOM
  renderTodos();
}

function storeTodos() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("todos", JSON.stringify(todos));
}

// When form is submitted...
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodos();
  renderTodos();
});

// When a element inside of the todoList is clicked...
todoList.addEventListener("click", function(event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
  }
});



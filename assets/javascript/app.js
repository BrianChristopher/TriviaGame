//SET GLOBAL VARIABLES

var card = $("#build");
var counterStartNumber = 30;
var timer = null;



//QUESTION OBJECTS (held in an array)

var questionsArray = [

    question0 = {
        q: "What color is the sky?",
        a: ["Blue", "Green", "Purple", "Orange"],
        correct: "Blue",
        image: "assets/images/sky.jpg"
    },

    question1 = {
        q: "What is the best beverage?",
        a: ["Water", "Ice water", "Warm water", "Beer"],
        correct: "Beer",
        image: "assets/images/beer.jpg"
    },

    question2 = {
        q: "What state do you live in?",
        a: ["Minnesota", "Mississippi", "Confusion", "Florida"],
        correct: "Confusion",
        image: "assets/images/CrystalReed.jpg"
    },

    question3 = {
        q: "What color is Big Bird?",
        a: ["Red", "Orange", "Yellow", "Blue"],
        correct: "Yellow",
        image: "assets/images/bigBird.jpg"
    },

    question4 = {
        q: "What color is Cookie Monster?",
        a: ["Red", "Orange", "Yellow", "Blue"],
        correct: "Blue",
        image: "assets/images/cookieMonster.jpg"
    }

];



//THIS IS THE GAME OBJECT---it holds most of the game function
var game = {
    questions: questionsArray,
    currentQuestion: 0,
    counter: counterStartNumber,
    correct: 0,
    incorrect: 0,

    countdown: function () {
        console.log("The countdown function has been called.");
        var currentCountdown = counterStartNumber;
        var timer = setInterval(decrement, 1000);
        $("#counterDisplay").text(currentCountdown);
        function decrement() {
            currentCountdown--;
            $("#counterDisplay").text(currentCountdown);
            if (currentCountdown == 0) {
                console.log("Time is up!");
                clearInterval(timer);
                game.timeUp();
            }
        }
    },//end of COUNTDOWN

    loadQuestion: function () {
        console.log("The loadQuestion function has been called.");
        game.countdown();
        var question = $("<h3>").text(this.questions[this.currentQuestion].q);
        $("#build").append(question);

        for (i = 0; i < this.questions[this.currentQuestion].a.length; i++) {
            console.log(this.questions[this.currentQuestion].a[i]);

            var answerChoice = $("<button>").text(this.questions[this.currentQuestion].a[i]).attr({ type: "button", class: "answer-button btn btn-outline-secondary text-left w-100 mt-1", value: this.questions[this.currentQuestion].a[i] });
            $("#build").append(answerChoice);
        }
    },//end of LOAD QUESTION

    nextQuestion: function () {
        console.log("The nextQuestion function has been called.");
        this.counter = counterStartNumber;
        //Clear question & answers
        $("#build").text("");
        //Update scoreboard
        $("#counterDisplay").text(counterStartNumber);
        $("#correct").text("Correct: " + game.correct);
        $("#incorrect").text("Wrong: " + game.incorrect);
        this.currentQuestion++;
        this.loadQuestion();


    },//end of NEXT QUESTION

    timeUp: function () {
        console.log("The timeUp function has been called.");
        clearInterval(timer);
        //Update scoreboard
        $("#counterDisplay").text(counterStartNumber);
        $("#correct").text("Correct: " + game.correct);
        $("#incorrect").text("Wrong: " + game.incorrect);
        //Clear question & answers
        $("#build").text("");
        //Reshow current question
        var question = $("<h3>").text(this.questions[this.currentQuestion].q);
        $("#build").append(question);
        //Time-up Notice
        var notice = $("<p>").text("TIME IS UP!").attr("class", "alert alert-danger");
        $("#build").append(notice);

        //Show correct answer
        var answerChoice = $("<p>").text(this.questions[this.currentQuestion].correct).attr("class", "alert alert-info");
        $("#build").append(answerChoice);
        //Show image
        var correctImage = $("<img>").attr({ "src": this.questions[this.currentQuestion].image, "class": "img-thumbnail" })
        $("#imageHere").append(correctImage);

    },//end of TIMEUP

    results: function () {
        console.log("The results function has been called.");

    },//end of RESULTS

    clicked: function () {
        console.log("The click function has been called.");
        console.log($(this));
        clearInterval(timer);
        console.log("You clicked");

    },//end of CLICKED

    answerIncorrectly: function () {
        console.log("The answerInncorrectly function has been called.");
        //add point to incorrect
        this.incorrect++;
        clearInterval(timer);
        //Update scoreboard
        $("#counterDisplay").text(counterStartNumber);
        $("#correct").text("Correct: " + game.correct);
        $("#incorrect").text("Wrong: " + game.incorrect);
        //Clear question & answers
        $("#build").text("");
        //Reshow current question
        var question = $("<h3>").text(this.questions[this.currentQuestion].q);
        $("#build").append(question);
        //Correct Notice
        var notice = $("<p>").text("Whoops! That's wrong.").attr("class", "alert alert-danger");
        $("#build").append(notice);

        //Show correct answer
        var answerChoice = $("<p>").text(this.questions[this.currentQuestion].correct).attr("class", "alert alert-info");
        $("#build").append(answerChoice);
        //Show image
        var correctImage = $("<img>").attr({ "src": this.questions[this.currentQuestion].image, "class": "img-thumbnail" })
        $("#imageHere").append(correctImage);

        if (this.currentQuestion == this.questions.lenth) {
            setTimeout(this.results(), 3000);
        }

        else  {
            setTimeout(this.nextQuestion(), 3000)
        }

    },//end of ANSWERINCORRECTLY

    answerCorrectly: function () {
        console.log("The answerCorrectly function has been called.");
        //add point to correct
        this.correct++;
        clearInterval(timer);
        //Update scoreboard
        $("#counterDisplay").text(counterStartNumber);
        $("#correct").text("Correct: " + game.correct);
        $("#incorrect").text("Wrong: " + game.incorrect);
        //Clear question & answers
        $("#build").text("");
        //Reshow current question
        var question = $("<h3>").text(this.questions[this.currentQuestion].q);
        $("#build").append(question);
        //Correct Notice
        var notice = $("<p>").text("Correct!").attr("class", "alert alert-success");
        $("#build").append(notice);

        //Show correct answer
        var answerChoice = $("<p>").text(this.questions[this.currentQuestion].correct).attr("class", "alert alert-info");
        $("#build").append(answerChoice);
        //Show image
        var correctImage = $("<img>").attr({ "src": this.questions[this.currentQuestion].image, "class": "img-thumbnail" })
        $("#imageHere").append(correctImage);

        if (this.currentQuestion == this.questions.lenth) {
            setTimeout(this.results(), 3000);
        }

        else  {
            setTimeout(this.nextQuestion(), 3000)
        }

    },//end of ANSWERCORRECTLY

    reset: function () {
        console.log("The reset function has been called.");




    }//end of RESET

}//end of GAME object


//THESE ARE THE CLICK EVENTS
//Start Button
$(document).on("click", "#start", function () {
    console.log("You clicked start.");
    //hide welcome
    $("#welcome").attr("style", "display: none");
    //display timer
    $("#scoreboard").attr("style", "display:");
    $("#counterDisplay").text(counterStartNumber);
    //display scores
    $("#correct").text("Correct: " + game.correct);
    $("#incorrect").text("Wrong: " + game.incorrect);
    //Load first question
    game.loadQuestion();
});

//Answer Button
$(document).on("click", ".answer-button", function (event) {

    $( "button" ).click(function() {
        var vl = $("div").attr(value);
        console.log(vl);
      });
      
       
    game.clicked();
});

//Restart Button





































// let content = $("<div>");
// let first = "First Thing ";
// let second = "Second Thing ";
// let third = "Third Thing";

// $("#build").append(first, second, third);

// let card = '<div class="card">' + first + '</div>';
// $("#build").append(card);


// function buildQuiz(){
//     for (i = 1; i <= 4 ; i++){
//         $("#build").html("<div><p>" + question1.Q +"</p></div>");
//     }
// }

// buildQuiz();



// function buildQuestionBoxes(question){
//     console.log(question.Q);
//     console.log(question.responses.A.choice);

//     let questionBox = '<div class = "container"><div class="row mt-5"><div class ="col-lg-4"><img src="' + question.image +'" alt="Crystal Reed" class="img-thumbnail"></div><div class ="col-lg-8"><h3>' + question.Q +'</h3><button type="button" class="btn btn-outline-secondary text-left w-100 mt-1 responseBtn" value="' + question.responses.A.correct +'">' + question.responses.A.choice +'</button><button type="button" class="btn btn-outline-secondary text-left w-100 mt-1 responseBtn"value="' + question.responses.B.correct +'">' + question.responses.B.choice +'</button><button type="button" class="btn btn-outline-secondary text-left w-100 mt-1 responseBtn" value="' + question.responses.C.correct +'">' + question.responses.C.choice +'</button><button type="button" class="btn btn-outline-secondary text-left w-100 mt-1 responseBtn" value="' + question.responses.D.correct +'">' + question.responses.D.choice +'</button></div></div></div>'

//     $("#build").append(questionBox);
// }




// questions.forEach(buildQuestionBoxes);

// $(".responseBtn").click(function(){
//     alert("The value of this button is: " attr.value);
//   });



//buildQuestionBoxes(questions[0]);
//buildQuestionBoxes(questions[1]);
//buildQuestionBoxes(questions[2]);





//let questionBox = '<div class = "container"><div class="row mt-5"><div class ="col-lg-4"><img src="assets/images/CrystalReed.jpg" alt="Crystal Reed" class="img-thumbnail"></div><div class ="col-lg-8"><h3>This is the question.</h3><button type="button" class="btn btn-outline-secondary text-left w-100 mt-1">Lots of text here. Lots of text here. Lots of text here. Lots of text here. Lots of text here. Lots of text here. Lots of text here. </button><button type="button" class="btn btn-outline-secondary text-left w-100 mt-1">Secondary</button><button type="button" class="btn btn-outline-secondary text-left w-100 mt-1">Secondary</button><button type="button" class="btn btn-outline-secondary text-left w-100 mt-1">Secondary</button></div></div></div>'

//$("#build").append(questionBox);


// console.log(questions[1].Q);




//FUNCTIONS

//APP PLAY
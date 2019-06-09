//SET GLOBAL VARIABLES

var card = $("#build");
var counterStartNumber = 15;
var timer = null;



//QUESTION OBJECTS (held in an array)

var questionsArray = [

    question0 = {
        q: "What song plays in the graveyard scene of the Magic Kingdom’s “Haunted Mansion”?",
        a: ["Poor Unfortunate Souls", "I Ain't Got No Body", "Grim Grinning Ghosts", "Yo Ho (A Pirate's Life for Me)"],
        value: ["incorrect", "incorrect", "correct", "incorrect"],
        correct: "Grim Grinning Ghosts",
        image: "assets/images/HauntedMansionExt.jpg",
        media: "assets/media/grimGrinningGhosts1.mp3"
    },

    question1 = {
        q: "What is the best beverage?",
        a: ["Water", "Ice water", "Warm water", "Beer"],
        value: ["incorrect", "incorrect", "incorrect", "correct"],
        correct: "Beer",
        image: "assets/images/beer.jpg"
    },

    question2 = {
        q: "What state do you live in?",
        a: ["Minnesota", "Mississippi", "Confusion", "Florida"],
        value: ["incorrect", "incorrect", "correct", "incorrect"],
        correct: "Confusion",
        image: "assets/images/CrystalReed.jpg"
    },

    question3 = {
        q: "What color is Big Bird?",
        a: ["Red", "Orange", "Yellow", "Blue"],
        value: ["incorrect", "incorrect", "correct", "incorrect"],
        correct: "Yellow",
        image: "assets/images/bigBird.jpg"
    },

    question4 = {
        q: "What color is Cookie Monster?",
        a: ["Red", "Orange", "Yellow", "Blue"],
        value: ["incorrect", "incorrect", "incorrect", "correct"],
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


    countdown: function ()

    //THIS IS MY ORIGINAL TIMER FUNCTION AS I CODED IT- - - It wasn't working properly
    //                     {
    // console.log("The countdown function has been called.");
    // var currentCountdown = counterStartNumber;
    // var timer = setInterval(decrement, 1000);
    // $("#counterDisplay").text(currentCountdown);
    // function decrement() {
    //     currentCountdown--;
    //     $("#counterDisplay").text(currentCountdown);
    //     if (currentCountdown == 0) {
    //         console.log("Time is up!");
    //         clearInterval(timer);
    //         game.timeUp();
    //     }
    // }
    //THIS IS A TIMER FUNCTION I CREATED BY COPYING AND ALTERING CODE FROM STACK OVERFLOW
    {
        var timeleft = counterStartNumber;
        game.timer = setInterval(function () {
            document.getElementById("counterDisplay").innerHTML = timeleft;
            timeleft -= 1;
            if (timeleft <= 0) {
                clearInterval(game.timer);
                document.getElementById("counterDisplay").innerHTML = "Time Out"
                game.timeUp();
            }
        }, 1000);



    },//end of COUNTDOWN

    loadQuestion: function () {
        console.log("The loadQuestion function has been called.");
        game.countdown();

        //Empty the image
        $("#imageHere").text("");
        //Clear question & answers
        $("#build").text("");

        //Build the question
        var question = $("<h3>").text(this.questions[this.currentQuestion].q);
        $("#build").append(question);

        for (i = 0; i < this.questions[this.currentQuestion].a.length; i++) {
            console.log(this.questions[this.currentQuestion].a[i]);

            var answerChoice = $("<button>").text(this.questions[this.currentQuestion].a[i]).attr({ type: "button", class: "answer-button btn btn-outline-secondary text-left w-100 mt-1", id: this.questions[this.currentQuestion].value[i] });
            $("#build").append(answerChoice);
        }
    },//end of LOAD QUESTION


    //play sound
    playAudioSample: function () {
        //load mp3 into browser
        var sample = $("<audio>").attr({ src: this.questions[this.currentQuestion].media, type: "audio/mpeg", id: "clip" });
        $("#build").append(sample);
        //play the clip
        clip.play()
    },

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
        clearInterval(game.timer);
        //Update scoreboard
        $("#counterDisplay").text(counterStartNumber);
        $("#correct").text("Correct: " + game.correct);
        $("#incorrect").text("Wrong: " + game.incorrect);
        //Clear question & answers
        $("#build").text("");
        //Empty the image
        $("#imageHere").text("");
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
        //Go to results
        setTimeout(function () { game.results(); }, 3000);
    },//end of TIMEUP

    results: function () {
        console.log("The results function has been called.");
        //Empty the image
        $("#imageHere").text("");
        //Clear question & answers
        $("#build").text("");
        //Clear the scoreboard
        $("#counterDisplay").text("");
        $("#correct").text("");
        $("#incorrect").text("");
        //hide scoreboard
        $("#scoreboard").attr("style", "display: none");
        //Display results
        var correctResults = $("<h4>").text("Correct responses: " + game.correct);
        var inncorrectResults = $("<h4>").text("Incorrect responses: " + game.incorrect);
        var percentage = ((game.correct / (game.correct + game.incorrect)) * 100).toFixed(2);
        var percentageResults = $("<h4>").text("You scored " + percentage + "%.");
        $("#build").append(correctResults, inncorrectResults, percentageResults);


        //Display restart button
        var restartButton = $("<button>").text("Restart the Quiz").attr(
            { class: "btn btn-primary btn-lg", id: "restart", role: "button" }
        );
        $("#build").append(restartButton);

    },//end of RESULTS

    clicked: function () {
        console.log("The click function has been called.");
        console.log($(this));
        clearInterval(game.timer);
        console.log("You clicked");
    },//end of CLICKED

    answerIncorrectly: function () {
        console.log("The answerInncorrectly function has been called.");
        //add point to incorrect
        this.incorrect++;
        clearInterval(game.timer);
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

        //play sample
        game.playAudioSample();


        console.log("CURRENT QUESTION: " + game.currentQuestion);
        console.log("game.questions.length: " + game.questions.length);

        if (game.currentQuestion + 1 == game.questions.length) {
            setTimeout(function () { game.results(); }, 5000);
        }

        else {
            setTimeout(function () { game.nextQuestion(); }, 5000);
        }

    },//end of ANSWERINCORRECTLY

    answerCorrectly: function () {
        console.log("The answerCorrectly function has been called.");
        //add point to correct
        this.correct++;
        clearInterval(game.timer);
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

        //play sample
        game.playAudioSample();

        console.log("CURRENT QUESTION: " + game.currentQuestion);
        console.log("game.questions.length: " + game.questions.length);

        if (game.currentQuestion + 1 == game.questions.length) {
            setTimeout(function () { game.results(); }, 5000);
        }

        else {
            setTimeout(function () { game.nextQuestion(); }, 5000);
        }

    },//end of ANSWERCORRECTLY

    // reset: function () {
    //     console.log("The reset function has been called.");
    // }//end of RESET
    // The reset function was not used.  This was coded into the restart button.

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

//Answer Button (correct)
$(document).on("click", "#correct", function () {
    console.log("You clicked the correct answer");
    game.clicked();
    game.answerCorrectly();
});

//Answer Button (incorrect)
$(document).on("click", "#incorrect", function () {
    console.log("You clicked the incorrect answer");
    // game.clicked();
    game.answerIncorrectly();
});

//Restart Button
$(document).on("click", "#restart", function () {
    console.log("You clicked restart.");
    //hide welcome
    $("#welcome").attr("style", "display: none");
    //reset gameplay variable
    game.currentQuestion = 0;
    game.correct = 0;
    game.incorrect = 0;
    //display timer
    $("#scoreboard").attr("style", "display:");
    $("#counterDisplay").text(counterStartNumber);
    //display scores
    $("#correct").text("Correct: " + game.correct);
    $("#incorrect").text("Wrong: " + game.incorrect);
    //Load first question
    game.loadQuestion();
});
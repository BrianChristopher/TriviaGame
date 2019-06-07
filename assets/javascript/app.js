//SET GLOBAL VARIABLES

var card = $("#build");
var counterStartNumber = 30;
var timer = null;



//QUESTION OBJECTS (held in an array)

var questionsArray = [

    question1 = {
        Q: "What color is the sky?",
        responses: {
            A: { choice: "Blue", correct: true },
            B: { choice: "Green", correct: false },
            C: { choice: "Purple", correct: false },
            D: { choice: "Orange", correct: false }
        },
        image: "assets/images/CrystalCox.jpg"
    },

    question2 = {
        Q: "What is the best beverage?",
        responses: {
            A: { choice: "Water", correct: false },
            B: { choice: "Ice water", correct: false },
            C: { choice: "Warm water", correct: false },
            D: { choice: "Beer", correct: true }
        },
        image: "assets/images/CrystalEastman.jpeg"
    },

    question3 = {
        Q: "What state do you live in?",
        responses: {
            A: { choice: "Minnesota", correct: false },
            B: { choice: "Mississippi", correct: false },
            C: { choice: "Confusion", correct: true },
            D: { choice: "Florida", correct: false }
        },
        image: "assets/images/CrystalReed.jpg"
    }
];

var game = {
    questions: questionsArray,
    currentQuestion: 0,
    counter: counterStartNumber,
    correct: 0,
    incorrect: 0,
    countdown: function () {
        var currentCountdown = counterStartNumber;
        var timer = setInterval(decrement, 1000);
        $("#counterDisplay").text(currentCountdown);
        function decrement() {
            currentCountdown--;
            $("#counterDisplay").text(currentCountdown);
            if (currentCountdown == 0) {
                alert("Time is up!");
                clearInterval(timer);
            }
        }
    },

}

game.countdown();





































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
let score = 0;
let currentQuestion = 0;
let questions = [ 
    {
        title: "What color is Nidoking?",
        answers: ["yellow", "blue", "orange", "purple"],
        correct: 3
    },

    {
        title: "What color is Bulbasor?",
        answers: ["yellow", "blue", "orange", "purple"],
        correct: 1
    },

    {
        title: "What color is Piqachew?",
        answers: ["yellow", "blue", "orange", "purple"],
        correct: 0
    },

    {
        title: "What color is Chamander?",
        answers: ["yellow", "blue", "orange", "purple"],
        correct: 2
    },

];

// event listeners 
$( document ).ready(function() {
    console.log( "ready!" );
    $('.start a').click(function(e){
        e.preventDefault();
        $('.start').hide();
        $('.quiz').show();
        showQuestion();
    });
    $('.quiz ul').on('click', 'li', function(){
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    });
    $('.quiz a').click(function(e){
        e.preventDefault();
        if($('li.selected').length) {
            let guess = parseInt($('li.selected').attr('id'));
            checkAnswer(guess);
        }   else {
            alert("Please pick one!");
        }
    });
    $('.summ a').click(function(e){
        e.preventDefault();
        $('.summ').hide();
        $('.start').show();
        score = 0;
        currentQuestion = 0;
        showQuestion();
    });
        $('.summ a').click(function(e){
        e.preventDefault();
        $('.summ').hide();
        $('.start').show();
        score = 0;
        currentQuestion = 0;
        showQuestion();
    });
});


function showQuestion() {
    let question = questions[currentQuestion];
    $('.quiz h2').text(question.title);
    $('.quiz ul').html('');
    for (i=0; i<question.answers.length; i++) {
       $('.quiz ul').append(`<li class="answer ${question.answers[i]}" id="${i}"> ${question.answers[i]} </li>`);
    }
};

function checkAnswer(guess) {
    let question = questions[currentQuestion];
    if (question.correct === guess) {
        score++;
    }
    currentQuestion++;
    if(currentQuestion >= questions.length) {
        showSummary();
    } else {
        showQuestion();
    }   
};


function showSummary() {
    $('.quiz').hide();
    $('.summ').show();
    $('.summ p').text("Congrats you scored" + " " + score + " " + " out of" + " " + questions.length );
    $('img.show').removeClass('show');
    if (score >= 3 ) {
        $('.happy-ditto').addClass('show');
    } else {
        $('.sad-ditto').addClass('show');
    }
}

function restartQuiz() {
    $('.summ').hide();
    $('.quiz').show();
    score = 0;
    currentQuestion = 0;
    showQuestion();

}
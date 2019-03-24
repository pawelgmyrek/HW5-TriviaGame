$(document).ready(function() {
  var questionArray =
  [
    {
      question: "Who leads the scoring charts for the most goals in the Champions League?",
      answers: ["Lionel Messi", "Cristiano Ronaldo", "Raul Gonzalez"],
      correct: "Cristiano Ronaldo"
    },
    {
      question: "Which team has won the Champions League in three consecutive seasons in years 2015-2018?",
      answers: ["Real Madrid", "Barcelona", "Manchester United"],
      correct: "Real Madrid"
    },
    {
      question: "Which team won the Champions League in the 2012-2013 season?",
      answers: ["Chelsea", "Bayern Munich", "Real Madrid"],
      correct: "Bayern Munich"
    },
    {
      question: "Which English team last won the Champions League?",
      answers: ["Liverpool", "Chelsea", "Manchester United"],
      correct: "Chelsea"
    },
    {
      question: "Who scored the equalizing goal for Juventus against Real Madrid in the 2017 final?",
      answers: ["Mario Mandzukic", "Paulo Dybala", "Juan Cuadrado"],
      correct: "Mario Mandzukic"
    },
    {
      question: "Who is the most cautioned player in the Champions League?",
      answers: ["Paul Scholes", "Zlatan Ibrahimovic", "Sergio Ramos"],
      correct: "Sergio Ramos"
    },
    {
      question: "What match-up is commonly nicknamed the El Classico?",
      answers: ["Real Madrid v Atletico Madrid", "Manchester United v Manchester City", "Barcelona v Real Madrid"],
      correct: "Barcelona v Real Madrid"
    },
    {
      question: "Which team knocked the three time holders of the Champions League out in the round of 16 in the 2018-2019 season?",
      answers: ["Porto", "Ajax", "Tottenham"],
      correct: "Ajax"
    },
    {
      question: "Which team scored twice in the dying minutes of the 1998-1999 final to win the Champions League over Bayern Munich?",
      answers: ["Manchester United", "Liverpool", "Manchester City"],
      correct: "Manchester United"
    },
    {
      question: "Which team holds the record for most losses in the Champions League Final?",
      answers: ["Atletico Madrid", "Juventus", "AC Milan"],
      correct: "Juventus"
    }
  ]

  $("#start-button").on("click", startTimer);

  var timeRemaining = 180;
  var clockRunning = false;

  function startTimer() {
    if (!clockRunning) {
      setInterval(countdown, 1000);
      clockRunning = true;
    }
    $("#start-page").hide();
    $("#timer").text("Time Remaining: " + timeRemaining);
    displayQuestions();
    }

    function countdown() {
      timeRemaining--;
      $("#timer").text("Time Remaining: " + timeRemaining);
      if (timeRemaining === 0) {
        stopTimer();
        $("#timer").empty();
      }
    }

    function stopTimer() {
      clearInterval();
      clockRunning = false;
      checkAnswers();
    }

    function displayQuestions() {
      $("#questions-display").append("<h2>Answer the following questions:</h2>")
      var answerGroup = $(".form-check");

      for (var i = 0; i < questionArray.length; i++) {
        $("#questions-display").append("<div id='question'>" + questionArray[i].question + "</div>");

        var answer1 = questionArray[i].answers[0];
        var answer2 = questionArray[i].answers[1];
        var answer3 = questionArray[i].answers[2];

        $("#questions-display").append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer1 + '</label></div>');
        $("#questions-display").append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer2 + '</label></div>');
        $("#questions-display").append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer3 + '</label></div>');
      }

      var doneButton = '<button class="btn btn-primary" id="done-button" type="submit">Done</button>';
      $("#questions-display").append(doneButton);
      $("#done-button").on("click", stopTimer);
    }

    function checkAnswers() {
      var correctAnswer;
      var userAnswer;
      var numCorrect = 0;
      var numIncorrect = 0;
      var numUnanswered = 0;

      for (var i = 0; i < questionArray.length; i++) {
        correctAnswer = questionArray[i].correct;
        userAnswer = $("input[id=radio" + i + "]:checked + label").text();

        if (userAnswer === correctAnswer) {
          numCorrect++;
        }
        else if (userAnswer === "") {
          numUnanswered++;
        }
        else {
          numIncorrect++;
        }
      }
      showEndPage(numCorrect, numIncorrect, numUnanswered);
    }

    function showEndPage(numCorrect, numIncorrect, numUnanswered) {
      $("#end-page").show();
      $("#questions-display").empty();
      $("#timer").empty();
      $("#timer").hide();
      $("#correct-answers").text("Correct answers: " + numCorrect);
      $("#incorrect-answers").text("Incorrect answers: " + numIncorrect);
      $("#unanswered").text("Unanswered questions: " + numUnanswered);
    }
});

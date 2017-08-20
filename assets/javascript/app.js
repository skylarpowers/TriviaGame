$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;
var q1 = {
	question : "1) Who was Pam seceretly in love with?",
	possibleAnswers : ['A. Toby',
				 'B. Dwight',
				 'C. Jim',
				 'D. Oscar'],
	flags : [false, false, true, false],
	answer : 'C. Jim'
};

var q2 = {
	question: "2) What gift did Angela give Creed in 'Classy Christmas,' which aired in December 2010?",
	possibleAnswers: ['A. A kitty calendar',
				 'B. A multi-pack of deodorant',
				 'C. Two tickets to the band Creed',
				 'D. A $20 gift car to Scranton Skillet'],
	flags : [false, true, false, false],
	answer : 'B. A multi-packof deodorant'
};

var q3 = {
	question : "3) What ringtone song played repeatedly on Andys cell phone when Jim hid it in the ceiling at the office?",
	possibleAnswers : ['A. Another Brick in the Wall',
				 'B. 867-5309/Jenny',
				 'C. All of the Lights',
				 "D. Rockin' Robin"],
	flags : [false, false, false, true],
	answer : "D. Rockin' Robin"
};

var q4 = {
	question : "4) What was the name of Angela's sick cat that Dwight killed?",
	possibleAnswers : ['A. Angel Tail',
				 'B. Sprinkles',
				 'C. Mr.Longwhiskers',
				 'D. Princess Puss'],
	flags : [false, true, false, false],
	answer : 'B. Sprinkles'
};

var q5 = {
	question : "5) When a new manager was installed to oversee the Dunder Mifflin Scranton office, Michael quit and opened his own paper company. What was the name of this enterprise?",
	possibleAnswers : ['A. Scranton Paper Plus',
				 'B. Scraples',
				 'C. Michael Scott Paper Company',
				 'D. Papers R US'],
	flags : [false, false, true, false],
	answer : 'C. Michael Scott Paper Company'
};

var q6 = {
	question : '6) Employees from "The Office" took turns racing in front of a radar speed sign to see who could run the fastest. What did Michael claim was his speed??',
	possibleAnswers : ['A. 13 mph',
				 'B. 22 mph',
				 'C. 31 mph',
				 'D. 52 mph'],
	flags : [false, false, true, false],
	answer : 'C. 31 mph'
};

var q7 = {
	question : '7) In S1E1 "Pilot": Who started their first day at Dunder Mifflin Scranton?',
	possibleAnswers : ['A. Jim',
				 'B. Ryan',
				 'C. Michael',
				 'D. Erin'],
	flags : [false, true, false, false],
	answer : 'B. Ryan'
};

var q8 = {
	question : "8) In S1E5 'Basketball': What small appliance of Pam's breaks down? (It was given to her at her engagement party three years earlier) ",
	possibleAnswers : ['A. Toaster',
				 'B. Microwave',
				 'C. Blender',
				 'D. Toaster Oven'],
	flags : [false, false, false, true],
	answer : 'D. Toaster Oven'
};

var q9 = {
	question : '9) In S2E1 "The Dundies": What Dundie award does Phyllis take home?',
	possibleAnswers : ['A. The Busiest Beaver Dundie',
				 'B. The Bushiest Beaver Dundie',
				 'C. Spicy Curry Dundie',
				 'D. Whitest Sneakers Dundie'],
	flags : [false, true, false, false],
	answer : 'B. The Bushiest Beaver Dundie'
};

var q10 = {
	question : "10) In S2E5 'Halloween': What is Jims costume?",
	possibleAnswers : ['A. "Dave" ',
				  "B. Bookface",
				  "C Three Hole Punch Jim",
				  'D. Rational Consumer'],
	flags : [false, false, true, false],
	answer : 'C. Three Hole Punch Jim'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
}



function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


});
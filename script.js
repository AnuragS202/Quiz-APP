let formElement = document.forms['quizApp'];

formElement.onsubmit = function submitAnswers(){
	let total = 5;
	let score = 0;
	
	// Get User Input
	    q1 = document.forms["quizApp"]["q1"].value,
	    q2 = document.forms["quizApp"]["q2"].value,
	    q3 = document.forms["quizApp"]["q3"].value,
	    q4 = document.forms["quizApp"]["q4"].value,
	    q5 = document.forms["quizApp"]["q5"].value;
	
	// Validation
	for(i = 1; i <= total;i++){
		if(eval('q'+i) === null || eval('q'+i) === ''){
			alert('You missed question '+ i);
			return false;
		}
	}
	
	// Set Correct Answers
	let answers = ["a","b","a","c","a"];
	
	// Check Answers
	for(i = 1; i <= total;i++){
		if(eval('q'+i) === answers[i - 1]){
			score++;
		}
	}
	
	// Display Results
	let results = document.getElementById('results');
	results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
	
	return false;
	
}



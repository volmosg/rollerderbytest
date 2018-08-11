var myQuestions = [
	{
		question: "Una patinadora utiliza el codo para sujetar el brazo de la oponente e impedir su mobilidad. Esto constituye:",
		answers: {
			a: 'Una falta (penalty)',
			b: 'Una expulsión',
			c: 'No constituye penalización'
		},
		correctAnswer: 'a',
		rule: "5.4.8"
	},
	{
		question: "Las patinadoras tienen que ir en sentido contrario a las agujas del reloj cuando ejecutan un bloqueo",
		answers: {
			a: 'Verdadero',
			b: 'Falso'
		},
		correctAnswer: 'a',
		rule: "5.9.1"
	}
	,
	{
		question: "Una Jammer no puede terminar el jam (aun siendo lead jammer) si no tiene el cubrecasco con la estrella",
		answers: {
			a: 'Verdadero',
			b: 'Falso'
		},
		correctAnswer: 'a',
		rule: "2.4.6"
	},
	{
		question: "Cada partido debe tener no menos de _______ árbitros en patines y no más de ______ árbitros totales",
		answers: {
			a: 'Cuatro/Ocho',
			b: 'Tres/Siete',
			c: 'Cinco/Diez',
			d: 'Seis/Nueve'
		},
		correctAnswer: 'b',
		rule: "8.1.1"
	},
	{
		question: "Una jugadora sale fuera de la pista y al entrar ha adelantado a otra jugadora de su equipo. Esto constituye:",
		answers: {
			a: 'Una falta (penalty)',
			b: 'Una expulsión',
			c: 'No constituye penalización'
		},
		correctAnswer: 'c',
		rule: "-"
	},
	{
		question: "Bloqueadora blanca echa de la pista a bloqueadora de roja pero también acaba saliendo ella. Al volver a entrar, la bloqueadora roja entra por delante de la del equipo blanco. ¿Qué tipo de penalización recibirá la bloqueadora roja?",
		answers: {
			a: 'Cutting',
			b: 'Bloquear fuera de límites',
			c: 'No recibirá ninguna penalización'
		},
		correctAnswer: 'c',
		rule: "5.11.1"
	},
	{
		question: "Una Jammer puede convertirse en lead jammer estando fuera de pista",
		answers: {
			a: 'Verdadero',
			b: 'Falso'
		},
		correctAnswer: 'b',
		rule: "2.4.1.1.1"
	},
	{
		question: "La decisión del árbitro principal en cuanto a una revisión oficial:",
		answers: {
			a: 'Puede ser discutida',
			b: 'Puede ser reclamada',
			c: 'Puede ser ignorada',
			d: 'Es final'
		},
		correctAnswer: 'd',
		rule: "1.11.1.5"
	},
	{
		question: "Una patinadora fuera de juego inicia una ayuda que culmina en una mejora de posición de la receptora de la ayuda. Esto constituye:",
		answers: {
			a: 'Una falta (penalty)',
			b: 'Una expulsión',
			c: 'No constituye penalización'
		},
		correctAnswer: 'a',
		rule: "5.10.19"
	},
	{
		question: "Si el cubrecasco de la Jammer cae al suelo, ¿quién puede recogerlo?",
		answers: {
			a: 'Cualquier patinadora',
			b: 'Sólo la Jammer o la Pivot',
			c: 'Sólo la Jammer'
		},
		correctAnswer: 'b',
		rule: "2.6.5"
	},
	{
		question: "Una patinadora se quita el casco mientras está en el penalty box. Esto constituye:",
		answers: {
			a: 'Una falta (penalty)',
			b: 'Una expulsión',
			c: 'No constituye penalización'
		},
		correctAnswer: 'a',
		rule: "5.13.14"
	},
	{
		question: "Jammer A está en el penalty box cuando envían a Jammer B. Al volver al campo, Jammer A vuelve a cometer falta y la vuelven a enviar al penalty box justo cuando se acaba el tiempo de jam. ¿Qué ocurre al empezar el siguiente jam?",
		answers: {
			a: 'Ninguna Jammer empieza en el penalty box',
			b: 'Sólo Jammer A tiene que empezar en el penalty box',
			c: 'Ambas Jammers empiezan en el penalty box y se quedan el tiempo requerido',
			d: 'Ambas Jammers se quedan en el penalty box 10 segundos y luego vuelven a la pista'
		},
		correctAnswer: 'c',
		rule: "6.3.1.1"
	}
];


var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
		
		//
		var outRules = [];
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
				
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
				// show the rule to correctly answer the question
				answerContainers[i].innerHTML = '<div class="question">Revisa la regla: ' + questions[i].rule + '</div>';

            }
        }

        // show number of correct answers out of total
		
        resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
	
}
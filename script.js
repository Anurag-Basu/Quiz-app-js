const quizData = [
    {
        question: 'What year was JavaScript launched?',
        a: '1998',
        b: '1994',
        c: '1995',
        d: '1999',
        correct: 'c'
    },

    {
        question: 'What is the most used programming language in 2021?',
        a: 'Python',
        b: 'Java',
        c: 'JavaScript',
        d: 'C#',
        correct: 'a'

    },

    {
        question : 'Which type of JavaScript language is _',
        a: 'Object-Oriented', 
        b: 'Object-Based',
        c: 'Assembly-language',
        d: 'High-level',
        correct: 'b'
    },

    {
        question: 'The FUNCTION and VAR are known as:',
        a: 'keywords', 
        b: 'Data types',
        c: 'Declaration statements',
        d: 'Prototypes',
        correct: 'c'
    },

    {
        question : "Which one of the following is the correct way for calling the JavaScript code?",
        a: 'Preprocessor',
        b: 'Triggering Event',
        c: 'RMI',
        d: 'Function/Method',
        correct: 'd'
    }
   
]

let quizIndex = 0;
const quizContainer = document.getElementById('quiz-app');
const questinEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const answer = document.querySelectorAll('.answer');
let correctAns = undefined;
let score = 0;
let questionData;
let point = document.querySelector('.point');
const scoreBoard = document.getElementById('score-board');

function runQuiz(){
    deselectAnswers();
    questionData = quizData[quizIndex];
    questinEl.innerText = questionData.question;
    a_text.innerText = questionData.a;
    b_text.innerText = questionData.b;
    c_text.innerText = questionData.c;
    d_text.innerText = questionData.d;

}

function getSelected(){
    answer.forEach((ans) => {
        if(ans.checked){
            correctAns = ans.id;
        }
    });

    return correctAns;
}

function deselectAnswers(){
    answer.forEach((ans) => {
        ans.checked = false;
    })
}






runQuiz();

submitBtn.addEventListener('click', () => {
    quizIndex++;
    getSelected();
    if(correctAns){
        if(correctAns === questionData.correct){
            score++;
        }

        if(quizIndex < quizData.length){
            runQuiz();
    
        }else{
            quizContainer.innerHTML =`<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick= 'location.reload()'> Reload</button>
            `
        }

    }

})


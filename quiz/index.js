let  questions = [
    {
        question: "which is the largest animal in the world?",
        answer:[
        {text: "shark", correct:false},
        {text: "blue whale", correct:true},
        {text: "elephant", correct:false},
        {text: "shark", correct:false}
        ]
    },
    {
        question: "which is the smallest city in the world?",
        answer:[
        {text: "vatican city", correct:true},
        {text: "Bhutan", correct:false},
        {text: "Nepal", correct:false},
        {text: "Sri Lanka", correct:false}
        ]
    },
    {
        question: "which is the largest desert in the world?",
        answer:[
        {text: "Kalahari ", correct:false},
        {text: "Gobi", correct:false},
        {text: "Sahara", correct:true},
        {text: "Thar", correct:false}
        ]
    },
    {
        question: "which is the smallest Continent in the world?",
        answer:[
        {text: "Asia", correct:false},
        {text: "Australia", correct:true},
        {text: "Artic", correct:false},
        {text: "Africa", correct:false}
        ]
    }
]

let quest = document.querySelector("#question");
let ansBtn =  document.querySelector("#ansBtn");
let nextBtn =  document.querySelector("#next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestions();
}

function showQuestions() {
    let currentQuestion = questions[currentQuestionIndex];
    let questNo = currentQuestionIndex + 1;
    quest.innerText = `${questNo}. ${currentQuestion.question}`;

  

    currentQuestion.answer.forEach(answer => {
       let button = document.createElement("button");
       button.innerText= answer.text;
       button.classList.add("btn");
       ansBtn.appendChild(button)
       button.addEventListener("click", selectAnswer)
    });
}

function selectAnswer(e){
  let selectedAnswer = e.target;
  if(selectedAnswer === questions.answer.correct==true){
    selectAnswer.style.backgroundColor = "green"
  }
  else{
    selectAnswer.style.backgroundColor = ""
    questions.answer.correct.style.backgroundColor = "green"
  }
}
startQuiz();
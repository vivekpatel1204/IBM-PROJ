const question=document.getElementById("question");
const choices= Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText= document.getElementById('questionCounter');
const scoreText= document.getElementById('score');
let currentQuestion={};
let acceptingAnswers=true;
let score=0;
let questionCounter=0;
let availableQuestions=[];


let questions=[
    {
        question:"What is the capital of Gujarat:",
        choice1: "Ahmedabad",
        choice2: "Gandhinagar",
        choice3: "Surat",
        choice4: "Valsad",
        answer: 2
    },
    {
        question:"Who is the Prime Minister of India:",
        choice1: "Amit Shah",
        choice2: "Rahul Gandhi",
        choice3: "Narendra Modi",
        choice4: "Bhupendra Patel",
        answer: 3
    },
    {
        question:"Who is the CEO of Google:",
        choice1: "Mark Zuckerberg",
        choice2: "Jeff Besos",
        choice3: "Bill Gates",
        choice4: "Sundar Pichai",
        answer: 4
    }
];


const CORRECT_BONUS=10;
const MAX_QUESTIONS=5;

startGame=() =>{
    questionCounter=0;
    score=0;
    availableQuestions=[...questions];
    getNewQuestion();
};

getNewQuestion=() =>{
    questionCounter++;
    const questionIndex=Math.floor(Math.random()* availableQuestions.length);
    currentQuestion=availableQuestions[questionIndex];
    question.innerText=currentQuestion.question;

    choices.forEach(choice =>{
        const number=choice.dataset["number"];
        choice.innerText=currentQuestion["choice" +number];
    });

    availableQuestions.splice(questionIndex,1);
    console.log(availableQuestions);
    acceptingAnswers=true;
};

choices.forEach(choice =>{
    choice.addEventListener("click", e=>{
        if(!acceptingAnswers) return;
        acceptingAnswers=false;
        const selectedChoice =e.target;
        const selectedAnswer= selectedChoice.dataset["number"];
        setTimeout(() => {
            selectedChoice.parentElement.classlist.remove(classToApply);
            getNewQuestion();
        }, 1000);
        console.log(selectedAnswer);
        getNewQuestion();
    });
});

incrementScore = num=>{
    score+=num;
    scoreText.innerText=score;
};
startGame();


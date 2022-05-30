// alert("hii")
var quizdata=[
  {
    question:"Which framework belongs to Java Script?",
    a:"django",
    b:"Spring",
    c:"react",
    d:"flask",
    correct:"c"
  },

  {
    question:"Which is not a programming language?",
    a:"Java",
    b:"Ruby",
    c:"C++",
    d:"HTML",
    correct:"d"
  },
  {
    question:"Which is not a framework?",
    a:"react",
    b:"angular",
    c:"Node js",
    d:"Ruby",
    correct:"d"
  },
  {
    question:"Which sign does jQuery use as a shortcut for jQuery?",
    a:"the ? sign",
    b:"the # sign",
    c:"the $ sign",
    d:"the & sign",
    correct:"c"
  },
]

var quiz=document.getElementById('quiz')
var answer=document.querySelectorAll(".answer")
var question=document.getElementById('question')
var option_a=document.getElementById('a_value')
var option_b=document.getElementById('b_value')
var option_c=document.getElementById('c_value')
var option_d=document.getElementById('d_value')

var submitbtn=document.getElementById('submit')
var currentQuestion=0
var quizScore=0
loadQuiz()
function loadQuiz()
{
  deselect()
  question.innerHTML=quizdata[currentQuestion].question
  option_a.innerHTML=quizdata[currentQuestion].a
  option_b.innerHTML=quizdata[currentQuestion].b
  option_c.innerHTML=quizdata[currentQuestion].c
  option_d.innerHTML=quizdata[currentQuestion].d
}
function deselect(){
  answer.forEach(answer=>answer.checked=false)
}

submitbtn.addEventListener("click",()=>{
  var selectedoption
  answer.forEach(answer=>{
    if(answer.checked){
      selectedoption=answer.id
    }
  })
  
  if(selectedoption==quizdata[currentQuestion].correct){
    quizScore+=1
  }
  currentQuestion+=1
  if(currentQuestion==quizdata.length){
    var text="You have scored "+quizScore+" out of "+ quizdata.length+"."
    document.getElementById('quizdiv').innerHTML=text
  }
  else{
  loadQuiz()
}
})

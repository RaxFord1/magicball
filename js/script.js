function Generate(){
    document.body.innerHTML = "<div id='pattern'>&nbsp;</div><header><span style='color: white; '>RaxFord</span>        <div class='href'><a href='https://raxford1.github.io/web_individual/'>Home</a>  </div>    </header><hr><div class='circle' id ='circle' onclick='Question();'><div class='answer' id='answer'>Введіть своє питання!</div></div>"
}
Generate();
function DeleteShaking(){
    document.getElementById("circle").classList.remove('shaking');
}
function Question(){
    var question='';
    question = prompt("Напишіть ваше питання");
    if (question.length==0) {
        alert("Ви не ввели питання!")
        return;
    }
    //Make ball shaking
    document.getElementById("circle").classList.add('shaking');
    setTimeout(DeleteShaking, 1000);
    answers = ["Yes", "No"];
    const randomElement = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById("answer").innerHTML = randomElement;
}

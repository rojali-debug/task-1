let cards = [
    {question: "what is HTML?", answer: "HyperText Markup Language"},
    {question : "What is CSS?", answer:"Cascading Style Sheets"},
    {question : "what is JavaScript?", answer:"Programming Language}
];
let i = 0;
function displayCard(){
    document.getElementsById("question").innerHTML = cards[i].questions;
     document.getElementsById("answer").innerHTML = "";
}
function showAnswer(){
    document.getElementsById("answer").innerHTML = cards[i].answer;
}
function nextCard(){
    i++;
    if( i == cards.length){
        i = 0;
    }
    displayCard();
}
displayCard();


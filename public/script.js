document.getElementById("question1").innerHTML = "What color is the sky?";
document.getElementById("question2").innerHTML = "What color is the sun?";
document.getElementById("question3").innerHTML = "What color is the snow?";

document.getElementById("b1").innerHTML = "blue";
document.getElementById("b2").innerHTML = "white";
document.getElementById("b3").innerHTML = "green";
document.getElementById("b4").innerHTML = "black";
document.getElementById("b5").innerHTML = "blue";
document.getElementById("b6").innerHTML = "red";
document.getElementById("b7").innerHTML = "yellow";
document.getElementById("b8").innerHTML = "purple";
document.getElementById("b9").innerHTML = "blue";
document.getElementById("b10").innerHTML = "white";
document.getElementById("b11").innerHTML = "yellow";
document.getElementById("b12").innerHTML = "black";




function myfunction1() {
    graph.js.ans1++;
    graph.js.q1attemtps++;
    document.getElementById("div1").style.display = "none";
    document.getElementById("q1textbox").value = document.getElementById("b1").innerHTML;
    console.log(document.getElementById("q1textbox").value);
}
function myfunction2() {
    graph.js.ans2++;
    graph.js.q1attemtps++;
    document.getElementById("div1").style.display = "none";
    document.getElementById("q1textbox").value = document.getElementById("b2").innerHTML;
    console.log(document.getElementById("q1textbox").value);
}
function myfunction3() {
    graph.js.ans3++;
    graph.js.q1attemtps++;
    document.getElementById("div1").style.display = "none";
    document.getElementById("q1textbox").value = document.getElementById("b3").innerHTML; 
    console.log(document.getElementById("q1textbox").value);
}
function myfunction4() {
    graph.js.ans4++;
    graph.js.q1attemtps++;
    document.getElementById("div1").style.display = "none";
    document.getElementById("q1textbox").value = document.getElementById("b4").innerHTML;
    console.log(document.getElementById("q1textbox").value); 
}
function myfunction5() {
    graph.js.ans5++;
    graph.js.q2attemtps++;
    document.getElementById("div2").style.display = "none";
    document.getElementById("q2textbox").value = document.getElementById("b5").innerHTML; 
    console.log(document.getElementById("q2textbox").value);
}
function myfunction6() {
    graph.js.ans6++;
    graph.js.q2attemtps++;
    document.getElementById("div2").style.display = "none";
    document.getElementById("q2textbox").value = document.getElementById("b6").innerHTML; 
    console.log(document.getElementById("q2textbox").value);
}
function myfunction7() {
    graph.js.ans7++;
    graph.js.q2attemtps++; 
    document.getElementById("div2").style.display = "none";
    document.getElementById("q2textbox").value = document.getElementById("b7").innerHTML;
    console.log(document.getElementById("q2textbox").value); 
}
function myfunction8() {
    graph.js.ans8++;
    graph.js.q2attemtps++; 
    document.getElementById("div2").style.display = "none";
    document.getElementById("q2textbox").value = document.getElementById("b8").innerHTML;
    console.log(document.getElementById("q2textbox").value);     
}
function myfunction9() {
    graph.js.ans9++;
    graph.js.q3attemtps++;
    document.getElementById("div3").style.display = "none";
    document.getElementById("q3textbox").value = document.getElementById("b9").innerHTML;
    console.log(document.getElementById("q3textbox").value); 
}
function myfunction10() {
    graph.js.ans10++;
    graph.js.q3attemtps++; 
    document.getElementById("div3").style.display = "none";
    document.getElementById("q3textbox").value = document.getElementById("b10").innerHTML;
    console.log(document.getElementById("q3textbox").value); 
}
function myfunction11() {
    graph.js.ans11++;
    graph.js.q3attemtps++;
    document.getElementById("div3").style.display = "none";
    document.getElementById("q3textbox").value = document.getElementById("b11").innerHTML;
    console.log(document.getElementById("q3textbox").value); 
}
function myfunction12() {
    graph.js.ans12++;
    graph.js.q3attemtps++;
    document.getElementById("div3").style.display = "none";
    document.getElementById("q3textbox").value = document.getElementById("b12").innerHTML;
    console.log(document.getElementById("q3textbox").value); 
}

function validate(){

}





// function hashDone(){
//   console.log(myHash);
//   bcrypt.compare(document.forms["form"]["Password"], myHash, function(err, res){
//     console.log(res);
//   });
    
//   bcrypt.compare("veggies", myHash, function(err, res){
//     console.log(res);
//   });
// }


var q1 = "What color is the sky?";
var q2 = "What color is the sun?";
var q3 = "What color is the snow?";

var ans1=0;
var ans2=0;
var ans3=0;
var ans4=0;
var ans5=0;
var ans6=0;
var ans7=0;
var ans8=0;
var ans9=0;
var ans10=0;
var ans11=0;
var ans12=0;

var q1attemtps=0;

var q2score=0;
var q2attemtps=0;

var q3score=0;
var q3attemtps=0;


var q1arr = ["blue","white","green","black"];
var q2arr = ["blue","red","yellow","purple"];
var q3arr = ["blue","white","yellow","black"];

document.getElementById("question1").innerHTML = q1;
document.getElementById("question2").innerHTML = q2;
document.getElementById("question3").innerHTML = q3;

document.getElementById("b1").innerHTML = q1arr[0];
document.getElementById("b2").innerHTML = q1arr[1];
document.getElementById("b3").innerHTML = q1arr[2];
document.getElementById("b4").innerHTML = q1arr[3];
document.getElementById("b5").innerHTML = q2arr[0];
document.getElementById("b6").innerHTML = q2arr[1];
document.getElementById("b7").innerHTML = q2arr[2];
document.getElementById("b8").innerHTML = q2arr[3];
document.getElementById("b9").innerHTML = q3arr[0];
document.getElementById("b10").innerHTML = q3arr[1];
document.getElementById("b11").innerHTML = q3arr[2];
document.getElementById("b12").innerHTML = q3arr[3];



function myfunction1() {
    ans1++;
document.getElementById("div1").style.display = "none";
q1attemtps++;
}
function myfunction2() {
    ans2++;
q1attemtps++;
document.getElementById("div1").style.display = "none";

}
function myfunction3() {
    ans3++;
    
q1attemtps++;

    document.getElementById("div1").style.display = "none";
    
}
function myfunction4() {
q1attemtps++;
ans4++;

    document.getElementById("div1").style.display = "none";
    
}
function myfunction5() {
 q2attemtps++;
    document.getElementById("div2").style.display = "none";
    ans5++;
    
}
function myfunction6() {
 q2attemtps++;
 
    document.getElementById("div2").style.display = "none";
    ans6++;
    
}
function myfunction7() {
    ans7++;
 q2attemtps++; 
 document.getElementById("div2").style.display = "none";
}
function myfunction8() {
 q2attemtps++; 
    document.getElementById("div2").style.display = "none";
    ans8++;
    
}
function myfunction9() {
    q3attemtps++;
    document.getElementById("div3").style.display = "none";
    ans9++;
    
}
function myfunction10() {
 q3attemtps++; 
 ans10++;
    document.getElementById("div3").style.display = "none";
    
}
function myfunction11() {
    q3attemtps++;
    ans11++;
    document.getElementById("div3").style.display = "none";
    
}
function myfunction12() {
    q3attemtps++;
    ans12++;
    document.getElementById("div3").style.display = "none";
}




function validate(){

}

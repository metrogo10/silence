

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


var ans1clicked=0;
var ans2clicked=0;
var ans3clicked=0;
var ans4clicked=0;
var ans5clicked=0;
var ans6clicked=0;
var ans7clicked=0;
var ans8clicked=0;
var ans9clicked=0;
var ans10clicked=0;
var ans11clicked=0;
var ans12clicked=0;
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
document.getElementById("q1textbox").value = document.getElementById("b1").innerHTML;
console.log(document.getElementById("q1textbox").value);
q1attemtps++;
}
function myfunction2() {
    ans2++;
q1attemtps++;
document.getElementById("div1").style.display = "none";
document.getElementById("q1textbox").value = document.getElementById("b2").innerHTML 

}
function myfunction3() {
    ans3++;
    
q1attemtps++;
document.getElementById("q1textbox").value = document.getElementById("b3").innerHTML 

    document.getElementById("div1").style.display = "none";
    
}
function myfunction4() {
q1attemtps++;
ans4++;

    document.getElementById("div1").style.display = "none";
document.getElementById("q1textbox").value = document.getElementById("b4").innerHTML 

}
function myfunction5() {
 q2attemtps++;
    document.getElementById("div2").style.display = "none";
    ans5++;
document.getElementById("q2textbox").value = document.getElementById("b5").innerHTML 

}
function myfunction6() {
 q2attemtps++;
 
    document.getElementById("div2").style.display = "none";
    ans6++;
document.getElementById("q2textbox").value = document.getElementById("b6").innerHTML 

}
function myfunction7() {
    ans7++;
 q2attemtps++; 
 document.getElementById("div2").style.display = "none";
document.getElementById("q2textbox").value = document.getElementById("b7").innerHTML 

}
function myfunction8() {
 q2attemtps++; 
    document.getElementById("div2").style.display = "none";
document.getElementById("q2textbox").value = document.getElementById("b8").innerHTML 
ans8++;
    
}
function myfunction9() {
    q3attemtps++;
    document.getElementById("div3").style.display = "none";
    ans9++;
document.getElementById("q3textbox").value = document.getElementById("b9").innerHTML 

}
function myfunction10() {
 q3attemtps++; 
 ans10++;
    document.getElementById("div3").style.display = "none";
document.getElementById("q3textbox").value = document.getElementById("b10").innerHTML 

}
function myfunction11() {
    q3attemtps++;
    ans11++;
    document.getElementById("div3").style.display = "none";
document.getElementById("q3textbox").value = document.getElementById("b10").innerHTML 

}
function myfunction12() {
    q3attemtps++;
    ans12++;
    document.getElementById("div3").style.display = "none";
    document.getElementById("q3textbox").value = document.getElementById("b12").innerHTML 
    
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

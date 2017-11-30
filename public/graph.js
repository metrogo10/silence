var myCanvas = document.getElementById("myCanvas");
myCanvas.width = 300;
myCanvas.height = 300;
  
var ctx = myCanvas.getContext("2d");

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

function drawLine(ctx, startX, startY, endX, endY,color){
    ctx.save();
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
    ctx.restore();
}

function drawBar(ctx, upperLeftCornerX, upperLeftCornerY, width, height,color){
    ctx.save();
    ctx.fillStyle=color;
    ctx.fillRect(upperLeftCornerX,upperLeftCornerY,width,height);
    ctx.restore();
}

var Barchart = function(options){
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;
  
    this.draw = function(){
        var maxValue = 0;
        for (var categ in this.options.data){
            maxValue = Math.max(maxValue,this.options.data[categ]);
        }
        var canvasActualHeight = this.canvas.height - this.options.padding * 2;
        var canvasActualWidth = this.canvas.width - this.options.padding * 2;
 
        //drawing the grid lines
        var gridValue = 0;
        while (gridValue <= maxValue){
            var gridY = canvasActualHeight * (1 - gridValue/maxValue) + this.options.padding;
            drawLine(
                this.ctx,
                0,
                gridY,
                this.canvas.width,
                gridY,
                this.options.gridColor
            );
             
            //writing grid markers
            this.ctx.save();
            this.ctx.fillStyle = this.options.gridColor;
            this.ctx.textBaseline="bottom"; 
            this.ctx.font = "bold 10px Arial";
            this.ctx.fillText(gridValue, 10,gridY - 2);
            this.ctx.restore();
 
            gridValue+=this.options.gridScale;
        }
  
        //drawing the bars
        var barIndex = 0;
        var numberOfBars = Object.keys(this.options.data).length;
        var barSize = (canvasActualWidth)/numberOfBars;
 
        for (categ in this.options.data){
            var val = this.options.data[categ];
            var barHeight = Math.round( canvasActualHeight * val/maxValue) ;
            drawBar(
                this.ctx,
                this.options.padding + barIndex * barSize,
                this.canvas.height - barHeight - this.options.padding,
                barSize,
                barHeight,
                this.colors[barIndex%this.colors.length]
            );
 
            barIndex++;
        }
          //drawing series name
          this.ctx.save();
          this.ctx.textBaseline="bottom";
          this.ctx.textAlign="center";
          this.ctx.fillStyle = "#000000";
          this.ctx.font = "bold 14px Arial";
          this.ctx.fillText(this.options.seriesName, this.canvas.width/2,this.canvas.height);
          this.ctx.restore();  
           
          //draw legend
          barIndex = 0;
          var legend = document.querySelector("legend[for='myCanvas3']");
          var ul = document.createElement("ul");
          legend.append(ul);
          for (categ in this.options.data){
              var li = document.createElement("li");
              li.style.listStyle = "none";
              li.style.borderLeft = "20px solid "+this.colors[barIndex%this.colors.length];
              li.style.padding = "5px";
              li.textContent = categ;
              li.style.display = "inline-block"
              ul.append(li);
              barIndex++;
          }
    }
}

var myBarchart = new Barchart(
    {
        canvas:myCanvas,
        seriesName:"Question 1 Stats",
        padding:20,
        gridScale:5,
        gridColor:"#eeeeee",
        data:q1answers,
        colors:["#a55ca5","#67b6c7", "#bccd7a","#eb9743"]
    }
);

var myBarchart2 = new Barchart(
    {
        canvas:myCanvas2,
        seriesName:"Question 2 Stats",
        padding:20,
        gridScale:2,
        gridColor:"#eeeeee",
        data:q2answers,
        colors:["#a55ca5","#67b6c7", "#bccd7a","#eb9743"]
    }
);
var myBarchart3 = new Barchart(
    {
        canvas:myCanvas3,
        seriesName:"Question 3 Stats",
        padding:20,
        gridScale:7,
        gridColor:"#eeeeee",
        data:q3answers,
        colors:["#a55ca5","#67b6c7", "#bccd7a","#eb9743"]
    }
);

myBarchart.draw();
myBarchart2.draw();
myBarchart3.draw();
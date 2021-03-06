var myCanvas = document.getElementById("myCanvas");
var myCanvas2 = document.getElementById("myCanvas2");
var myCanvas3 = document.getElementById("myCanvas3");
var ctx = myCanvas.getContext("2d");
var ctx2 = myCanvas2.getContext("2d");
var ctx3 = myCanvas3.getContext("2d");

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

var q1score=0;
var q1attemtps=0;

var q2score=0;
var q2attemtps=0;

var q3score=0;
var q3attemtps=0;

var q1answers = {
    "blue" : ans1/q1attemtps,
    "white": ans2/q1attemtps,
    "green": ans3/q1attemtps,
    "black": ans4/q1attemtps
};
var q2answers = {
    "blue" : ans5/q1attemtps,
    "red": ans6/q1attemtps,
    "yellow": ans7/q1attemtps,
    "purple": ans8/q1attemtps
};
var q3answers = {
    "blue" : ans9/q1attemtps,
    "white": ans10/q1attemtps,
    "yellow": ans11/q1attemtps,
    "black": ans12/q1attemtps
};

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
        gridScale:2,
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
        gridScale:2,
        gridColor:"#eeeeee",
        data:q3answers,
        colors:["#a55ca5","#67b6c7", "#bccd7a","#eb9743"]
    }
);

myBarchart.draw();
myBarchart2.draw();
myBarchart3.draw();
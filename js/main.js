        
var yyy=document.getElementById('xxx')
var pageWidth=document.documentElement.clientWidth
var pageHeight=document.documentElement.clientHeight      
yyy.width=pageWidth
yyy.height=pageHeight
var context = yyy.getContext('2d')
var painting =false
var lastPoint={'x':undefined,'y':undefined}




function drawLine(x1,y1,x2,y2){    //连线函数
    context=xxx.getContext('2d');
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineWidth=4;
    context.lineTo(x2,y2);
    context.stroke();
    context.closePath(); 
}


var usingEraser=false
    pen.onclick=function(){
     console.log("wo laile ")
    usingEraser=false
}
    earser.onclick=function(){
    usingEraser=true
}

if(document.body.ontouchstart !==undefined){
yyy.ontouchstart=function(a){
painting =true            
    var x=a.touches[0].clientX
    var y=a.touches[0].clientY
    
    if(usingEraser){
        context.clearRect(x,y,20,20)
    }else{
        lastPoint={'x':x,'y':y}
    context.beginPath()
    context.arc(x,y,0.2,0,Math.PI*2)
    context.fill() 
    }          
}
yyy.ontouchmove=function(a){

if (painting){
        var x=a.touches[0].clientX
        var y=a.touches[0].clientY
        newPoint={'x':x,'y':y}
        if(usingEraser){
            context.clearRect(x,y,20,20)
        }else{
            context.beginPath()
            context.arc(x,y,0.2,0,Math.PI*2)
            context.fill()                
            drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
            lastPoint=newPoint
        }
            
    }            
}



}
else{
yyy.onmousedown=function(a){
    painting =true            
    var x=a.clientX
    var y=a.clientY
    
    if(usingEraser){
        context.clearRect(x,y,20,20)
    }else{
        lastPoint={'x':x,'y':y}
    context.beginPath()
    context.arc(x,y,0.2,0,Math.PI*2)
    context.fill() 
    }          

}
yyy.onmousemove=function(a){
    if (painting){
        var x=a.clientX
        var y=a.clientY
        newPoint={'x':x,'y':y}
        if(usingEraser){
            context.clearRect(x,y,20,20)
        }else{
            context.beginPath()
            context.arc(x,y,0.2,0,Math.PI*2)
            context.fill()                
            drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
            lastPoint=newPoint
        }
            
    }            
}

yyy.onmouseup =function(a){
    painting =false
}
}

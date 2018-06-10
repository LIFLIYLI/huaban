        
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
    context.lineTo(x2,y2);
    
    
    context.stroke();
    context.closePath(); 
}


var usingEraser=false
    pen.onclick=function(){
    context.strokeStyle='black'
    usingEraser=false
    pen.classList.add('active')
    red.classList.remove('active')
    blue.classList.remove('active')
    green.classList.remove('active')
    eraser.classList.remove('active')
}
    eraser.onclick=function(){
    usingEraser=true
    eraser.classList.add('active')
    pen.classList.remove('active')
    
}

if(document.body.ontouchstart !==undefined){
yyy.ontouchstart=function(a){
painting =true            
    var x=a.touches[0].clientX
    var y=a.touches[0].clientY
    
    if(usingEraser){
        context.clearRect(x,y,40,40)
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
            context.clearRect(x,y,40,40)
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

red.onclick=function(){
    context.strokeStyle='red'
    red.classList.add('active')
    blue.classList.remove('active')
    green.classList.remove('active')
    pen.classList.remove('active')
    eraser.classList.remove('active')
    usingEraser=false
}
blue.onclick=function(){
    context.strokeStyle='blue'
    red.classList.remove('active')
    blue.classList.add('active')
    green.classList.remove('active')
    pen.classList.remove('active')
    eraser.classList.remove('active')
    usingEraser=false
}
green.onclick=function(){
    context.strokeStyle='green'
    red.classList.remove('active')
    blue.classList.remove('active')
    green.classList.add('active')
    pen.classList.remove('active')
    eraser.classList.remove('active')
    usingEraser=false
}
xi.onclick=function(){
    xi.classList.add('active')
    eraser.classList.remove('active')
    chu.classList.remove('active')
    context.lineWidth=4;
    usingEraser=false
}
chu.onclick=function(){
    chu.classList.add('active')
    eraser.classList.remove('active')
   xi.classList.remove('active')
   context.lineWidth=10;
   usingEraser=false
}
shanchu.onclick=function(){
context.clearRect(0,0,yyy.width,yyy.height)
}
baocun.onclick=function(){
   var url=yyy.toDataURL("image/png")
   var a =document.createElement('a')
   document.body.appendChild(a)
   a.href=url
   a.download="下载了"
   a.click() 
}
function posChange(obj){
    obj.onmousedown=function(){
        var disX = event.clientX - obj.offsetLeft;
        var disY = event.clientY - obj.offsetTop;
        document.onmousemove=function(event){
            obj.style.left=event.clientX-disX+"px" ;
            obj.style.top=event.clientY-disY+"px" ;
        };
    };
    document.onmouseup=function(){
        document.onmousemove=null;
    };
}
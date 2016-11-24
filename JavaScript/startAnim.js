function startMove(obj,json,fn){ 
	var incur,subduce,speed,flag; clearInterval(obj.timer); 
	obj.timer = setInterval(function(){ 
		flag=true; 
		for(var attr in json){ 
			if(attr==='opacity'){ 
				incur = Math.round(parseFloat(getComputedStyle(obj,null)[attr])*100);
				 }else{ 
				 	incur = parseInt(getComputedStyle(obj,null)[attr]);
				 	 } 
			subduce = json[attr] - incur; 
			speed = subduce>0?Math.ceil(subduce/10):Math.floor(subduce/10); 
			if(attr==='opacity'){ obj.style[attr] = (incur + speed)/100; 
			}else{ obj.style[attr] = incur + speed + "px"; 
		} 
		if(incur!=json[attr]){ 
			flag = false ; 
		} } 
		if(flag===true){
		 clearInterval(obj.timer);
		  if(fn){ fn(); 
		  } 
		}
		   },10); 
}

(function(){
	window.ski_select=function(name){
		var oS=document.getElementsByName(name)[0];
		
		//创建div
		var oDiv=document.createElement('div');
		oDiv.className='ski_select';
		
		oS.parentNode.insertBefore(oDiv,oS);
		oS.style.display='none';
		
		//创建p
		var op=document.createElement('p');
		op.innerHTML=oS.options[oS.selectedIndex].text;
		oDiv.appendChild(op);
		
		//创建ul
		var oUl=document.createElement('ul');
		
		//创建li
		for(var i=0; i<oS.options.length; i++){
			var oLi=document.createElement('li');
			oLi.innerHTML=oS.options[i].text;
			
			(function(index){
				oLi.onclick=function(){
					op.innerHTML=this.innerHTML;
					oUl.style.display='none';
					oS.selectedIndex=index;	
				}
			})(i);
			oUl.appendChild(oLi);
		}
		oDiv.appendChild(oUl);
		
		//点击
		op.onclick=function(ev){
			var oEvent=ev || event;
			oUl.style.display='block';
			oEvent.cancelBubble=true;
		}
		
		//点击
		document.onclick=function(){
			oUl.style.display='none';	
		}
	}
	//引入css
	var oLink=document.createElement('link');
	oLink.href='skiSelect/select.css';
	oLink.rel='stylesheet';
	
	var oHead=document.getElementsByTagName('head')[0];
	oHead.appendChild(oLink);	
})();
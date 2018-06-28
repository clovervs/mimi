window.onload=function(){
	let tou5=document.getElementsByClassName("tou5")[0];
	let tou51=document.getElementsByClassName("tou51")[0];
	tou5.onmouseenter=function(){
		tou51.style.height="98px";
		tou51.style.boxShadow="0px 2px 10px 2px rgba(0,0,0,0.3)";
		tou51.style.zIndex="1";
	}
	tou5.onmouseleave=function(){
		tou51.style.height="0px";
		tou51.style.boxShadow="none";
		tou51.style.zIndex="0";
	}
	let cd=document.getElementsByClassName("cd")[0];
	let lis=cd.getElementsByTagName("li");
	let cdd=document.getElementsByClassName("cdd");
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			for(let j=0;j<lis.length;j++){
				cdd[j].style.display="none";
			}
			   cdd[i].style.display="block";	
			}
		lis[i].onmouseleave=function(){
			cdd[i].style.display="none";
		}
	}
	function xxk(a1){
	let dphs=document.getElementsByClassName("dphs")[a1];
	let a=dphs.getElementsByTagName("span");
	let dphxy=document.getElementsByClassName("dphxy")[a1];
	let b=dphxy.getElementsByTagName("ul");
	a[0].style.display="block";
	a[0].style.borderBottom="2px solid #ff6700";
	
	for(let i=0;i<a.length;i++){
		a[i].onmouseenter=function(){
			for(let j=0;j<a.length;j++){
				b[j].style.display="none";
				a[0].style.borderBottom="0 solid #ff6700";
			}
			b[i].style.display="block";
		}
	}
	}
	xxk(0);
	xxk(1);
	xxk(2);
	xxk(3);
	xxk(4);
	let dh1=document.getElementsByClassName("dh1")[0];
	let aa=dh1.getElementsByTagName("a");
	let dhxl=document.getElementsByClassName("dhxl");
	for(let i=0;i<aa.length;i++){
		aa[i].onmouseenter=function(){
			for(let j=0;j<aa.length;j++){
				dhxl[j].style.height="0px";
				dhxl[j].style.boxShadow="none";
				dhxl[j].style.borderTop="none";
				dhxl[i].style.zIndex="50";
			}
			   dhxl[i].style.height="240px";
			   dhxl[i].style.boxShadow="3px 5px 10px 3px rgba(0,0,0,0.2)";
			   dhxl[i].style.borderTop="1px solid #dedede";
			   dhxl[i].style.zIndex="50";
			}
		aa[i].onmouseleave=function(){
			dhxl[i].style.height="0px";
			dhxl[i].style.boxShadow="none";
			dhxl[i].style.borderTop="none";
			dhxl[i].style.zIndex="0";
		}
	}
	
	
	
	
	
	//轮播图开始
	let lis2=document.querySelectorAll(".imgbox li");
	let bn=document.querySelectorAll(".bn li");
	let banner=document.querySelector(".banner");
	let fxz=document.querySelector(".fxz");
	let fxy=document.querySelector(".fxy");
	let index=0;
	
	let t=setInterval(move,2000);
	
	lis2[0].style.zIndex="10";
	bn[0].className="hot";
	 
	function move(){
		index++;
		if(index==lis2.length){
			index=0;
		}
		lis2.forEach(function(v,i,obj){
			v.style.zIndex="5";
		})
		lis2[index].style.zIndex="10";
		bn.forEach(function(v,i,obj){
			v.className="";
		})
		bn[index].className="hot";
	}
	function movel(){
		index--;
		if(index<0){
			index=lis2.length-1;
		}
		lis2.forEach(function(v,i,obj){
			v.style.zIndex="5";
		})
		
		bn.forEach(function(v,i,obj){
			v.className="";
		})
		lis2[index].style.zIndex="10";
		bn[index].className="hot";
	}
	
	//鼠标移入停止

	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	//点击左右
	fxy.onclick=function(){
		move();
	}
	fxz.onclick=function(){
		movel();
	}
	//点击轮播点击
    for(let i=0;i<lis2.length;i++){
    	bn[i].onclick=function(){
    		lis2.forEach(function(v){
    			v.style.zIndex="5";
    		})
    		bn.forEach(function(v){
    			v.className="";
    		})
    		bn[i].className="hot";
    		lis2[i].style.zIndex="10";
    		index=i;
    	}    	
    }
	
	//下轮播图

	
	
	function xlb(a,b,c,d,e){
	let banner3=document.querySelector(a);
	let yidong1=document.querySelectorAll(b);
	let yuan=document.querySelectorAll(c);
	let nrz6=document.querySelector(d);
	let nry6=document.querySelector(e);
	let banner3width=parseInt(getComputedStyle(banner3,null).width);
	let flag=true;
	let current=0,next=0;
	
	function move1(){
		next++;
		if(next==yidong1.length){
			next=0;
		}
		yidong1[next].style.left=banner3width+"px";
		yuan[current].classList.remove("hot");
		yuan[next].classList.add("hot");
		animate(yidong1[current],{left:-banner3width});
		animate(yidong1[next],{left:0},function(){
			flag=true;
		});
		current=next;
	}
		function movel1(){
		next--;
		if(next<0){
			next=yidong1.length-1;
		}
		yuan[current].classList.remove("hot");
		yuan[next].classList.add("hot");
		yidong1[next].style.left=-banner3width+"px";
		animate(yidong1[current],{left:banner3width});
		animate(yidong1[next],{left:0},function(){
			flag=true;
		});
		current=next;
	}
		//点击
			yuan.forEach(function(v,index,obj){
		    v.onclick=function(){
		    	if(current==index){
		    		return;
		    	}
			yuan[current].classList.remove("hot");
			yuan[index].classList.add("hot");
			if(current<index){
				yidong1[index].style.left=banner3width+"px";
				animate(yidong1[current],{left:-banner3width});
				animate(yidong1[index],{left:0})
			}
			if(current>index){
				yidong1[index].style.left=-banner3width+"px";
				animate(yidong1[current],{left:banner3width});
				animate(yidong1[index],{left:0});
			}
			next=current=index;
		}
	})
			
				nry6.onclick=function(){
					if(!flag){
						return;
					}
					if(next==yidong1.length-1){
						next=yidong1.length-1;
						return;
					}
                     flag=false;
					move1();
				}
				nrz6.onclick=function(){
			        if(!flag){
			        	return;
			        }
			        if(next==0){
			        	next=0;
			        	return;
			        }
			        flag=false;
					movel1();
				}
				
	}
	
	xlb(".banner3",".yidong1",".yuan",".nrz6",".nry6");
	xlb(".banner4",".yidong2",".yuan2",".nrz7",".nry7");
	xlb(".banner5",".yidong3",".yuan3",".nrz8",".nry8");
	xlb(".banner6",".yidong4",".yuan4",".nrz9",".nry9");
	
	//点击侧滑轮播图
	let sjsy1=document.querySelector(".sjsy1");
	let sjsy2=document.querySelector(".sjsy2");
	let sjx=document.querySelector(".sjx");
	let ul=document.querySelector(".sjx ul");
	
	let box=parseInt(getComputedStyle(ul,null).width)/3;
	let times=0;
	sjsy2.onclick=function(){
		times++;
			if(times==3){
				times=2;
			}
		ul.style.transform=`translateX(${-box*times}px)`;
	}
	sjsy1.onclick=function(){
		times--;
			if(times<0){
				times=0;
			}
		ul.style.transform=`translateX(${-box*times}px)`;
	}

	
	
	
	
	
}
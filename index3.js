/*
* @Author: ZX
* @Date:   2018-08-29 14:38:44
* @Last Modified by:   ZX
* @Last Modified time: 2018-09-11 17:44:43
*/
window.onload=function(){

    //侧边选项卡
    //侧边选项卡获取元素
	let lis=document.getElementsByClassName("father");
	let lis1=document.getElementsByClassName("father1");
	let lis2=document.getElementsByClassName("father2");
	let lis3=document.getElementsByClassName("father3");
	let son=document.getElementsByClassName("son");
	let son1=document.getElementsByClassName("son1");
	let son2=document.getElementsByClassName("son2");
	let son3=document.getElementsByClassName("son3");
	
    //顶部选项卡获取元素
	let find=document.getElementsByClassName("find-list");
	// console.log(son);
	let lis4=document.getElementsByClassName("topic-list");


    //选项卡函数
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function () {
	        son[i].style.display="block"; 
	    }
	    lis[i].onmouseout=function (){
	        son[i].style.display="none";
	    }
	}



	for(let i=0;i<lis1.length;i++){
		lis1[i].onmouseover=function () {
	        son1[i].style.display="block"; 
	    }
	    lis1[i].onmouseout=function (){
	        son1[i].style.display="none";
	    }
	}


	for(let i=0;i<lis1.length;i++){
		lis2[i].onmouseover=function () {
	        son2[i].style.display="block"; 
	    }
	    lis2[i].onmouseout=function (){
	        son2[i].style.display="none";
	    }
	}



	for(let i=0;i<lis1.length;i++){
		lis3[i].onmouseover=function () {
	        son3[i].style.display="block"; 
	    }
	    lis3[i].onmouseout=function (){
	        son3[i].style.display="none";
	    }
	}



	for(let i=0;i<find.length;i++){
		find[i].onmouseover=function () {
	       lis4[i].style.display="block"; 
	    }
	    find[i].onmouseout=function (){
	        lis4[i].style.display="none";
	    }
	}
	


	// 2.透明度轮播图
    let imgs=document.querySelectorAll(".images");
    let dots=document.querySelectorAll(".dotBox");
    let banner=document.querySelectorAll(".banner")[0];
    let leftBtn=document.querySelectorAll(".leftBtn")[0];
    let rightBtn=document.querySelectorAll(".rightBtn")[0];
    // console.log(imgs,dots,banner);
    //定义初始值
    imgs[0].style.opacity=1;
    dots[0].classList.add("active");
    let num=0;

    // 移入轮播点
    for(let i=0;i<dots.length;i++){
        dots[i].onclick=function () {
            for(let j=0;j<dots.length;j++){
                imgs[j].style.opacity=0;
                dots[j].classList.remove("active");
            }
            imgs[i].style.opacity=1;
            dots[i].classList.add("active");
            num=i;
        }
    }
    //自动轮播
    let t;
    // let t=setInterval(move,2000);
    function move() {
        num++;
        if(num==5){
            num=0;
        }
        for(let j=0;j<dots.length;j++){
            dots[j].classList.remove("active");
            imgs[j].style.opacity=0;
        }
        imgs[num].style.opacity=1;
        dots[num].classList.add("active");
    }
    //左箭头
    function moveL() {
        num--;
        if(num<0){
            num=4;
        }
        for(let j=0;j<dots.length;j++){
            dots[j].classList.remove("active");
            imgs[j].style.opacity=0;
        }
        imgs[num].style.opacity=1;
        dots[num].classList.add("active");
    }
    leftBtn.onclick=function (){
    	moveL();
    }
    rightBtn.onclick=function (){
    	move();
    }
    banner.onmouseover=function () {
        clearInterval(t);
    }
    banner.onmouseout=function () {
        t=setInterval(move,2000);
    }



    //内容轮播调用     获取元素
	let lunbo1=document.querySelectorAll(".lunbo1");
    let point1=document.querySelectorAll(".touch1");
    let leftbtn1=document.querySelectorAll(".leftbtn1")[0];
    let rightbtn1=document.querySelectorAll(".rightbtn1")[0];
    let widths1=parseInt(getComputedStyle(lunbo1[0],null).width);
    // console.log(lunbo1,point1,leftbtn1,rightbtn1,widths1);

    
    contentBn(lunbo1,point1,leftbtn1,rightbtn1,widths1,"active1");
  

    let lunbo2=document.querySelectorAll(".lunbo2");
    let point2=document.querySelectorAll(".touch2");
    let leftbtn2=document.querySelectorAll(".leftbtn2")[0];
    let rightbtn2=document.querySelectorAll(".rightbtn2")[0];
    let widths2=parseInt(getComputedStyle(lunbo2[0],null).width);
    // console.log(lunbo2,point2,leftbtn2,rightbtn2,widths2);

    
    contentBn(lunbo2,point2,leftbtn2,rightbtn2,widths2,"active1");


    let lunbo3=document.querySelectorAll(".lunbo3");
    let point3=document.querySelectorAll(".touch3");
    let leftbtn3=document.querySelectorAll(".leftbtn3")[0];
    let rightbtn3=document.querySelectorAll(".rightbtn3")[0];
    let widths3=parseInt(getComputedStyle(lunbo3[0],null).width);
    // console.log(lunbo3,point3,leftbtn3,rightbtn3,widths3);

    
    contentBn(lunbo3,point3,leftbtn3,rightbtn3,widths3,"active1");



    let lunbo4=document.querySelectorAll(".lunbo4");
    let point4=document.querySelectorAll(".touch4");
    let leftbtn4=document.querySelectorAll(".leftbtn4")[0];
    let rightbtn4=document.querySelectorAll(".rightbtn4")[0];
    let widths4=parseInt(getComputedStyle(lunbo4[0],null).width);
    // console.log(lunbo4,point4,leftbtn4,rightbtn4,widths4);

    
    contentBn(lunbo4,point4,leftbtn4,rightbtn4,widths4,"active1");





    //小米闪购
    let button=document.querySelectorAll(".button");
    let miList=document.querySelector(".miList");
    let w=parseInt(getComputedStyle(miList,null).width)/2;
    


    trans_box(button,miList,w,2,1,"hot3");



    let button1=document.querySelectorAll(".button1");
    let reList=document.querySelector(".reList");
    let wi=parseInt(getComputedStyle(reList,null).width)/3;


    trans_box(button1,reList,wi,3,2,"hot4")








    let barshop=document.querySelector(".barshop");
    let side=document.querySelector(".side");
    // console.log(barshop,side);

    barshop.onmouseenter=function(){
        side.style.height=100+"px";
    }
    barshop.onmouseleave=function(){
        side.style.height=0;
    }



//家电板块选项卡
    let hotBox=document.querySelectorAll(".hotBox");
    let rightBox=document.querySelectorAll(".rightBox");
    // console.log(elect,elecc);
    
    rightBox[0].style.display="block";
    hotBox[0].classList.add("change");
    hotBox.forEach(function(value,index){
        value.onmouseenter=function(){
            rightBox.forEach(function(element,i){
                hotBox[i].classList.remove("change");
                element.style.display="none";
            })
            value.classList.add("change");
            rightBox[index].style.display="block";
        }
    })



    let back=document.querySelector(".return4");
    // console.log(back);
    window.onscroll=function (){
        let h=document.body.scrollTop||document.documentElement.scrollTop;
        if(h>=800){
            back.style.display="block";
        }else{
            back.style.display="none";
        }
    } 

    
    back.onclick=function () {
        animate(document.body,{scrollTop:0},600);
        animate(document.documentElement,{scrollTop:0},600);
    }



    let leftReturn=document.querySelector(".leftReturn");
    let return4=document.querySelector(".return4");
    return4.onmouseover=function () {
        leftReturn.style.display="block";
    }
    return4.onmouseout=function () {
        leftReturn.style.display="none";
    }

    let leftReturn1=document.querySelector(".leftReturn1");
    let return3=document.querySelector(".return3");
    // console.log(leftReturn1,return3)
    return3.onmouseover=function () {
        leftReturn1.style.display="block";
    }
    return3.onmouseout=function () {
        leftReturn1.style.display="none";
    }


    let leftReturn2=document.querySelector(".leftReturn2");
    let return2=document.querySelector(".return2");
    console.log(leftReturn2,return2)

    return2.onmouseover=function () {
        leftReturn2.style.display="block";
    }
    return2.onmouseout=function () {
        leftReturn2.style.display="none";
    }

    let leftReturn3=document.querySelector(".leftReturn3");
    let return1=document.querySelector(".return1");
    return1.onmouseover=function () {
        leftReturn3.style.display="block";
    }
    return1.onmouseout=function () {
        leftReturn3.style.display="none";
    }
    


    let span=document.querySelectorAll(".spans");

    setDate();
    setInterval(setDate,1000);
    function setDate(){
        let arr=fn();
        span.forEach((v,index)=>{
            v.innerHTML=arr[index];
        })
    }

    function fn(){
        let now=new Date();
        let future=new Date(2018,9,1);
        let time=Math.floor((future.getTime()-now.getTime())/1000);
        // console.log(time);
        let arr=[];
        //小时
        let hour=Math.floor(time%(30*24*60*60)%(24*60*60)/(60*60));
        if (Math.floor(hour/ 10) == 0) {
            arr.push('0' + hour);
        } else {
            arr.push(hour);
        }
        
        // console.log(hour);
        //分钟
        let min=Math.floor(time%(30*24*60*60)%(24*60*60)%(60*60)/60);
         if (Math.floor(min/ 10) == 0) {
            arr.push('0' + min);
        } else {
            arr.push(min);
        }
        // console.log(min);
        //秒
        let s=Math.floor(time%(30*24*60*60)%(24*60*60)%(60*60)%60);
         if (Math.floor(s/ 10) == 0) {
            arr.push('0' + s);
        } else {
            arr.push(s);
        }
        // console.log(s);

        return arr;

    }


}











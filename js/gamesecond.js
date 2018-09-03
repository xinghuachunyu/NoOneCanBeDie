/*
* @Author: name
* @Date:   2018-07-16 15:01:59
* @Last Modified by:   name
* @Last Modified time: 2018-07-16 16:17:17
*/

window.onload=function(){
    function $(a)
    {
        return document.getElementById(a);
    }
    //产生随机高度的柱子
    function randomNum(mix,min)
    {
        var ran=Math.round(Math.random()*(mix-min)+min)
        return ran;
    }
    //产生柱子

    function rock()
    {
        var count=0
        var speed=0
        var vi=0
        var img1=document.createElement("img");
        $("first").appendChild(img1);
//      var block=document.createElement("div");
        img1.src="img/skybox.png"
        img1.style.left=$("box").offsetWidth-20+"px"
        img1.style.bottom="0px"
        img1.style.width=randomNum(15,5)+"px"
        img1.style.height=randomNum(40,8)+"px"
//      block.style.width=img1.style.width;
//      block.style.height=img1.style.height;
        var img2=document.createElement("img");
        $("second").appendChild(img2);
        img2.src="img/skybox.png";
        img2.style.left=$("box").offsetWidth-20+"px"
        img2.style.bottom="0px"
        img2.style.width=randomNum(15,5)+"px"
        img2.style.height=randomNum(40,8)+"px"

        var img3=document.createElement("img");
        $("third").appendChild(img3);
        img3.src="img/skybox.png";
        img3.style.left=$("box").offsetWidth-20+"px"
        img3.style.bottom="0px"
        img3.style.width=randomNum(15,5)+"px"
        img3.style.height=randomNum(40,8)+"px"

        img1.timer = setInterval(function(){
            img1.style.left=$("box").offsetWidth-20+count+"px"
            count-=20;
            if(pillarBounce($("people1"),img1)){
                alert("gameover");
                window.open("index.html")
                clearTimer();
            }
            if(img1.offsetLeft<=0)
            {
                count=0;
                img1.remove();
                clearInterval(img1.timer);
            }

        },500)
        img2.timer=setInterval(function(){
            speed-=30;
            img2.style.left=$("box").offsetWidth-20+speed+"px"
            if(pillarBounce($("people2"),img2)){
                alert("gameover");
                window.open("index.html")
                clearTimer();
            }
            if(img2.offsetLeft<=0)
            {
                speed=0;
                img2.remove();
                clearInterval(img2.timer);
            }
        },500)

         img3.timer=setInterval(function(){
            vi-=40;
            img3.style.left=$("box").offsetWidth-20+vi+"px"
            if(pillarBounce($("people2"),img3)){
                alert("gameover");
                window.open("index.html")
                clearTimer();
            }
            if(img3.offsetLeft<=0)
            {
               vi=0;
                img3.remove();
                clearInterval(img3.timer);
            }
        },500)
    }
    //柱子的移动事件
    var timer=setInterval(function(){
        rock();
    },4500)

    var hight=1;
    var speed=8;
    function clickdemo(tag)
    {

         var timer=setInterval(function(){
        hight+=speed;
        tag.style.bottom=hight+"px"
        tag.style.src="url(img/jump.jpg)"
        if(hight>=80)
        {
            speed=-8;
        }
        if(hight<=5)
        {
            tag.style.src="url(img/run2.jpg)"
            hight=1;
            speed=8;
            clearInterval(timer)
        }
        },130)
    }
    var list=$("box").children;
    console.log(list)
    list[0].onclick=function(){
        clickdemo($("people1"));
      }
    list[1].onclick=function(){
       //   console.log(listChild.parentElement)
        clickdemo($("people2"));
       }
    list[2].onclick=function(){
       //   console.log(listChild.parentElement)
        clickdemo($("people3"));
       }
    //柱子的碰撞事件
    function pillarBounce(moveDiv,fixedDiv)
    {
        //获取moveDiv的宽高
      var moveW = moveDiv.offsetWidth;
      var moveH = moveDiv.offsetHeight;
      //获取moveDiv的位置
      var moveL = moveDiv.offsetLeft;
      var moveT = moveDiv.offsetTop;
      //获取fixedDiv的宽高、位置
      var fixedW = fixedDiv.offsetWidth;
      var fixedH = fixedDiv.offsetHeight;
      var fixedL = fixedDiv.offsetLeft;
      var fixedT = fixedDiv.offsetTop;

      var leftType = moveL + moveW >= fixedL;
      var rightType = fixedL + fixedW >= moveL;
      var topType = moveT + moveH >= fixedT;
      var bottomType = fixedT + fixedH >= moveT;

      return leftType && rightType && topType && bottomType;

    }
    //清除所有计时器
     function clearTimer(){
      var timer = setTimeout(function(){
        for(var i=0;i<timer;i++){
          clearInterval(i);
        }
      },0)
      }
}

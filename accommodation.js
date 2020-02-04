
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");
var info4 = document.getElementById("info4");

info1.style.display="block";
info2.style.display="none";
info3.style.display="none";
info4.style.display="none";


btn1.style.fontWeight="bold";

var op = 0 ;
info1.style.opacity = 0;
var marginLeft=0;
var timer = setInterval(function(){
if (marginLeft>=60){
    clearInterval(timer);
}

info1.style.opacity=op;
op=op+0.008;
info1.style.marginLeft= marginLeft +"px ";
marginLeft=marginLeft + 0.5;
},5);
  btn1.onclick= function() {
  info1.style.display="block";

  var op = 0 ;
  info1.style.opacity = 0;
var marginLeft=0;
var timer = setInterval(function(){
  if (marginLeft>=60){
      clearInterval(timer);
  }

  info1.style.opacity=op;
  op=op+0.008;
  info1.style.marginLeft= marginLeft +"px ";
  marginLeft=marginLeft + 0.5;
},5);



  info2.style.display="none";
  info3.style.display="none";
  info4.style.display="none";
  btn1.style.fontWeight="bold";
  btn2.style.fontWeight="normal";
  btn3.style.fontWeight="normal";
  btn4.style.fontWeight="normal";
  }


  btn2.onclick= function() {
    info1.style.display="none";
    info2.style.display="block";
    

    var op = 0 ;
    var marginLeft=0;
    info2.style.opacity = 0;
    var timer = setInterval(function(){
      if (marginLeft>=60){
          clearInterval(timer);
      }
      info2.style.opacity=op;
      op=op+0.008;
      info2.style.marginLeft= marginLeft +"px ";
      marginLeft=marginLeft + 0.5;
    },5);


    info3.style.display="none";
    info4.style.display="none";
    btn2.style.fontWeight="bold";
  btn1.style.fontWeight="normal";
  btn3.style.fontWeight="normal";
  btn4.style.fontWeight="normal";
   
    }

    btn3.onclick= function() {
        info1.style.display="none";
        info2.style.display="none";
        info3.style.display="block";
        info4.style.display="none";
        btn3.style.fontWeight="bold";
  btn1.style.fontWeight="normal";
  btn2.style.fontWeight="normal";
  btn4.style.fontWeight="normal"; 
        
        }
        btn4.onclick= function() {
            info1.style.display="none";
            info2.style.display="none";
            info3.style.display="none";
            info4.style.display="block";
            btn4.style.fontWeight="bold";
  btn1.style.fontWeight="normal";
  btn3.style.fontWeight="normal";
  btn2.style.fontWeight="normal";
            }
                  
      




var modal1 = document.getElementById("night1pop");
var modal2 = document.getElementById("night2pop");
var modal3 = document.getElementById("night3pop");
var modal4 = document.getElementById("night4pop");

var bt1 = document.getElementById("bulletOne");
var bt2 = document.getElementById("bulletTwo");
var bt3 = document.getElementById("bulletThree");
var bt4 = document.getElementById("bulletFour");

var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];
var span3 = document.getElementsByClassName("close")[3];

bt1.onclick = function() {
 
  // modal2.style.display = "none";
  // modal3.style.display = "none";
  
  var op = 0.1;
    modal1.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        modal1.style.opacity = op;
        
        op =op+0.1;
    }, 30);
  
  }

bt2.onclick = function() {
    // modal1.style.display = "none";
    // modal3.style.display = "none";
    var op = 0.1;  
    modal2.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        modal2.style.opacity = op;
        
        op =op+0.1;
    }, 30);
  }

  bt3.onclick = function() {
    // modal1.style.display = "none";
    // modal2.style.display = "none";
    var op = 0.1;  
    modal3.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        modal3.style.opacity = op;
        
        op =op+0.1;
    }, 30);
  }

  bt4.onclick = function() {
    // modal1.style.display = "none";
    // modal2.style.display = "none";
    var op = 0.1;  
    modal4.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        modal4.style.opacity = op;
        
        op =op+0.1;
    }, 30);
  }



span.onclick = function() {
  
  var op = 1;  
    var timer = setInterval(function () {
        if (op <= 0){
            clearInterval(timer);
            modal1.style.display = "none";
        }
        modal1.style.opacity = op;
        op =op-0.1;
        
    }, 10);
    
    
}

span1.onclick = function() {
    
  var op = 1;  
  var timer = setInterval(function () {
      if (op <= 0){
          clearInterval(timer);
          modal2.style.display = "none";
      }
      modal2.style.opacity = op;
      op =op-0.1;
      
  }, 10);

  }


span2.onclick = function() {

  var op = 1;  
  var timer = setInterval(function () {
      if (op <= 0){
          clearInterval(timer);
          modal3.style.display = "none";
      }
      modal3.style.opacity = op;
      op =op-0.1;
      
  }, 10);
  }
 
  
span3.onclick = function() {

  var op = 1;  
  var timer = setInterval(function () {
      if (op <= 0){
          clearInterval(timer);
          modal4.style.display = "none";
      }
      modal4.style.opacity = op;
      op =op-0.1;
      
  }, 10);
  }

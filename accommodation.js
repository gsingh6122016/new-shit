
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

  btn1.onclick= function() {
  info1.style.display="block";
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
                  


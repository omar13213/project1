var pro = document.getElementById("prducts")
var menu = document.getElementById("menu")

pro.onmouseover = function(){
    menu.classList.add("show") 
}
pro.onmouseout = function(){
    setTimeout(function(){
         menu.classList.remove("show") 
    },200)

 }

 window.onscroll = function(){
     console.log(this.scrollX)
 }
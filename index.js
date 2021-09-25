//global variables
var i;
var closeMenu = document.getElementsByClassName("nav-links");

// scroll indicator function 
window.onscroll = function (){

    let widthNav = document.querySelector(".header");
    let navBg = document.querySelector("nav");
    let logo = document.querySelector(".logo");
    let menu = document.getElementsByClassName("menu");
    let navLinkBorder = document.querySelector(".nav-links");
    let topIcon = document.querySelector("#topIcon");
// onscroll make navigation fixed

    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
      for(i = 0; i<menu.length; i++){
        menu[i].style.background ="#25265e";
    }  
    //   logo.style.border= "4px solid #251a64";
      widthNav.style.position = "fixed";
      widthNav.style.width = 100 +"%";
      topIcon.style.display = "block"
      navBg.style.background = "white";
      navBg.style.color = "#25265e";
      navBg.style.boxShadow = "1px 1px 1px rgba(0, 0, 0, 0.129)";
      

    }else{
        widthNav.style.position = "initial";
        widthNav.style.width = 100 +"%";
        navBg.style.background = "initial";
        navBg.style.color = "#fff";
        navBg.style.boxShadow ="none";

        topIcon.style.display = "none"

        for(i = 0; i<menu.length; i++){
         menu[i].style.background ="white";
        } 

        // logo.style.border= "none";
        
    }
    var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolledHeight = (windowScroll / height) * 100;
    document.querySelector(".progress-bar").style.width = scrolledHeight + "%";

}
    // scroll indicator END 
// when you click on nav-links on a small device;
for(i = 0; i<closeMenu.length; i++){
    closeMenu[i].addEventListener('click', function(){
        document.querySelector("#closeandopenmenu").click();
    });
}

//  END

//----------show active tab
function activeLink(evt){
    for(i = 0; i<closeMenu.length; i++){
        closeMenu[i].className = closeMenu[i].className.replace(" activenav", "");
       } 
       evt.currentTarget.className += " activenav";
}

let next = document.querySelector(".next").addEventListener('click', 
function () {
    document.getElementById("next").click();    
});


var date  =  new  Date();
document.querySelector("#currentyear").innerHTML = date.getFullYear();
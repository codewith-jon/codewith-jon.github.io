//popup begin



function c() {
    document.getElementById("jon").style.display = ("none")
    document.getElementById("b").style.filter = ("blur(0px")
    
}


function go() {
    window.location.assign("https://www.youtube.com/channel/UC0QUwLQsox1UIoSgobSv6kQ")
    document.getElementById("jon").style.display = ("none")
    document.getElementById("b").style.filter = ("blur(0px")

}
function popupbackground() {
    document.getElementById("jon").style.background = ("linear-gradient(rgb(119, 9, 134),rgb(4, 126, 126))")
}
function popupbackgroundout() {
    document.getElementById("jon").style.background = ("linear-gradient(rgb(134, 9, 96),rgb(191, 7, 55))")

}
//popup end


//onscroll begins
var mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//onscroll  end

//date begins
var d = new Date();
document.getElementById("year").innerHTML = d.getFullYear(); 
//year found

var d = new Date();
document.getElementById("found").innerHTML = "2021  - ";

if (d.getFullYear()==2021){
    document.getElementById("found").style.display = "none";
}
else{
    document.getElementById("found").style.display = "inline-block";

}
//date end
//opennav & close begin 
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
//opennav & close end

/*show active link in the nav bar*/
var codewjActive = document.getElementById("codewj-active");
var codeWJ = codewjActive.getElementsByClassName("codewj");
for (i = 0; i < codeWJ.length; i++) {
    codeWJ[i].addEventListener("click", function () {
        var
            current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    });
}
     /*end show active link in the nav bar*/






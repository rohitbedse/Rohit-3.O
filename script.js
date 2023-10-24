var typingEffect = new Typed(".t-1", {
    strings: ["College Of Enginearing,Dhule", "Rare people are alone here !", "Nobody Cares Here !", "Many types of lol here !"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    startDelay: 1000,
    backDelay: 1500
})

var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu(){
    navLinks.style.right = "-200px";
}
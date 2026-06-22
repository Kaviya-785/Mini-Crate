var sidenav = document.querySelector(".side-navbar")

function showNav(){
    sidenav.style.left ="0"
}

function closeNav(){
    sidenav.style.left="-60%"
}


const pics = [
  "images/Min1.png",
  "images/Min2.png",
  "images/Min3.png",
  "images/Min4.png",
  "images/Min5.png",
  "images/Min6.png",
];

let randomPic = pics[Math.floor(Math.random() * pics.length)];

document.getElementById("photo").src = randomPic;


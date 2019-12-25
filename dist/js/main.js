// select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
const first = document.querySelector('.first');
const arrBtn = document.querySelector('.arr-btn');
let third = document.querySelector('#third');


// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    // set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // set Menu State
    showMenu = false;
  }
}

// DOM Elements
const time = document.getElementById("time");
// const greet = document.getElementById("greet");
// const image = document.getElementById("image");

// show the time
function showTime() {
  // get the time
  let tdy = new Date();
  let hrs = tdy.getHours();
  let min = tdy.getMinutes();
  let sec = tdy.getSeconds();

  // display AM or PM
  const amPm = hrs > 12 ? "PM" : "AM";

  // set 12 hr format
  hrs = hrs % 12 || 12;

  // add Zero in min and sec
  function addZero(e) {
    return (parseInt(e, 10) < 10 ? "0" : "") + e;
  }
  time.innerHTML = `${hrs}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}<span> </span>${amPm}`;
  setTimeout(showTime, 1000);
}

showTime();

// arrow button
// let showDetails = false;

// arrBtn.addEventListener("click", toggleArrow);

// function toggleArrow() {
  
//   let x = document.getElementById('third');
  
//   if (!showDetails) {
//     first.classList.add("down");
//     if (x.style.visibility = 'hidden') {
//       x.style.visibility = 'visible';
//     } 
//     showDetails = true;

//   } else {
//     first.classList.remove("down");
//     x.style.visibility = 'hidden';
    
//     setTimeout(function () {
//       x.classList.remove('appear');
//     }, 20);
//     showDetails = false;
//   }
// }



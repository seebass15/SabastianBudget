const button =
document.querySelector(
".menu-button"
);

const menu =
document.querySelector(
".side-menu"
);

button.addEventListener(

"click",

()=>{

menu.classList.toggle(
"open"
);

}

);

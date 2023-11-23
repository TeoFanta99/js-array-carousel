// selezione degli elementi nel DOM
const btnUp = document.querySelector(".fa-chevron-up");
const btnDown = document.querySelector(".fa-chevron-down");
const items = document.getElementsByClassName("item");
console.log(items[0]);



let activeItem = 0;


// click al bottone down
btnDown.addEventListener("click",

    function() {

        if (activeItem < items.length - 1) {

            items[activeItem].classList.remove("active");

            activeItem++;

            items[activeItem].classList.add("active");
        }

        if (activeItem === items.length -1) {

            items[activeItem].classList.remove("active");

            activeItem = 0;

            items[activeItem].classList.add("active");

        }
    }
);


// click al bottone up
btnUp.addEventListener("click",

    function() {

        if (activeItem > 0) {

            items[activeItem].classList.remove("active");

            activeItem--;

            items[activeItem].classList.add("active");

        } 
        
        if (activeItem = 0) {

            items[activeItem].classList.remove("active");

            activeItem = 4;

            items[activeItem].classList.add("active");
        }

    }
);

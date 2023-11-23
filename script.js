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

            if (activeItem === items.length - 1) {
                btnDown.classList.add("hidden");
            }
        }
    }
);


// click al bottone up
btnUp.addEventListener("click",

    function() {

        if (activeItem < items.length - 1 ) {

            items[activeItem].classList.remove("active");

            activeItem--;

            items[activeItem].classList.add("active");

            if (activeItem === items.length - 1) {
                btnUp.classList.add("hidden");
            }
        }
    }
);

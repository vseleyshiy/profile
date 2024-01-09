// let headerBurger = document.getElementById("headerBurger");
let headerNav = document.getElementById("headerNav");

let headerNavOpen = () => {
    if (headerNav.style.display === "block") {
        headerNav.style.animation = "headerNavClose linear 1s 1";
        setTimeout(() => {
            headerNav.style.display = "none";
        }, 900);
    } else {
        headerNav.style.display = "block";
        headerNav.style.animation = "headerNavOpen linear 1s 1";
    }
}
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
    navToggle.classList.toggle("close");
    // if( links.classList.contains("show-links")){
    //     links.classList.remove("show-links");
    //     navToggle.classList.remove("close");
    // }else{
    //     links.classList.add("show-links");
    //     navToggle.classList.add("close");
    // }
});
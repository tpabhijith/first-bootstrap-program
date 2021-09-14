window.addEventListener("load", ()=> {
    let hamburger = document.querySelector("header .wrapper div.row div.hamburger");
    let navbarNav = document.querySelector("header .wrapper div.row .navbar-nav");
    console.log(hamburger);
    console.log(navbarNav);
    let overlay = document.querySelector(".overlay");
    hamburger.addEventListener("click", (e)=> {
        e.preventDefault();
        navbarNav.classList.toggle("active");
        document.querySelector("header").classList.toggle("active");
        document.querySelector(".carousel-caption").classList.toggle("active");
        overlay.classList.toggle("active");
        
    });
   
    overlay.addEventListener("click", (e)=>{
        e.preventDefault();
        overlay.classList.toggle("active");
        navbarNav.classList.toggle("active");
        document.querySelector("header").classList.toggle("active");
        document.querySelector(".carousel-caption").classList.toggle("active");
    })
}) 
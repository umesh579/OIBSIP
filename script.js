

// ------------------ Slider ---------------

var swiper = new Swiper(".for_you-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});




const navBar = document.getElementById("navBar");
const navHeadingA = [...document.getElementsByClassName("navA")];
const hamMenu = document.getElementById("hamMenu");
const close_hamMenu=document.getElementById("close-hamMenu");
const navContentDiv = document.getElementById("navContentDiv");
const form=document.getElementById('my-form');

window.addEventListener("scroll", () => {
  
  const scrollVal = window.scrollY
  
  if (scrollVal <= 85) {
    navBar.style.backgroundColor = "#1f1e28";
    hamMenu.style.color = "#fff";
    close_hamMenu.style.color="#fff";
    navContentDiv.style.backgroundColor = "#1f1e28";
    navHeadingA.forEach((e) => {
      e.style.color = "#fff";
    })
    
  } else {
    navBar.style.backgroundColor = "#ffff";
    navContentDiv.style.backgroundColor = "#ffff";
    hamMenu.style.color = "#2493df"
    close_hamMenu.style.color="#2493df";
    navHeadingA.forEach((e) => {
      e.style.color = "#2493df";
    })

  }

})



hamMenu.addEventListener("click", () => {
  hamMenu.style.display="none";
  close_hamMenu.style.display="block"
  navContentDiv.classList.add('active');
})

close_hamMenu.addEventListener("click", () => {
  hamMenu.style.display="block";
  close_hamMenu.style.display="none"
  navContentDiv.classList.remove('active');
})

form.addEventListener('submit',()=>{
  window.reload();
})
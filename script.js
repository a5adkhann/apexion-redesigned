// console.log("Apexion")

 window.addEventListener("scroll", () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const progress = (scrollTop / docHeight) * 100;
    document.getElementById("scroll-progress").style.width = progress + "%";
  });

  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const html = document.documentElement;

  // dark/light theme
  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
    themeIcon.classList.remove("ri-moon-line");
    themeIcon.classList.add("ri-sun-line");
  }

  themeToggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    if (html.classList.contains("dark")) {
      themeIcon.classList.remove("ri-moon-line");
      themeIcon.classList.add("ri-sun-line");
      localStorage.setItem("theme", "dark");
    } else {
      themeIcon.classList.remove("ri-sun-line");
      themeIcon.classList.add("ri-moon-line");
      localStorage.setItem("theme", "light");
    }
  });

// SideBar toogle show
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click",()=>{
  sidebar.classList.remove("-translate-x-full")
  overlay.classList.remove("hidden")
})
closeBtn.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden")
})

overlay.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden")
})


// vide slider
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.add("hidden");
    if (i === index) {
      slide.classList.remove("hidden");
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", prevSlide);

setInterval(nextSlide, 5000);
showSlide(currentIndex);

// word rotate
const words = ["Possibiliti", "Impact", "Innovation"];
  let i = 0;
  const rotatingEl = document.getElementById("rotatingWord");

  setInterval(() => {
    i = (i + 1) % words.length;
    
    rotatingEl.style.opacity = 0;
    setTimeout(() => {
      rotatingEl.textContent = words[i];
    
      rotatingEl.style.opacity = 1;
    }, 300);
  }, 2500);





// swiper 2nd slider 
  var swiper = new Swiper(".logoSwiper", {
    slidesPerView: 5,       
    spaceBetween: 30,       
    loop: true,             
    autoplay: {
      delay: 0,            
      disableOnInteraction: false,
    },
    speed: 3000,           
    breakpoints: {
      320: { slidesPerView: 2 },
      640: { slidesPerView: 3 },
      1024: { slidesPerView: 5 }
    }
  });
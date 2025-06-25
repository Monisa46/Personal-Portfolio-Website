// === Scroll to Sections Smoothly ===
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      document.querySelector(hash).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// === Scroll-To-Top Button ===
const scrollTopBtn = document.createElement("button");
scrollTopBtn.innerText = "↑";
scrollTopBtn.id = "scrollTopBtn";
scrollTopBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 20px;
  background-color: #0d6efd;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  display: none;
  z-index: 9999;
`;
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// === Highlight Active Nav Link on Scroll ===
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// === Resume Download Alert ===
const resumeBtn = document.querySelector('a[download]');
if (resumeBtn) {
  resumeBtn.addEventListener("click", () => {
    alert("Your resume is downloading...");
  });
}

// === Contact Form Validation ===
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email.");
    return;
  }

  alert("Message sent! Thank you for contacting me.");
  form.reset();
});

// === Add Dark Mode Toggle ===
const darkModeToggle = document.createElement("button");
darkModeToggle.innerText = "🌙";
darkModeToggle.id = "darkModeToggle";
darkModeToggle.title = "Toggle Dark Mode";
darkModeToggle.style.cssText = `
  position: fixed;
  bottom: 80px;
  right: 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 18px;
  z-index: 9999;
`;
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  darkModeToggle.innerText = isDark ? "☀️" : "🌙";
});

// === Apply Dark Theme Styling Dynamically ===
const style = document.createElement("style");
style.innerHTML = `
  .dark-theme {
    background-color: #121212;
    color: white;
  }

  .dark-theme header,
  .dark-theme footer {
    background-color: #000 !important;
  }

  .dark-theme .navbar {
    background-color: #222 !important;
  }

  .dark-theme input,
  .dark-theme textarea {
    background-color: #2c2c2c;
    color: white;
    border-color: #555;
  }

  .dark-theme .btn-primary {
    background-color: #0d6efd;
    color: white;
  }

  .dark-theme .card {
    background-color: #1f1f1f;
    color: white;
  }
`;
document.head.appendChild(style);

// === Simple Fade-in Animation on Scroll ===
const faders = document.querySelectorAll("section");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(section => {
  appearOnScroll.observe(section);
});

// === Add .appear Class Dynamically ===
const animationStyle = document.createElement("style");
animationStyle.innerHTML = `
  .appear {
    animation: fadeUp 0.8s ease-out forwards;
  }

  @keyframes fadeUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
document.head.appendChild(animationStyle);

// === Welcome Message on Load ===
window.addEventListener("load", () => {
  console.log("Welcome to Monisa's Portfolio!");
});

// === Escape Key to Scroll Top ===
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

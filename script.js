// Loading Screen
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hide");
  }, 1000);
});

// Navbar Scroll Effect
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking nav links
document.querySelectorAll(".nav-item").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Portfolio Filter
const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    portfolioCards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block";
        card.style.animation = "fadeIn 0.5s";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Testimonials Slider
const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui nobis molestias velit iste, temporibus similique distinctio.",
    author: "Dianne Russell",
    company: "Starbucks",
    image: "images/avatar-image-1.png",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui nobis molestias velit iste, temporibus similique distinctio.",
    author: "Kristin Watson",
    company: "Louis Vuitton",
    image: "images/avatar-image-2.png",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui nobis molestias velit iste, temporibus similique distinctio.",
    author: "Kathryn Murphy",
    company: "McDonald's",
    image: "images/avatar-image-3.png",
  },
];

let currentTestimonial = 0;
const testimonialCard = document.querySelector(".testimonial-card");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");

function updateTestimonial() {
  const testimonial = testimonials[currentTestimonial];
  if (testimonialCard) {
    testimonialCard.querySelector(
      ".testimonial-text"
    ).textContent = `"${testimonial.text}"`;
    testimonialCard.querySelector(".testimonial-author h4").textContent =
      testimonial.author;
    testimonialCard.querySelector(".testimonial-author p").textContent =
      testimonial.company;
    testimonialCard.querySelector(".testimonial-author img").src =
      testimonial.image;
  }
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    currentTestimonial =
      (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
  });

  nextBtn.addEventListener("click", () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
  });
}

// Auto-slide testimonials
setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  updateTestimonial();
}, 5000);

// Back to Top Button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Form Submission
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert("Thank you for your message! I will get back to you soon.");
    contactForm.reset();
  });
}

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "all 0.6s ease-out";
  observer.observe(section);
});

// Add CSS animation
const style = document.createElement("style");
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Progress Bar Animation on Scroll
const progressBars = document.querySelectorAll(".progress-fill");
const progressObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const width = entry.target.style.width;
        entry.target.style.width = "0";
        setTimeout(() => {
          entry.target.style.width = width;
        }, 100);
      }
    });
  },
  { threshold: 0.5 }
);

progressBars.forEach((bar) => {
  progressObserver.observe(bar);
});

// Typing Effect for Hero Title (Optional)
const heroTitle = document.querySelector(".hero-title");
if (heroTitle) {
  const text = heroTitle.innerHTML;
  heroTitle.innerHTML = "";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      heroTitle.innerHTML = text.slice(0, index + 1);
      index++;
      setTimeout(typeWriter, 50);
    }
  }

  // Start typing after page loads
  setTimeout(typeWriter, 1500);
}

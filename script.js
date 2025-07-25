/** @format */

// Portfolio JavaScript for Interactivity and Animations
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all functionality
  initScrollAnimations();
  initNavigation();
  initSkillBars();
  initContactForm();
  initTypingEffect();
  initSmoothScrolling();
});

// Scroll-triggered animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");

        // Trigger skill bar animations when skills section is visible
        if (entry.target.id === "skills") {
          animateSkillBars();
        }
      }
    });
  }, observerOptions);

  // Observe all sections
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.add("animate-on-scroll");
    observer.observe(section);
  });

  // Observe individual elements
  const animateElements = document.querySelectorAll(
    ".experience-card, .skill-item, .contact-item, .tech-icon, .project-card"
  );
  animateElements.forEach((element) => {
    element.classList.add("animate-on-scroll");
    observer.observe(element);
  });
}

// Navigation functionality
function initNavigation() {
  const navbar = document.getElementById("mainNav");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!navbar) return;

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Update active navigation link
    updateActiveNavLink();
  });

  // Add click handlers to nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }

      // Close mobile menu if open
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
    });
  });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// Skill bars animation
function initSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress");
  skillBars.forEach((bar) => {
    bar.style.width = "0%";
  });
}

function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress");
  skillBars.forEach((bar, index) => {
    const targetWidth = bar.getAttribute("data-width");
    setTimeout(() => {
      bar.style.width = targetWidth + "%";
    }, index * 200);
  });
}

// Contact form functionality
function initContactForm() {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Validate form
      if (validateForm(form)) {
        submitForm(form);
      }
    });

    // Real-time validation
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.addEventListener("blur", () => {
        validateField(input);
      });
    });
  }
}

function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll("input[required], textarea[required]");

  inputs.forEach((input) => {
    if (!validateField(input)) {
      isValid = false;
    }
  });

  return isValid;
}

function validateField(field) {
  const value = field.value.trim();
  let isValid = true;
  let errorMessage = "";

  // Remove existing validation classes
  field.classList.remove("is-valid", "is-invalid");

  if (field.hasAttribute("required") && !value) {
    isValid = false;
    errorMessage = "This field is required.";
  } else if (field.type === "email" && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = "Please enter a valid email address.";
    }
  }

  // Update field validation state
  if (isValid) {
    field.classList.add("is-valid");
  } else {
    field.classList.add("is-invalid");
    const feedback = field.nextElementSibling;
    if (feedback && feedback.classList.contains("invalid-feedback")) {
      feedback.textContent = errorMessage;
    }
  }

  return isValid;
}

function submitForm(form) {
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;

  // Show loading state
  submitBtn.innerHTML = '<span class="loading"></span> Sending...';
  submitBtn.disabled = true;

  // Simulate form submission (replace with actual form handling)
  setTimeout(() => {
    // Show success message
    showSuccessMessage(
      "Thank you for your message! I'll get back to you soon."
    );

    // Reset form
    form.reset();
    form.querySelectorAll(".is-valid, .is-invalid").forEach((el) => {
      el.classList.remove("is-valid", "is-invalid");
    });

    // Reset button
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  }, 2000);
}

function showSuccessMessage(message) {
  const form = document.getElementById("contactForm");
  const existingAlert = form.parentNode.querySelector(".alert-success");

  // Remove existing alert if present
  if (existingAlert) {
    existingAlert.remove();
  }

  const successDiv = document.createElement("div");
  successDiv.className = "alert alert-success";
  successDiv.textContent = message;

  form.parentNode.insertBefore(successDiv, form);

  // Remove success message after 5 seconds
  setTimeout(() => {
    successDiv.remove();
  }, 5000);
}

function initTypingEffect() {
  const typingElement = document.querySelector(".typing-text");
  if (!typingElement) {
    console.warn("Typing element not found");
    return;
  }

  // Prevent multiple initializations
  if (typingElement.dataset.typingInitialized) {
    console.warn("Typing effect already initialized");
    return;
  }
  typingElement.dataset.typingInitialized = "true";

  const texts = [
    "Hi, I'm Snehil Pallav Sinha",
    "Frontend Developer",
    "Angular Specialist",
    "Web Developer",
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let timeoutId = null;

  function type() {
    if (timeoutId) clearTimeout(timeoutId); // Clear any existing timeout

    const currentText = texts[textIndex];
    typingElement.textContent = currentText.substring(0, charIndex);

    if (!isDeleting) {
      charIndex++;
      timeoutId = setTimeout(type, 100); // Faster typing speed (100ms)
      if (charIndex > currentText.length) {
        isDeleting = true;
        timeoutId = setTimeout(type, 3000); // Longer hold time (3 seconds)
      }
    } else {
      charIndex--;
      timeoutId = setTimeout(type, 50); // Deleting speed (unchanged)
      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; // Move to next text
      }
    }
  }

  // Start animation after a delay
  timeoutId = setTimeout(type, 1000);

  // Cleanup on page unload
  window.addEventListener("unload", () => {
    if (timeoutId) clearTimeout(timeoutId);
  });
}

// Smooth scrolling for all anchor links
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

// Utility function to add staggered animation delays
function addStaggeredAnimations(elements, baseDelay = 100) {
  elements.forEach((element, index) => {
    element.style.animationDelay = `${index * baseDelay}ms`;
  });
}

// Initialize staggered animations for timeline items
document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".timeline-item");
  const techIcons = document.querySelectorAll(".tech-icon");
  const contactItems = document.querySelectorAll(".contact-item");

  addStaggeredAnimations(timelineItems, 200);
  addStaggeredAnimations(techIcons, 100);
  addStaggeredAnimations(contactItems, 150);
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Apply throttling to scroll handler
window.addEventListener(
  "scroll",
  throttle(() => {
    updateActiveNavLink();
  }, 100)
);

// Add loading animation to buttons on click
document.addEventListener("click", (e) => {
  if (e.target.matches('.btn:not([type="submit"])')) {
    const btn = e.target;
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "";
    }, 150);
  }
});

function initMusicPlayer() {
  const audio = document.getElementById("backgroundMusic");
  const toggleBtn = document.getElementById("musicToggle");
  const startBtn = document.getElementById("musicStartBtn");
  const toggleIcon = toggleBtn.querySelector("i");
  // const startIcon = startBtn.querySelector("i");

  if (!audio || !toggleBtn || !startBtn) {
    console.warn("Audio, toggle button, or start button not found");
    return;
  }

  // Function to sync button states
  function syncButtonStates(isPlaying) {
    if (isPlaying) {
      toggleIcon.classList.remove("fa-volume-mute");
      toggleIcon.classList.add("fa-volume-up");
      // startIcon.classList.remove("fa-volume-mute");
      // startIcon.classList.add("fa-volume-up");
      toggleBtn.setAttribute("aria-label", "Pause background music");
      startBtn.setAttribute("aria-label", "Pause background music");
    } else {
      toggleIcon.classList.remove("fa-volume-up");
      toggleIcon.classList.add("fa-volume-mute");
      // startIcon.classList.remove("fa-volume-up");
      // startIcon.classList.add("fa-volume-mute");
      toggleBtn.setAttribute("aria-label", "Play background music");
      startBtn.setAttribute("aria-label", "Play background music");
    }
  }

  // Toggle music on start button click
  startBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio
        .play()
        .then(() => {
          syncButtonStates(true);
        })
        .catch((error) => console.error("Playback failed:", error));
    } else {
      audio.pause();
      syncButtonStates(false);
    }
  });

  // Toggle music on toggle button click
  toggleBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio
        .play()
        .then(() => {
          syncButtonStates(true);
        })
        .catch((error) => console.error("Playback failed:", error));
    } else {
      audio.pause();
      syncButtonStates(false);
    }
  });

  // Cleanup on page unload
  window.addEventListener("unload", () => {
    audio.pause();
  });
}

// Initialize music player on DOM load
document.addEventListener("DOMContentLoaded", initMusicPlayer);

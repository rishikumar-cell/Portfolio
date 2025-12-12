gsap.registerPlugin(ScrollTrigger);

// Fade-in animations
gsap.from(".hero-title", { opacity: 0, y: 30, duration: 1, ease: "power3.out" });
gsap.from(".floating-nav", { opacity: 0, y: 20, duration: 0.8, delay: 0.2, ease: "power3.out" });
gsap.from(".arrow-btn", { opacity: 0, scale: 0.8, duration: 0.6, delay: 0.3, ease: "back.out(1.4)" });

// Parallax movement
const bg = document.getElementById("heroBg");
const followX = gsap.quickTo(bg, "x", { duration: 0.6, ease: "power3" });
const followY = gsap.quickTo(bg, "y", { duration: 0.6, ease: "power3" });

document.querySelector("section").addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    followX(x);
    followY(y);
});

// Scrolling ticker (Developer)
function startTicker() {
    const ticker = document.getElementById("ticker");
    const w = ticker.scrollWidth / 2;

    gsap.fromTo(ticker, { x: 0 }, {
        x: -w,
        duration: 10,
        repeat: -1,
        ease: "none"
    });
}
window.onload = startTicker;


//Project Sectioon
gsap.registerPlugin(ScrollTrigger);

// Title animation
gsap.to(".projects-title", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".projects-title",
        start: "top 85%",
    }
});

// Right description
gsap.to(".projects-desc", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".projects-title",
        start: "top 85%",
    }
});

// Cards stagger
gsap.to(".project-card", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.15,
    scrollTrigger: {
        trigger: ".project-card",
        start: "top 85%",
    }
});

// Explore Button
gsap.to(".explore-btn", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".explore-btn",
        start: "top 90%",
    }
});


//About Me
gsap.registerPlugin(ScrollTrigger);

// fade-in image area
gsap.to(".about-image-wrap", {
    opacity: 1,
    y: 0,
    duration: 1.1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".about-image-wrap",
        start: "top 85%",
    }
});

// fade-in right text
gsap.to(".about-text", {
    opacity: 1,
    y: 0,
    duration: 1.1,
    delay: 0.1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".about-text",
        start: "top 85%",
    }
});

// floating stat cards
gsap.to(".stat-card", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".about-image-wrap",
        start: "top 85%",
    }
});

// subtle floating loop
gsap.to(".stat-card", {
    y: "-10px",
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    duration: 2.8,
});

// Counter animation
function animateCounters() {
    document.querySelectorAll(".counter").forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let current = 0;
        const increment = target / 60;

        function update() {
            current += increment;
            if (current < target) {
                counter.innerText = Math.floor(current);
                requestAnimationFrame(update);
            } else {
                counter.innerText = target;
            }
        }
        update();
    });
}

ScrollTrigger.create({
    trigger: ".stat-card",
    start: "top 85%",
    once: true,
    onEnter: animateCounters
});

// 3D tilt effect
document.querySelectorAll(".tilt-item").forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(card, {
            rotateY: x * 0.05,
            rotateX: -y * 0.05,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.4,
            ease: "power3.out"
        });
    });
});



//Contact Section
gsap.registerPlugin(ScrollTrigger);

gsap.to(".contact-title", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: { trigger: ".contact-title", start: "top 85%" }
});

gsap.to(".contact-sub", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.15,
    ease: "power3.out",
    scrollTrigger: { trigger: ".contact-title", start: "top 85%" }
});

gsap.to(".contact-form", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.25,
    ease: "power3.out",
    scrollTrigger: { trigger: ".contact-form", start: "top 85%" }
});




//Experience Section
gsap.registerPlugin(ScrollTrigger);

// Section Title
gsap.to(".exp-title", {
    opacity: 1,
    y: 0,
    duration: 1.1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".exp-title",
        start: "top 85%"
    }
});


// TYPEWRITER + FADE-IN EFFECT
function typeWriter(element, text, speed = 45) {
    let i = 0;
    element.textContent = "";
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Animate each chapter title + paragraph
document.querySelectorAll(".chapter-title").forEach((title, index) => {
    const paragraph = title.nextElementSibling;
    const text = title.getAttribute("data-text");

    ScrollTrigger.create({
        trigger: title,
        start: "top 85%",
        once: true,
        onEnter: () => {
            // Fade-in title instantly before typing
            gsap.to(title, {
                opacity: 1,
                duration: 0.2,
            });

            // Typewriter animation
            typeWriter(title, text, 40);

            // Reveal paragraph
            gsap.to(paragraph, {
                opacity: 1,
                y: 0,
                duration: 1.1,
                delay: 0.3,
                ease: "power3.out"
            });
        }
    });
});


const resumeBtn = document.getElementById("resumeBtn");
const resumeMenu = document.getElementById("resumeMenu");

resumeBtn.addEventListener("click", () => {
    resumeMenu.classList.toggle("hidden");
});

// Close when clicking outside
document.addEventListener("click", (e) => {
    if (!resumeBtn.contains(e.target) && !resumeMenu.contains(e.target)) {
        resumeMenu.classList.add("hidden");
    }
});




//contact form
document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = this;
    const submitBtn = document.getElementById("submitBtn");
    const successPopup = document.getElementById("successPopup");

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    const formData = new FormData(form);

    const response = await fetch("/contact-submit/", {
        method: "POST",
        body: formData
    });

    const result = await response.json();

    if (result.success) {
        // Show popup
        successPopup.classList.remove("opacity-0", "pointer-events-none");

        // Hide popup after 2.5 seconds
        setTimeout(() => {
            successPopup.classList.add("opacity-0", "pointer-events-none");
        }, 2500);

        form.reset();
    } else {
        alert("Something went wrong. Try again.");
    }

    submitBtn.textContent = "Send Message";
    submitBtn.disabled = false;
});
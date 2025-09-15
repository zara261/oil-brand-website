document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;

      // Rebind after header is loaded:
      document.getElementById("cart-toggle").addEventListener("click", () => {
        const cartDiv = document.getElementById("cart");
        cartDiv.style.display = cartDiv.style.display === "none" ? "block" : "none";
      });
    });
});

// header footer start

document.addEventListener("DOMContentLoaded", () => {
  // Load header
  fetch('header.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    });

  // Load footer
  fetch('footer.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });
});
// header footer end

// index js start

document.addEventListener("DOMContentLoaded", () => {
  // --- Careers Form Submission ---
  const careersForm = document.querySelector("form[action='careers']");
  if (careersForm) {
    careersForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const position = document.getElementById("position").value.trim();
      const cv = document.getElementById("cv").files[0];
      const message = document.getElementById("message").value.trim();

      let errorMsg = "";

      if (!name || !email || !position || !cv) {
        errorMsg = "Please fill all required fields.";
      } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorMsg = "Please enter a valid email address.";
      } else if (!["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(cv.type)) {
        errorMsg = "Please upload a valid resume file (PDF or DOC).";
      }

      if (errorMsg) {
        alert("Error: " + errorMsg);
      } else {
        alert("Application submitted successfully!\n\nThank you, " + name + ".");
        careersForm.reset();
      }
    });
  }

  // --- Contact Form Submission ---
  const contactForm = document.querySelector("form[action='contact']");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      let errorMsg = "";

      if (!name || !email || !subject || !message) {
        errorMsg = "Please fill all required fields.";
      } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorMsg = "Please enter a valid email address.";
      }

      if (errorMsg) {
        alert("Error: " + errorMsg);
      } else {
        alert("Message sent successfully!\n\nWe’ll get back to you soon.");
        contactForm.reset();
      }
    });
  }

  // --- Image fallback handler ---
  document.querySelectorAll("img").forEach(img => {
    img.onerror = () => {
      img.src = "assets/fallback-image.jpg";
    };
  });
});
// index js end


// about js start

 
     document.addEventListener("DOMContentLoaded", function () {
      const swiper = new Swiper('.teamSwiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 }
        }
      });
    });
    // about js end


















    
document.addEventListener("DOMContentLoaded", () => {
  // --- Navbar Highlight Fix ---
  const links = document.querySelectorAll(".navbar-nav .nav-link");
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });

  // --- Careers Form Submission ---
  const careersForm = document.querySelector("form[action='careers']");
  if (careersForm) {
    careersForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const position = document.getElementById("position").value.trim();
      const cv = document.getElementById("cv").files[0];
      const message = document.getElementById("message").value.trim();

      let errorMsg = "";

      if (!name || !email || !position || !cv) {
        errorMsg = "Please fill all required fields.";
      } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorMsg = "Please enter a valid email address.";
      } else if (!["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(cv.type)) {
        errorMsg = "Please upload a valid resume file (PDF or DOC).";
      }

      if (errorMsg) {
        alert("Error: " + errorMsg);
      } else {
        alert("Application submitted successfully!\n\nThank you, " + name + ".");
        careersForm.reset();
      }
    });
  }

  // --- Contact Form Submission ---
  const contactForm = document.querySelector("form[action='contact']");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      let errorMsg = "";

      if (!name || !email || !subject || !message) {
        errorMsg = "Please fill all required fields.";
      } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorMsg = "Please enter a valid email address.";
      }

      if (errorMsg) {
        alert("Error: " + errorMsg);
      } else {
        alert("Message sent successfully!\n\nWe’ll get back to you soon.");
        contactForm.reset();
      }
    });
  }

  // --- Image fallback handler ---
  document.querySelectorAll("img").forEach(img => {
    img.onerror = () => {
      img.src = "assets/fallback-image.jpg";
    };
  });
});


// Page Navigation
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });

  // Show selected page
  document.getElementById(pageId + "Page").classList.add("active");

  // Update active nav button
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");

  // Scroll to top when changing pages
  window.scrollTo(0, 0);
}

// Scroll to contact section
function scrollToContact() {
  showPage("home");
  setTimeout(() => {
    document.getElementById("contactSection").scrollIntoView({
      behavior: "smooth",
    });
  }, 100);
}

// Form submission handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const nama = document.getElementById("nama").value;
  const tanggalLahir = document.getElementById("tanggal_lahir").value;
  const jenisKelamin = document.getElementById("jenis_kelamin").value;
  const pesan = document.getElementById("pesan").value;

  // Validate required fields
  if (!nama || !tanggalLahir || !jenisKelamin || !pesan) {
    alert("Harap lengkapi semua field yang diperlukan!");
    return;
  }

  // Get current time
  const now = new Date();
  const currentTime = now.toLocaleString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // Format tanggal lahir
  const formattedDate = new Date(tanggalLahir).toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Update welcome message with animation
  const userNameElement = document.getElementById("userName");
  userNameElement.style.transform = "scale(1.1)";
  userNameElement.style.transition = "transform 0.3s ease";
  setTimeout(() => {
    userNameElement.textContent = nama;
    userNameElement.style.transform = "scale(1)";
  }, 150);

  // Update result section with animation
  const resultSection = document.querySelector(".result-section");
  resultSection.classList.add("success-animation");

  const resultContent = document.getElementById("resultContent");
  resultContent.innerHTML = `
                <strong>Current Time:</strong> ${currentTime}
                <br><br>
                <strong>Nama:</strong> ${nama}
                <br><br>
                <strong>Tanggal Lahir:</strong> ${formattedDate}
                <br><br>
                <strong>Jenis Kelamin:</strong> ${jenisKelamin}
                <br><br>
                <strong>Pesan:</strong> ${pesan}
            `;

  // Remove animation class after animation completes
  setTimeout(() => {
    resultSection.classList.remove("success-animation");
  }, 600);

  // Show success message
  const submitBtn = document.querySelector(".submit-btn");
  const originalText = submitBtn.textContent;
  submitBtn.textContent = "Berhasil!";
  submitBtn.style.background = "linear-gradient(135deg, #2ecc71, #27ae60)";

  setTimeout(() => {
    submitBtn.textContent = originalText;
    submitBtn.style.background = "linear-gradient(135deg, #667eea, #764ba2)";
  }, 2000);
});

// Update current time every second in result section
function updateCurrentTime() {
  const now = new Date();
  const currentTimeString = now.toLocaleString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const currentTimeElement = document.getElementById("currentTime");
  if (currentTimeElement) {
    currentTimeElement.textContent = currentTimeString;
  }
}

// Update time initially and then every second
updateCurrentTime();
setInterval(updateCurrentTime, 1000);

// Date validation (tidak boleh masa depan)
document
  .getElementById("tanggal_lahir")
  .addEventListener("change", function () {
    const selectedDate = new Date(this.value);
    const today = new Date();

    if (selectedDate > today) {
      alert("Tanggal lahir tidak boleh di masa depan!");
      this.value = "";
      this.focus();
    }
  });

// Input animations
document.querySelectorAll("input, select, textarea").forEach((input) => {
  input.addEventListener("focus", function () {
    this.parentElement.style.transform = "translateY(-2px)";
    this.parentElement.style.transition = "transform 0.2s ease";
  });

  input.addEventListener("blur", function () {
    this.parentElement.style.transform = "translateY(0)";
  });
});

// Initialize page
document.addEventListener("DOMContentLoaded", function () {
  // Set home as active page
  showPage("home");

  // Set active nav button
  document.querySelector(".nav-btn").classList.add("active");
});

// ================= SIDEBAR TOGGLE (MODERATED MOBILE) =================
const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

// Create overlay
const overlay = document.createElement("div");
overlay.classList.add("sidebar-overlay");
document.body.appendChild(overlay);

// Toggle sidebar
menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");

    // Prevent body scroll when sidebar is open
    document.body.style.overflow = sidebar.classList.contains("active")
        ? "hidden"
        : "auto";
});

// Close when clicking overlay
overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
});

// Close when clicking outside
document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "auto";
    }
});


// ================= DYNAMIC PROGRESS =================
const progressValue = 72; // change anytime

const circle = document.querySelector(".circle");
const progressText = document.querySelector(".circle span");

if (circle && progressText) {
    circle.style.background =
        `conic-gradient(#1aa05d 0% ${progressValue}%, #d9d9d9 ${progressValue}% 100%)`;

    progressText.textContent = progressValue + "%";
}


// ================= BUTTON INTERACTIONS =================
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const originalText = button.innerText;

        button.innerText = "Loading...";
        button.disabled = true;

        setTimeout(() => {
            button.innerText = "Done ✅";

            setTimeout(() => {
                button.innerText = originalText;
                button.disabled = false;
            }, 1200);

        }, 800);
    });
});


// ================= SIMPLE SEARCH (FILTER COURSES) =================
const searchInput = document.querySelector(".search input");
const cards = document.querySelectorAll(".card");

if (searchInput) {
    searchInput.addEventListener("input", () => {
        const value = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}
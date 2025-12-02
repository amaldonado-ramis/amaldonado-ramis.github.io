const body = document.body; 
const switchBtn = document.querySelector(".switch");
const icon = switchBtn.querySelector("i");

switchBtn.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark");
    body.classList.toggle("light", !isDark);
    icon.className = isDark ? "fa-solid fa-moon" : "fa-solid fa-sun-bright";
});
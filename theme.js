let isdarkmode = false;
try {
    const storedDarkMode = localStorage.getItem("isdarkmode");
    if (storedDarkMode !== null) {
        isdarkmode = JSON.parse(storedDarkMode);
    } else {
        localStorage.setItem("isdarkmode", JSON.stringify(isdarkmode));
    }
} catch (e) {
    localStorage.setItem("isdarkmode", JSON.stringify(isdarkmode));
}
function toggletheme() {
    isdarkmode = !isdarkmode;
    if (isdarkmode) {
        document.body.classList.add("dark");
        document.getElementById("theme").innerHTML = "🌙";
    } else {
        document.body.classList.remove("dark");
        document.getElementById("theme").innerHTML = "🌞";
    }
    localStorage.setItem("isdarkmode", JSON.stringify(isdarkmode));
}
window.addEventListener('load', (event) => {
    if (isdarkmode) {
        document.body.classList.add("dark");
        document.getElementById("theme").innerHTML = "🌙";
    }
});
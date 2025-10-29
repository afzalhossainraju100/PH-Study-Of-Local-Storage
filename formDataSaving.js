document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("email");
    if (!input) return;

    const saved = localStorage.getItem("email");
    if (saved !== null) {
        input.value = saved;
    }

    input.addEventListener("input", (e) => {
        const val = e.target.value;
        if (val) {
            localStorage.setItem("email", val);
        } else {
            localStorage.removeItem("email");
        }
    });
});

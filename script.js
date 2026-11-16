
document.addEventListener("DOMContentLoaded", () => {

    // Automatic copyright year
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    console.log(
        "%c YASSIN DIAA ",
        "background: #080B0D; color: #35E68A; font-size: 20px; font-weight: bold;"
    );

    console.log("Light40X Studio | Website rebuilding.");

});

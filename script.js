// Funktsioon, mis lülitab navigeerimismenüü sisse/välja väiksematel ekraanidel
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("show"); // Lülitab "show" klassi sisse/välja, et kuvada või peita menüüd
}

// Funktsioon, mis peidab "Loe rohkem" nupu ja kuvab uued nupud
document.getElementById("laerohkem").addEventListener("click", function() {
    // Peidame "Loe rohkem" nupu
    document.getElementById("laerohkem").style.display = "none";
    
    // Kuvame uued nupud
    document.getElementById("nupud").style.display = "flex";  // Kuvame nupud
});

// Funktsioon, mis viib kasutaja vastavale lehele
document.getElementById("rehvivahetus").addEventListener("click", function() {
    window.location.href = "rehvivahetus.html";  // Link vastavale lehele
});

document.getElementById("rehvideajalugu").addEventListener("click", function() {
    window.location.href = "rehvide-ajalugu.html";  // Link vastavale lehele
});

document.getElementById("rehvitähised").addEventListener("click", function() {
    window.location.href = "rehvitahised.html";  // Link vastavale lehele
});

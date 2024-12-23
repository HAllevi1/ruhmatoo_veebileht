//JS-i tegi Henri, chatgpt aitas.

// Funktsioon, mis lülitab navigeerimismenüü sisse/välja väiksematel ekraanidel
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("show"); // Lülitab "show" klassi sisse/välja, et kuvada või peita menüüd
}

// Funktsioon, mis peidab "Loe rohkem" nupu ja kuvab uued nupud
document.getElementById("laerohkem").addEventListener("click", function() {
    // muudab "Loe rohkem" nähtamatuks
    document.getElementById("laerohkem").style.display = "none";
    
    // kuvame uued nupud flex paigutuses, et need oleks nähtaval ja joondatud üksteise kõrvale
    document.getElementById("nupud").style.display = "flex";  // Kuvame nupud
});

// Funktsioon, mis viib kasutaja vastavale lehele
document.getElementById("rehvivahetus").addEventListener("click", function() {
    window.location.href = "rehvivahetus.html";  // Link vastavale lehele
});

document.getElementById("rehvideajalugu").addEventListener("click", function() {
    window.location.href = "rehvide_ajalugu.html";  // Link vastavale lehele
});

document.getElementById("rehvitähised").addEventListener("click", function() {
    window.location.href = "rehvitahised.html";  // Link vastavale lehele
});

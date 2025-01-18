// script.js
document.getElementById('searchInput').addEventListener('input', function() {
    if (this.value.length > 0) {
        this.placeholder = ''; 
    } else {
        this.placeholder = 'جستجو...'; 
    }
});

function toggleDropdown() {
    const dropdown = document.getElementById("dropdownMenu");
    const overlay = document.getElementById("overlay");
    
    dropdown.classList.toggle("show");
    overlay.style.display = dropdown.classList.contains("show") ? "block" : "none"; 
}


function closeDropdown() {
    const dropdown = document.getElementById("dropdownMenu");
    const overlay = document.getElementById("overlay");

    if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
        overlay.style.display = "none"; 
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.icon-down')) {
        closeDropdown();
    }
}
document.querySelector('.dropdown-chart').addEventListener('click', function(event) {
    event.stopPropagation(); 
    const dropdownMenu = document.querySelector('.dropdown-selector');
    dropdownMenu.style.display = dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '' ? 'block' : 'none';
});

document.addEventListener('click', function(event) {
    const dropdownMenu = document.querySelector('.dropdown-selector');
    const imgF = document.querySelector('.dropdown-chart');


    if (!dropdownMenu.contains(event.target) && !imgF.contains(event.target)) {
        dropdownMenu.style.display = 'none'; 
    }
});


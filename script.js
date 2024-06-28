

function toggleMobileMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('nav-links-visible');
}

function openTab(tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.classList.remove('active');
        tab.style.display = 'none';
    });

    const activeTab = document.getElementById(tabName + '-content');
    if (activeTab) {
        activeTab.classList.add('active');
        activeTab.style.display = 'block';
    }

   
    const fullscreenBg = document.querySelector('.fullscreen-bg');
    if (tabName === 'home') {
        fullscreenBg.style.display = 'block';
    } else {
        fullscreenBg.style.display = 'none';
    }
}

document.querySelectorAll('nav ul li a, .sub-nav-links li a, #main-logo').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const tabName = this.getAttribute('data-tab') || 'home';
        openTab(tabName);
        if (window.innerWidth <= 768) {
            toggleMobileMenu();
        }
    });
});

document.querySelectorAll('nav > ul > li').forEach(li => {
    li.addEventListener('mouseenter', function () {
        const subNav = this.querySelector('.sub-nav-links');
        if (subNav) {
            subNav.style.display = 'block';
        }
    });

    li.addEventListener('mouseleave', function () {
        const subNav = this.querySelector('.sub-nav-links');
        if (subNav) {
            subNav.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    openTab('home');
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let formData = new FormData(this);
    let data = {};
    for (var [key, value] of formData.entries()) {
        data[key] = value;
    }
    console.log(data); 
    this.reset(); 
});

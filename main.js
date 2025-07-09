const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("sidebarToggle");
const closeBtn = document.getElementById("sidebarClose");

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
});


//hero section
const words = ["Designer", "Developer", "Freelancer", "Artist"];
let i = 0;
let j = 0;
let currentWord = '';
let isDeleting = false;
const element = document.getElementById('typed-text');

function typeEffect() {
  currentWord = words[i];
  
  if (isDeleting) {
    element.textContent = currentWord.substring(0, j--);
  } else {
    element.textContent = currentWord.substring(0, j++);
  }

  if (!isDeleting && j === currentWord.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // hold before deleting
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    setTimeout(typeEffect, 300); // pause before next word
  } else {
    setTimeout(typeEffect, isDeleting ? 60 : 100);
  }
}

typeEffect();
//hero section 

document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 2. Get the filter value
            const filterValue = button.getAttribute('data-filter');

            // 3. Loop through portfolio items
            portfolioItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');

                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});



document.getElementById("scrollBtn").addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});






//side bar
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("sidebarToggle");
const closeBtn = document.getElementById("sidebarClose");

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
});

//counter
   document.addEventListener("DOMContentLoaded", () => {
      const counters = document.querySelectorAll('.counter');
      const speed = 500; // lower = faster

      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;

          const increment = Math.ceil(target / speed);

          if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 10);
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
      });
    });


//hero section displaying words
const words = ["Designer|", "Developer|", "Freelancer|", "Artist|"];
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




//portfolio section
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


//testimonial carousel section
  const track = document.querySelector('.testimonial-track');
  const dots = document.querySelectorAll('.carousel-dots .dot');

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');

      const index = parseInt(dot.getAttribute('data-index'));
      const offset = (100 / 3) * index; // 3 cards visible
      track.style.transform = `translateX(-${offset}%)`;
    });
  });





document.getElementById("scrollBtn").addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});





  
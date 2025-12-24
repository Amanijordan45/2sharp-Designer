const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  menuIcon.classList.toggle('active'); // Hamburger → Cross animation
});



const galleryItems = document.querySelectorAll('.gallery-item');

const galleryObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "scale(1)";
      }
    });
  },
  { threshold: 0.2 }
);

galleryItems.forEach(item => {
  galleryObserver.observe(item);
});


<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
  emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID

  const form = document.getElementById('contact-form');
  const messageEl = document.querySelector('.form-message');

  form.addEventListener('submit', function(e){
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(() => {
        messageEl.textContent = "Message sent successfully!";
        form.reset();
      }, (error) => {
        messageEl.textContent = "Oops! Something went wrong.";
        console.error(error);
      });
  });
</script>

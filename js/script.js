(function () {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
    document.querySelectorAll('#navLinks a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('active')));
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => { if (window.scrollY > 30) header.classList.add('scrolled'); else header.classList.remove('scrolled'); });
    const revealSelector = '.skill-category, .experience-item, .timeline-item, .hobby-card, .project-card';
    const observer = new IntersectionObserver((entries, obs) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); entry.target.querySelectorAll('.skill-fill').forEach(f => { const level = f.getAttribute('data-level') || '0'; f.style.width = level + '%'; }); obs.unobserve(entry.target); } }); }, { threshold: 0.15 });
    document.querySelectorAll(revealSelector).forEach(el => observer.observe(el));
    window.addEventListener('load', () => { document.querySelectorAll('.skill-fill').forEach(f => { const parent = f.closest('.skill-category'); if (parent && parent.getBoundingClientRect().top < window.innerHeight) { f.style.width = (f.dataset.level || '0') + '%'; } }); });
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => { e.preventDefault(); const btn = contactForm.querySelector('button[type="submit"]'); btn.disabled = true; btn.textContent = 'Sending...'; setTimeout(() => { btn.disabled = false; btn.textContent = 'Send Message'; alert('Thank you — message simulated (no backend configured).'); contactForm.reset(); }, 800); });
})();
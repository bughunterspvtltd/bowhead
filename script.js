const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');

  navToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
  });

  // Optional: Hide mobile nav when link clicked
  document.querySelectorAll('#mobileNav a').forEach(link => {
    link.addEventListener('click', () => mobileNav.classList.add('hidden'));
  });





function showTab(tab) {
  // Toggle active class on buttons
  document.getElementById('tab-ia').classList.toggle('active', tab === 'ia');
  document.getElementById('tab-aif').classList.toggle('active', tab === 'aif');

  // Toggle file groups
  document.getElementById('files-ia').style.display = (tab === 'ia') ? 'flex' : 'none';
  document.getElementById('files-aif').style.display = (tab === 'aif') ? 'flex' : 'none';
}







document.addEventListener('DOMContentLoaded', function() {
  // Section IDs must match your HTML
  const sections = ['hero', 'who-we-are', 'offerings', 'team', 'disclosures', 'contact'];
  const navLinks = document.querySelectorAll('.nav-link');
  const nav = document.getElementById('mainNav');
  const logo = document.getElementById('navLogo');

  function isDesktop() {
    return window.innerWidth >= 768;
  }

  function getNavbarHeight() {
    return nav.offsetHeight;
  }

  // Navbar shrink on scroll (desktop only)
  function handleNavbarShrink() {
    if (isDesktop()) {
      if (window.scrollY > 30) {
        nav.classList.remove('md:h-[150px]');
        nav.classList.add('md:h-[100px]');
        logo.classList.remove('md:h-24');
        logo.classList.add('md:h-16');
      } else {
        nav.classList.add('md:h-[150px]');
        nav.classList.remove('md:h-[100px]');
        logo.classList.add('md:h-24');
        logo.classList.remove('md:h-16');
      }
    } else {
      nav.classList.remove('md:h-[100px]');
      nav.classList.add('h-[80px]');
      logo.classList.remove('md:h-16');
      logo.classList.add('h-10');
    }
  }

  // Highlight nav link as you scroll
  function handleSectionHighlight() {
    let scrollPos = window.scrollY || document.documentElement.scrollTop;
    let found = false;
    const navHeight = getNavbarHeight();

    sections.forEach((id, idx) => {
      const section = document.getElementById(id);
      if (section) {
        const top = section.offsetTop - navHeight - 1; // -1 for border/rounding
        const bottom = top + section.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom && !found) {
          navLinks.forEach(link => link.classList.remove('active'));
          navLinks[idx].classList.add('active');
          found = true;
        }
      }
    });
    if (!found) {
      navLinks.forEach(link => link.classList.remove('active'));
    }
  }

  // Listen to scroll/resize
  window.addEventListener('scroll', function() {
    handleNavbarShrink();
    handleSectionHighlight();
  });

  window.addEventListener('resize', function() {
    handleNavbarShrink();
    handleSectionHighlight();
  });

  // Initial run
  handleNavbarShrink();
  handleSectionHighlight();
});









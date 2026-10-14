const year = document.getElementById('year');
if (year) year.textContent = new Intl.DateTimeFormat('fa-IR', {year:'numeric'}).format(new Date());
const menuButton = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    mobileNav.hidden = isOpen;
    menuButton.textContent = isOpen ? '☰' : '×';
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mobileNav.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  }));
}
const copyButton = document.querySelector('.copy-email');
const toast = document.querySelector('.toast');
if (copyButton && toast) copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('mahdieh.mohseni.m@gmail.com');
    toast.textContent = 'ایمیل کپی شد';
  } catch {
    toast.textContent = 'ایمیل: mahdieh.mohseni.m@gmail.com';
  }
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2400);
});
document.querySelectorAll('.project-details').forEach(details => {
  details.addEventListener('toggle', () => {
    const summary = details.querySelector('summary');
    if (summary) summary.setAttribute('aria-expanded', String(details.open));
  });
});

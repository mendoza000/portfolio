export const darkMode = () => {

  const root = document.querySelector('#root');
  const html = document.querySelector('html');
  const body = document.querySelector('body');
  const nav = document.querySelector('.nav');
  const autoTypedSpan = document.querySelector('.header_autoTyped span');
  const servicesCards = document.querySelectorAll('.services_card');
  const navIcons = document.querySelectorAll('.nav_item a box-icon'); 
  const servicesIcons = document.querySelectorAll('.services_card box-icon');
  const skills = document.querySelectorAll('.skills_card');
  const footer = document.querySelector('.footer');
  const footerCopy = document.querySelector('.footer_copy');

  body.style.backgroundColor = 'var(--color-bg-o)'
  html.style.backgroundColor = 'var(--color-bg-o)'
  body.style.color = 'var(--color-bg-l)'
  html.style.color = 'var(--color-bg-l)'
  nav.style.backgroundColor = 'var(--color-bg-o)'
  nav.style.color = 'var(--color-bg-l)'
  autoTypedSpan.style.color = 'var(--color-bg-l)'
  footer.style.backgroundColor = 'var(--color-secondary-xo)'
  footerCopy.style.borderColor = 'var(--color-secondary-o)'

  servicesCards.forEach(e => {
    e.style.backgroundColor = 'var(--color-secondary)'
  })
  navIcons.forEach(e => {
  	e.style.fill = 'var(--color-bg-l)'
  })
  servicesIcons.forEach(e => {
  	e.style.fill = 'var(--color-bg-l)'
  })
  skills.forEach(e => {
  	e.style.backgroundColor = 'var(--color-secondary)'
  })
}

export const ligthMode = () => {

  const root = document.querySelector('#root');
  const html = document.querySelector('html');
  const body = document.querySelector('body');
  const nav = document.querySelector('.nav');
  const autoTypedSpan = document.querySelector('.header_autoTyped span');
  const servicesCards = document.querySelectorAll('.services_card');
  const navIcons = document.querySelectorAll('.nav_item a box-icon'); 
  const servicesIcons = document.querySelectorAll('.services_card box-icon');
  const skills = document.querySelectorAll('.skills_card');
  const footer = document.querySelector('.footer');
  const footerCopy = document.querySelector('.footer_copy');

  body.style.backgroundColor = 'var(--color-bg-l)'
  html.style.backgroundColor = 'var(--color-bg-l)'
  body.style.color = 'var(--color-bg-o)'
  html.style.color = 'var(--color-bg-o)'
  nav.style.backgroundColor = 'var(--color-bg-l)'
  nav.style.color = 'var(--color-bg-o)'
  autoTypedSpan.style.color = 'var(--color-bg-o)'
  footer.style.backgroundColor = 'var(--color-bg-o)'
  footerCopy.style.borderColor = 'var(--color-secondary-l)'

  servicesCards.forEach(e => {
    e.style.backgroundColor = 'var(--color-bg-l)'
  })
  navIcons.forEach(e => {
    e.style.fill = 'var(--color-bg-o)'
  })
  servicesIcons.forEach(e => {
    e.style.fill = 'var(--color-bg-o)'
  })
  skills.forEach(e => {
    e.style.backgroundColor = 'var(--color-bg-l)'
  })
}

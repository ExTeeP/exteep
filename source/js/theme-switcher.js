const html = document.documentElement;
const switcher = document.querySelector('.button-theme');
const svgMoon = document.querySelector('#moon-svg');
const svgSun = document.querySelector('#sun-svg');

const switchSiteTheme = () => {
  html.classList.toggle('dark');
  html.classList.toggle('light');
};

const switchActiveSvg = () => {
  if (html.classList.contains('dark')) {
    svgSun.classList.add('button-theme__active');
    svgMoon.classList.remove('button-theme__active');
  } else {
    svgMoon.classList.add('button-theme__active');
    svgSun.classList.remove('button-theme__active');
  }
};

switcher.addEventListener('click', switchSiteTheme);
switcher.addEventListener('click', switchActiveSvg);

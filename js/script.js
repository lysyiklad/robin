alert('IIIII');
const menu = document.querySelector('#navbar-default'); //.classList.toggle('visible');
const btn = document.getElementById('btn');
const header = document.querySelector('#hdr');
const heightHeader = 120;
let flagScroolHeader = false;
let curIndexGallery = 1;

for (let index = 1; index <= 4; index++) {
  let btn = document.getElementById(`btn-${index}`);
  let imgGallery = document.getElementById(`img-gallery-${index}`);
  btn.addEventListener('click', () => {
    if (curIndexGallery != index) {
      document.getElementById(`btn-${curIndexGallery}`).classList.toggle('bg-purple-900');
      document.getElementById(`img-gallery-${curIndexGallery}`).classList.toggle('hidden');
      imgGallery.classList.toggle('hidden');
      btn.classList.toggle('bg-purple-900');
      curIndexGallery = index;
    }
  });
}

if (btn && menu) {
  btn.addEventListener('click', () => {
    menu.classList.toggle('left-full');
    menu.classList.toggle('left-0');
  });
}

if (window.scrollY > heightHeader) {
  header.classList.remove('md:bg-transparent');
  flagScroolHeader = true;
}

window.addEventListener('scroll', function () {
  if (window.scrollY > heightHeader && !flagScroolHeader) {
    header.classList.remove('md:bg-transparent');
    flagScroolHeader = true;
  } else if (window.scrollY <= heightHeader) {
    header.classList.add('md:bg-transparent');
    flagScroolHeader = false;
  }
});

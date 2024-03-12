const menu = document.querySelector('#navbar-default'); //.classList.toggle('visible');
const btn = document.getElementById('btn');
const header = document.querySelector('#hdr');
const heightHeader = 120;
let flagScroolHeader = false;
let curIndexGallery = 1;
let isOpenMenu = false;

const nameSection = ['experience', 'work', 'photography', 'Contact'];

function focusBtnHeader(id, isIntersecting) {
  const btn = document.getElementById(`btn-hdr-${nameSection.indexOf(id) + 1}`);
  if (isIntersecting) {
    btn.classList.add('bg-[#5221E6]');
  } else {
    btn.classList.remove('bg-[#5221E6]');
  }
}

const observer = new IntersectionObserver(
  (entries, observer) => {
    // console.log(entries);
    focusBtnHeader(entries[0].target.id, entries[0].isIntersecting);
  },
  {
    // rootMargin: '0px 0px 50px 0px',
    // threshold: 1.0,
  },
);

nameSection.forEach((idSection) => {
  observer.observe(document.getElementById(idSection));
});

function hiddenMenu() {
  const menu = document.querySelector('#navbar-default');
  menu.classList.toggle('left-full');
  menu.classList.toggle('left-0');
}

for (let index = 0; index < nameSection.length; index++) {
  document.getElementById(`btn-hdr-${index + 1}`).addEventListener('click', () => {
    document
      .getElementById(nameSection[index])
      .scrollIntoView({ block: 'start', behavior: 'smooth' });
    hiddenMenu();
  });
}

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
    isOpenMenu = !isOpenMenu;
    if (isOpenMenu) {
      header.classList.remove('bg-transparent');
      header.classList.add('bg-black');
      // addBgBlackHdr();
    } else if (!isOpenMenu && window.scrollY <= heightHeader) {
      header.classList.add('bg-transparent');
      header.classList.remove('bg-black');
    }
    // console.log(header);
  });
}

if (window.scrollY > heightHeader) {
  header.classList.remove('bg-transparent');
  header.classList.add('bg-black');
  // addBgBlackHdr();
  flagScroolHeader = true;
}

window.addEventListener('scroll', function () {
  if (window.scrollY > heightHeader && !flagScroolHeader) {
    header.classList.remove('bg-transparent');
    header.classList.add('bg-black');
    // addBgBlackHdr();
    flagScroolHeader = true;
  } else if (window.scrollY <= heightHeader) {
    header.classList.add('bg-transparent');
    flagScroolHeader = false;
  }

  // if (window.scrollY > 700 && window.scrollY <= 1400) {
  //   btnHdr1.classList.add('bg-[#5221E6]');
  // } else {
  //   btnHdr1.classList.remove('bg-[#5221E6]');
  // }
});

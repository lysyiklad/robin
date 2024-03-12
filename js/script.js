const menu = document.querySelector('#navbar-default'); //.classList.toggle('visible');
const btn = document.getElementById('btn');
const header = document.querySelector('#hdr');
const heightHeader = 120;
let flagScroolHeader = false;
let curIndexGallery = 1;
let isOpenMenu = false;

const btnHdr1 = document.getElementById('btn-hdr-1');
const btnHdr2 = document.getElementById('btn-hdr-2');
const btnHdr3 = document.getElementById('btn-hdr-3');
const btnHdr4 = document.getElementById('btn-hdr-4');
// console.log(btnHdr1);

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

// function addBgBlackHdr() {
//   header.classList.remove('bg-transparent');
//   header.classList.add('bg-black');
// }

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

  if (window.scrollY > 700 && window.scrollY <= 1400) {
    btnHdr1.classList.add('bg-[#5221E6]');
  } else {
    btnHdr1.classList.remove('bg-[#5221E6]');
  }

  if (window.scrollY > 2700 && window.scrollY <= 4600) {
    btnHdr2.classList.add('bg-[#5221E6]');
  } else {
    btnHdr2.classList.remove('bg-[#5221E6]');
  }

  if (window.scrollY > 8600 && window.scrollY <= 9000) {
    btnHdr3.classList.add('bg-[#5221E6]');
  } else {
    btnHdr3.classList.remove('bg-[#5221E6]');
  }

  if (window.scrollY > 9800) {
    btnHdr4.classList.add('bg-[#5221E6]');
  } else {
    btnHdr4.classList.remove('bg-[#5221E6]');
  }
});

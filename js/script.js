var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}

function myFunction(detailId, btnId) {
  var moreText = document.getElementById(detailId);
  var btnText = document.getElementById(btnId);

  if (moreText.style.display === "none") {
      moreText.style.display = "block";
      btnText.innerHTML = btnText.innerHTML.replace('chevron.png', 'chevron-up.png');
  } else {
      moreText.style.display = "none";
      btnText.innerHTML = btnText.innerHTML.replace('chevron-up.png', 'chevron.png');
  }
}



function showCategoryStays(categorystays) {
  const categoriesstays = document.querySelectorAll('.stays-main-card-container');
  categoriesstays.forEach(section => {
      section.style.display = 'none';
  });

  document.getElementById(categorystays).style.display = 'block';

  const buttons = document.querySelectorAll('.choose-head button');
  buttons.forEach(button => {
      button.classList.remove('active');
  });

  document.getElementById(`${categorystays}-btn`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.m-nav a');

  window.addEventListener('scroll', function() {
      let current = '';

      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          console.log(`Section: ${section.id}, Top: ${sectionTop}, Height: ${sectionHeight}, PageYOffset: ${pageYOffset}`);

          if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
              current = section.getAttribute('id');
          }
      });

      console.log(`Current section: ${current}`);

      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').includes(current)) {
              link.classList.add('active');
          }
      });
  });
});

window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.display = 'none';
  document.body.style.overflow = 'auto'; 
});

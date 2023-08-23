const videos = document.querySelectorAll('.electricTxtVid');
const gifs = document.querySelectorAll('.electricTxtGif');

function checkScreenWidth() {
  const screenWidth = window.innerWidth;

  for (let i = 0; i < videos.length; i++) {
    if (screenWidth < 1300) {
      videos[i].style.display = 'none';
      gifs[i].style.display = 'block';
    } else {
      videos[i].style.display = 'block';
      gifs[i].style.display = 'none';
    }
  }
}

window.addEventListener('resize', checkScreenWidth);
checkScreenWidth(); // Check on initial load
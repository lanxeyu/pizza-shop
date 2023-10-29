window.onscroll = function() {updateLogo()};

function updateLogo() {

    const logo = document.querySelector('.logo')
    const header = document.querySelector('.header')
    const banner = document.querySelector('.banner-img')
    

  if (logo && header && banner) {
    const bannerHeight = banner.height
    if (document.body.scrollTop > bannerHeight || document.documentElement.scrollTop > bannerHeight) {
      logo.style.height= "130px";
      logo.style.top= "12px";  

    } else {
      logo.style.height= "200px";
      logo.style.top= "20px";
    }

    if (window.innerWidth <= 768) {
      logo.style.marginLeft= "-15px";
  } else {
      logo.style.marginLeft= "10vw";
  }

  }

}

export { updateLogo }
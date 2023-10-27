window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("logo").style.height= "150px";
    document.getElementById("logo").style.top= "30px";
  } else {
    document.getElementById("logo").style.height= "200px";
    document.getElementById("logo").style.top= "0px";
  }
}
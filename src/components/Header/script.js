window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("logo").style.height= "130px";
    document.getElementById("logo").style.top= "20px";
  } else {
    document.getElementById("logo").style.height= "200px";
    document.getElementById("logo").style.top= "0px";
  }
}
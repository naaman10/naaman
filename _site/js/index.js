var myCarousel = document.querySelector('#homeBanner')
var carousel = new bootstrap.Carousel(myCarousel)
var courselBlock = document.querySelector('#carouselBlock')
var carousel = new bootstrap.Carousel(courselBlock)
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});
document.getElementById("copyUrl").addEventListener("click", function(event){
    event.preventDefault();
    var i = window.location.href;
    var ii = encodeURIComponent(document.title);
    var iii = '?utm_source=' + ii + '&utm_medium=share';
    navigator.clipboard.writeText(i + iii);
    var iiii = document.getElementById('liveToast')
    var toast = new bootstrap.Toast(iiii)
    toast.show()
});


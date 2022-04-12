var myCarousel = document.querySelector('#homeBanner')
var carousel = new bootstrap.Carousel(myCarousel)
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});
document.getElementById("copyUrl").addEventListener("click", function(event){
    event.preventDefault();
    var url = window.location.href;
    var utm = "?utm_source=site&utm_medium=share";
    navigator.clipboard.writeText(url + utm);
    console.log(event);

});


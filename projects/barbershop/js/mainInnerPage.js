var $linkLogin = document.querySelector(".login");
var $popup = document.querySelector(".modal-content");
var $overlay = document.querySelector(".modal-overlay");
var $closePopup = document.querySelector(".modal-content-close");
//Map

var $linkMap2 = document.querySelector(".map2");
var $map = document.querySelector(".modal-content-map");
var $closeMap2 = document.querySelector(".modal-content-close-map");

//Popup open
$linkLogin.addEventListener("click", function(event){ //отслеживает события клика
  event.preventDefault();                             //ссылка не будет работать <a href=''> /#
  $popup.classList.add("modal-content-show");         // добовляем клас css к тегу с класом .modal-content($), без точки
  $overlay.classList.add("modal-overlay-show");       // добовляем клас css к тегу с класом .modal-overlay($), без точки
});
//Popup close
$closePopup.addEventListener("click", function(event){
  event.preventDefault();
  $popup.classList.remove("modal-content-show");      //удаляет класс с тега
  $overlay.classList.remove("modal-overlay-show");    //удаляет класс с тега
});

//Map open
$linkMap2.addEventListener("click", function(event){
  event.preventDefault();
  $map.classList.add("modal-content-map-show");
  $overlay.classList.add("modal-overlay-show");
})
//Map close
$closeMap2.addEventListener("click", function(event){
  event.preventDefault();
  $map.classList.remove("modal-content-map-show");
  $overlay.classList.remove("modal-overlay-show");
})

//Close Popup and Map Esc key
window.addEventListener("keydown", function(event){
    if (event.keyCode === 27) {
        if ($popup.classList.contains("modal-content-show")) {
            $popup.classList.remove("modal-content-show");
            $overlay.classList.remove("modal-overlay-show");
        }
    }
});
window.addEventListener("keydown", function(event){
    if (event.keyCode === 27) {
        if ($map.classList.contains("modal-content-map-show")) {
            $map.classList.remove("modal-content-map-show");
            $overlay.classList.remove("modal-overlay-show");
        }
    }
});
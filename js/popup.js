var link = document.querySelector(".contact-us");
var popup = document.querySelector(".contact-us-optional");
var close = document.querySelector(".contact-us-optional-close-btn");
var nameFocus = popup.querySelector("#name");
var email = popup.querySelector("#email");
var phone = popup.querySelector("#phone");
var form = popup.querySelector("form");
var storage = localStorage.getItem("name");

//Form open, animation open
link.addEventListener("click", function(event){ //отслеживает события клика
    event.preventDefault(); //ссылка не будет работать <a href=''> /#
    popup.classList.add("contact-us-optional-show"); // добовляем клас css к тегу с класом .modal-content ($), без точки
    
    if (storage) {
        nameFocus.value = storage;
        email.focus();
    } else {
        nameFocus.focus();
    }
});

//Close popup
close.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.remove("contact-us-optional-show");
    popup.classList.remove("modal-error");
});

//Error form data
form.addEventListener("submit", function(event){
    if (!nameFocus.value || !email.value || !phone.value) {
         event.preventDefault();
         popup.classList.add("modal-error");
         
    } else {
        event.preventDefault();
        localStorage.setItem("name", nameFocus.value);

        console.log(nameFocus.value);
        console.log(email.value);
        console.log(phone.value);
        console.log("All right");
    }
    
});

//Close popup key Esc
window.addEventListener("keydown", function(event){
    if (event.keyCode === 27) {
        if (popup.classList.contains("contact-us-optional-show")) {
	        popup.classList.remove("contact-us-optional-show");
            popup.classList.remove("modal-error");
        }
    }
});

var link = document.querySelector(".find_hotel_btn");

var popup = document.querySelector(".form_search");
			
link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.toggle("form_search_show");
});
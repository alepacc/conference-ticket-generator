// Custom upload button logic
document.addEventListener('DOMContentLoaded', function() {
	var uploadBtn = document.getElementById('customUploadBtn');
	var fileInput = document.getElementById('file');
	if (uploadBtn && fileInput) {
		uploadBtn.addEventListener('click', function() {
			fileInput.click();
		});
	}
});

const form = document.querySelector(".ticket-form");
const header = document.querySelector(".header__text");
const btn = document.querySelector(".generate-ticket");

var nameInput = document.getElementById('full-name');
var emailInput = document.getElementById('email');
var githubInput = document.getElementById('username');

btn.addEventListener('click', (e) =>{
	e.preventDefault();
	var nameValue = nameInput.value;
	var emailValue = emailInput.value;
	var githubValue = githubInput.value;

	// Set ticket values
	document.querySelector(".ticket__username").innerText = nameValue;
	document.querySelector(".ticket__full-name").innerText = nameValue;
	document.querySelector(".ticket__email").innerText = emailValue;
	document.querySelector(".ticket__github-username").innerText = githubValue;
	
	// Hide form and header, show ticket
	form.style.display = "none";
	header.style.display = "none";
	document.querySelector(".ticket").style.display = "flex";




});

const form = document.getElementById('ticketForm');
const header = document.querySelector(".header__text");
const btn = document.querySelector(".generate-ticket");
const fileInput = document.getElementById('file');

// Custom upload button logic
document.addEventListener('DOMContentLoaded', function() {
	var uploadBtn = document.getElementById('customUploadBtn');
	if (uploadBtn && fileInput) {
		uploadBtn.addEventListener('click', function() {
			fileInput.click();
		});
	}
});

// file input uploded success alert
fileInput.addEventListener('change', function() {
	if (fileInput.files && fileInput.files.length > 0) {
		alert('Avatar image uploaded successfully!');
	}
});


var nameInput = document.getElementById('full-name');
var emailInput = document.getElementById('email');
var githubInput = document.getElementById('username');



btn.addEventListener('click', (e) =>{
	e.preventDefault();
	var nameValue = nameInput ? nameInput.value.trim() : '';
	var emailValue = emailInput ? emailInput.value.trim() : '';
	var githubValue = githubInput ? githubInput.value.trim() : '';

	// Check html form validation
	if (!form.checkValidity()) {
		form.reportValidity();
		return;
	}else{
		console.log("Form is valid");
	}

	// avatar file validation
	if (!fileInput.files || fileInput.files.length === 0) {
		alert('Please upload an avatar image.');
		customUploadBtn && customUploadBtn.focus();
		return;
	}

	// Set ticket values
	document.querySelector(".ticket__username").innerText = nameValue;
	document.querySelector(".ticket__full-name").innerText = nameValue;
	document.querySelector(".ticket__email").innerText = emailValue;
	document.querySelector(".ticket__github-username").innerText = githubValue;
	
	// show avatar preview if file selected
	if (fileInput && fileInput.files && fileInput.files[0]) {
		const reader = new FileReader();
		reader.onload = function(evt) {
			const img = document.querySelector('.ticket__avatar-image');
			if (img) img.src = evt.target.result;
		};
		reader.readAsDataURL(fileInput.files[0]);
	}


	// Hide form and header, show ticket
	form.style.display = "none";
	header.style.display = "none";
	document.querySelector(".ticket").style.display = "flex";




});

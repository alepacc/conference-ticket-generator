const form = document.getElementById('ticketForm');
const header = document.querySelector(".header__text");
const btn = document.querySelector(".generate-ticket");
const fileInput = document.getElementById('file');
const inputAvatarImg = document.querySelector('.ticket-form__file');
const uploadBtn = document.getElementById('customUploadBtn');
const avatarBtns = document.querySelector(".preview-button");
const uploadText = document.querySelector(".upload-text");


// Custom upload area logic
document.addEventListener('DOMContentLoaded', function() {
	if (uploadBtn || fileInput) { 
		inputAvatarImg.addEventListener('click', function(e) {
			if (fileInput.files.length === 0) {
				console.log('Upload button clicked');
				fileInput.click();
			}
		});
	}
});

// preview avatar image form
const removeAvatar = document.getElementById('removeImgBtn');
const changeAvatar = document.getElementById('changeImgBtn');
const uploadImg = document.querySelector('.upload-icon');

// button to change avatar image 
changeAvatar.addEventListener('click', function(e) {
	e.preventDefault();
	if (fileInput) {
		fileInput.click();
	}
});

// button to remove avatar image
removeAvatar.addEventListener('click', function(e){
	e.preventDefault();
	avatarBtns.style.display = 'none';
	uploadText.style.display = 'block';
	// restore original img
	uploadImg.src = "/assets/images/icon-upload.svg";
	// delete uploded file
	fileInput.value = '';
	e.stopPropagation();
});


// file input uploded success 
fileInput.addEventListener('change', function() {
	
	if (fileInput.files && fileInput.files.length > 0) {
		const reader = new FileReader();
		reader.onload = function(evt) {
			if (uploadImg) uploadImg.src = evt.target.result, console.log('Avatar image uploaded successfully!')	;
			uploadText.style.display = 'none';
			avatarBtns.style.display = 'block';
		};
		reader.readAsDataURL(fileInput.files[0]);
		// alert('Avatar image uploaded successfully!');
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
	if (fileInput) {
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

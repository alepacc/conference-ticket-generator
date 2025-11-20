const form = document.getElementById('ticketForm');
const header = document.querySelector(".header__text");
const btn = document.querySelector(".generate-ticket");
const fileInput = document.getElementById('file');
const inputAvatarImg = document.querySelector('.ticket-form__file');
const uploadBtn = document.getElementById('customUploadBtn');
const avatarBtns = document.querySelector(".preview-button");
const uploadText = document.querySelector(".upload-text");

const orange_500 =  "hsl(7, 88%, 67%)";


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

// drag and drop functionality
if (inputAvatarImg) {
	inputAvatarImg.addEventListener('dragover', function(e) {
		e.preventDefault();
		inputAvatarImg.classList.add('dragover');
	});

	inputAvatarImg.addEventListener('drop', function(e) {
		e.preventDefault();
		inputAvatarImg.classList.remove('dragover');
		const files = e.dataTransfer.files;
		if (files.length > 0) {
			if (fileInput)
			fileInput.files = files;
			const event = new Event('change');
			fileInput.dispatchEvent(event);
		}
	});
}

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
	uploadImg.src = "./assets/images/icon-upload.svg";
	// delete uploded file
	fileInput.value = '';
	e.stopPropagation();
});


// file input uploded success 
fileInput.addEventListener('change', function() {
	
	if (fileInput.files && fileInput.files.length > 0) {
		if (validateImg()){
			const reader = new FileReader();
			reader.onload = function(evt) {
				if (uploadImg) uploadImg.src = evt.target.result, console.log('Avatar image uploaded successfully!')	;
				uploadText.style.display = 'none';
				avatarBtns.style.display = 'block';
			};
			reader.readAsDataURL(fileInput.files[0]);
			// alert('Avatar image uploaded successfully!');
		}
		
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


	pattern = "^[^ ]+@[^ ]+\.[a-z]{2,3}$";
	var errorEmail = document.querySelector(".error-email");
	var inputEmail = document.querySelector('.input-email');
	if (!emailValue.match(pattern)) {
		errorEmail.style.display = 'flex';
		inputEmail.style.margin = '0';
		inputEmail.style.border = '1px solid '+orange_500;
		return;
	}else if(emailValue.match(pattern)) {
		errorEmail.style.display = 'none';
		inputEmail.style.margin = '';
		inputEmail.style.border = '';
	}

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


// JS validation for file input (avatar image)

const infoIcon = document.querySelector('.info-icon');

function validateImg() {
	var file = fileInput.files[0];
	var validTypes = ['image/jpeg', 'image/png'];
	const maxSize = 500 * 1024; // 500KB

	if (file) {
		console.log('Selected file size:', file.size, 'max-size:', maxSize);
		const errorText = document.querySelector('.error');
		const text = document.querySelector('.text');
		if (file.size > maxSize) {
			// File too large
			fileInput.value = '';
			errorText.style.display = 'block';
			text.style.display = 'none';
			infoIcon.style.backgroundColor = orange_500;
			console.log('File too large');
			return false;
		}
		else { 
			text.style.display = 'block';
			errorText.style.display = 'none';
			infoIcon.style.backgroundColor = '';
			return true;
		}
	}
	
}

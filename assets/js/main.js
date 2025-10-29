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

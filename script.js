// modal section Desktop

document.getElementById('trash').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.cancel').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});

// modal section Mobile

document.getElementById('trash-mobile').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.cancel').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});

// user reply Desktop starts here

document.getElementById('user-reply-amyrobson').addEventListener("click", function() {
	document.querySelector('.user--desktop--amyrobson').style.display = "flex";
});
document.getElementById('user-reply-maxblagun').addEventListener("click", function() {
	document.querySelector('.user--desktop--maxblagun').style.display = "flex";
});
document.getElementById('user-reply-ramsesmiron').addEventListener("click", function() {
	document.querySelector('.user--desktop--ramsesmiron').style.display = "flex";
});

// user reply desktop ends here

// user reply mobile starts here

document.getElementById('user-reply-mobile-amyrobson').addEventListener("click", function() {
	document.querySelector('.user--mobile--amyrobson').style.display = "flex";
});
document.getElementById('user-reply-mobile-maxblagun').addEventListener("click", function() {
	document.querySelector('.user--mobile--maxblagun').style.display = "flex";
});
document.getElementById('user-reply-mobile-ramsesmiron').addEventListener("click", function() {
	document.querySelector('.user--mobile--ramsesmiron').style.display = "flex";
});
document.getElementById('user-reply-mobile-juliusomo').addEventListener("click", function() {
	document.querySelector('.user--mobile--juliusomo').style.display = "flex";
});

// user reply mobile ends here

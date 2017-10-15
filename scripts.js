//Global Variables
var displayWrapper = document.querySelector('.display-wrapper');
var titleInput = document.querySelector('#title');
var urlInput = document.querySelector('#url');
var submitButton = document.querySelector('.enter-button');
titleInput.addEventListener('keyup', disable);
urlInput.addEventListener('keyup', disable);
document.querySelector('.display-wrapper').addEventListener('click', removeCard);

// submitButton.addEventListener('click', displayBookmark)
submitButton.addEventListener('click', displayError)

//Functions

//DISPLAY FUNCTION
function displayBookmark() {
	var url = document.getElementById('url').value;
	var urlTitle = document.getElementById('title').value;
	var bookmarkCard = document.createElement('div');
	urlInput.value = '';
	titleInput.value = '';
	bookmarkCard.className = 'bookmark';
	bookmarkCard.innerHTML = '<h3>'+urlTitle+'</h3><a class="user-supplied-link" href=""> '+url+'</a><div class="read-delete"><button class="left" id="read-button">Read</button><button class="right" id="delete-button">Delete</button></div>';
	displayWrapper.appendChild(bookmarkCard);
	submitButton.disabled = true;
};

function removeCard(e) {
	var target = e.target
	while (target.className !== 'display-wrapper') {
		if(target.className === 'right') {
			return target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
		}
		 target = target.parentNode.parentNode;
	}
}

$("#right-container").on('click', '#read-button', function() {
	$(this).toggleClass('left-read')
	$(this).closest('.bookmark').toggleClass('bookmark-read');
	$(this).closest('a').toggleClass('user-supplied-link-read');
})

function disable () {
	if (titleInput.value.length == 0) {
		submitButton.disabled = true;
	} else {
		submitButton.disabled = false;
	}
}

function displayError() {
	var errorDisplay = $('#error-display');
	if ($('#title').val().length === 0 && $('#url').val().length === 0) {
		errorDisplay.text("Please enter website title and url");
		$('#title').val().length = 0;
		$('#url').val().length = 0;
		return;
	} else if ($('#title').val().length === 0 ) {
		errorDisplay.text("Please enter website title")
		$('#title').val().length = 0;
	} else if ($('#url').val().length === 0) {
		errorDisplay.text("Please enter a URL")
		$('#url').val().length = 0;
	}
	else {
		displayBookmark();
		errorDisplay.text("");
	}
}


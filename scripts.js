//Global Variables
var displayWrapper = document.querySelector('.display-wrapper');
var titleInput = document.querySelector('#title');
var urlInput = document.querySelector('#url');
var submitButton = document.querySelector('.enter-button');
var bookmarkReadCount = 0;
var bookmarkCount = 0;
var bookReadCountDisplay = document.querySelector('.bookmarks-read-on-page');
var bookCountDisplay = document.querySelector('.bookmarks-on-page');

displayWrapper.addEventListener('click', removeCard);
submitButton.addEventListener('click', displayError)

$('#right-container').on('click', '#read-button', function() {
	$(this).toggleClass('left-read')
	$(this).closest('.bookmark').toggleClass('bookmark-read');
	$(this).closest('a').toggleClass('user-supplied-link-read');
	counter();
})

function counter() {
	bookmarkReadCount = document.querySelectorAll('.bookmark-read').length;
	bookmarkCount = document.querySelectorAll('.bookmark').length;
	bookReadCountDisplay.innerHTML = bookmarkReadCount;
	bookCountDisplay.innerHTML = bookmarkCount - bookmarkReadCount;
}

function countDown() {
	bookmarkReadCount = document.querySelectorAll('.bookmark-read').length;
	bookmarkCount = document.querySelectorAll('.bookmark').length;
	bookReadCountDisplay.innerHTML = bookmarkReadCount;
	 if (bookmarkCount === 0) {
		bookCountDisplay.innerHTML = 0; 
	} else {
		bookCountDisplay.innerHTML = bookmarkCount-bookmarkReadCount;
	}
}

//DISPLAY FUNCTION
function displayBookmark() {
	var url = document.getElementById('url').value;
	var urlTitle = document.getElementById('title').value;
	var bookmarkCard = document.createElement('div');
	urlInput.value = '';
	titleInput.value = '';
	bookmarkCard.className = 'bookmark';
	bookmarkCard.innerHTML = '<h3 "tabindex=1">'+urlTitle+'</h3><a class="user-supplied-link" href=""> '+url+'</a><div class="read-delete"><button class="left" id="read-button">Read</button><button class="right" id="delete-button">Delete</button></div>';
	displayWrapper.appendChild(bookmarkCard);
	bookmarkCount = document.querySelectorAll('.bookmark').length;
	bookCountDisplay.innerHTML = bookmarkCount;
};

function removeCard(e) {
	var target = e.target
	while (target.className !== 'display-wrapper') {
		if(target.className === 'right') {
			target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
			countDown();
		}
		 target = target.parentNode.parentNode;
	}
}

function displayError() {
	var titleLength = $('#title').val().length;
	var urlLength = $('#url').val().length;
	var errorDisplay = $('.error-feedback-display');
	if (titleLength === 0 && urlLength === 0) {
		errorDisplay.text('Please enter website title and url');
		titleLength = 0;
		urlLength= 0;
		return;
	} else if (titleLength === 0 ) {
		errorDisplay.text('Please enter website title')
		titleLength = 0;
	} else if (urlLength === 0) {
		errorDisplay.text('Please enter a URL')
		urlLength = 0;
	} 
		else {
		displayBookmark();
		errorDisplay.text('');
	}
}

urlInput.addEventListener('keyup', enterButton);
titleInput.addEventListener('keyup', enterButton);

function enterButton() {
	if(event.which === 13) {
		displayError();
	}
};

var clearReadButton = document.querySelector('.bookmarks-read-on-page');

clearReadButton.addEventListener('click', clearAllReadCards);

function clearAllReadCards () {
	$('.bookmark-read').remove();
	countDown();
}
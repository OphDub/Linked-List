//GLOBAL VARIABLES
var displayWrapper = document.querySelector('.display-wrapper');
var titleInput = document.querySelector('#title');
var urlInput = document.querySelector('#url');
var submitButton = document.querySelector('.enter-button');
var bookmarkReadCount = 0;
var bookmarkCount = 0;
var bookReadCountDisplay = document.querySelector('.bookmarks-read-on-page');
var bookCountDisplay = document.querySelector('.bookmarks-on-page');

var regexProtocol = /^(ftp|http|https):\/\/[^ "]+$/;
var regexDomainAddress = /^((https?|ftp|smtp)?:\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/
var userUrl = '';
var clearReadButton = document.querySelector('.bookmarks-read-on-page');

//EVENT LISTENERS
displayWrapper.addEventListener('click', removeCard);
submitButton.addEventListener('click', displayError);
urlInput.addEventListener('keyup', enterButton);
titleInput.addEventListener('keyup', enterButton);
clearReadButton.addEventListener('click', clearAllReadCards);
//FUNCTIONS
$('#right-container').on('click', '#read-button', function() {
	$(this).toggleClass('left-read');
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

//DISPLAY BOOKMARK FUNCTION
function displayBookmark(userUrl) {
	var urlTitle = document.getElementById('title').value;
	var bookmarkCard = document.createElement('div');
	urlInput.value = '';
	titleInput.value = '';
	bookmarkCard.className = 'bookmark';
	bookmarkCard.innerHTML = '<h3>'+urlTitle+'</h3><a class="user-supplied-link" href=""> '+userUrl+'</a><div class="read-delete"><button class="left" id="read-button">Read</button><button class="right" id="delete-button">Delete</button></div>';
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
		errorDisplay.text('Please enter website title');
		titleLength = 0;
	} else if (urlLength === 0) {
		errorDisplay.text('Please enter a URL');
		urlLength = 0;

//REGEX VALIDATION OF URL
	} else if (regexDomainAddress.test(urlInput.value) === true && regexProtocol.test(urlInput.value) === true) {
		console.log('regexDomainAddress passed. regexProtocol passed. Card appended to DOM without change.');
		displayBookmark(urlInput.value);
		errorDisplay.text('');
	} else if (regexDomainAddress.test(urlInput.value) === true && regexProtocol.test(urlInput.value) === false) {
		console.log('regexDomain passed. regexProtocol failed. Protocol appended for user.');
		var correctedUrl = appendUrlFront(urlInput.value);
		url = userUrl;
		console.log(userUrl);
		displayBookmark(userUrl);
		titleInput.value = '';
		urlInput.value = '';
	} else if (regexDomainAddress.test(urlInput.value) === false && regexProtocol.test(urlInput.value) === true) {
		console.log('regexProtocol passed. regexDomainAddress failed');
		errorDisplay.text('Please enter a valid URL');
		titleInput.value = '';
		urlInput.value = '';
	} else {
		console.log('Jon Snow, you know nothing.');
		errorDisplay.text('Please enter a valid URL');
		titleInput.value = '';
		urlInput.value = '';
	}
};

function appendUrlFront (value) {
	if (value && !value.match(/^.+:\/\/.*/)) {
		userUrl = 'http://' + value;
	}
};


function enterButton() {
	if(event.which === 13) {
		displayError();
		document.getElementById('title').focus();
	}
};

function clearAllReadCards () {
	$('.bookmark-read').remove();
	countDown();
};
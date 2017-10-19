//GLOBAL VARIABLES
var displayWrapper = document.querySelector('.display-wrapper');
var titleInput = document.querySelector('#title');
var urlInput = document.querySelector('#url');
var submitButton = document.querySelector('.enter-button');
var bookmarkReadCount = 0;
var bookmarkCount = 0;
var bookReadCountDisplay = document.querySelector('.bookmarks-read-on-page');
var bookCountDisplay = document.querySelector('.bookmarks-on-page');
var clearReadButton = document.querySelector('.bookmarks-read-on-page');

//EVENT LISTENERS
urlInput.addEventListener('keyup', enterButton);
titleInput.addEventListener('keyup', enterButton);
displayWrapper.addEventListener('click', removeCard);
submitButton.addEventListener('click', displayError)
clearReadButton.addEventListener('click', clearAllReadCards);

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

// 	var regex1 = /^(ftp|http|https):\/\/[^ "]+$/;
// 	var regex2 = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|io|COM|ORG|NET|MIL|EDU|IO)$/;

// 	if (regex1.test(urlInput.value) === false) {
// 		console.log('regex1');
// 		var correctedUrl = appendUrlFront(urlInput.value);
// 		debugger;
// 		url = thing;
// 		displayBookmark(thing);
// 		titleLength = '';
// 		urlLength = '';
// 	} else if (regex2.test(urlInput.value) === false) {
// 		console.log('regex2');
// 		errorDisplay.text('Please enter a valid URL');
// 		titleLength = '';
// 		urlLength = '';
// 	} else {
// 		displayBookmark();
// 		errorDisplay.text('');
// 		console.log('clear');
// 	}
// }

function enterButton() {
	if(event.which === 13) {
		displayError();
		document.getElementById('title').focus();
	}
};

function clearAllReadCards () {
	$('.bookmark-read').remove();
	countDown();
}

// function appendUrlFront (value) {
// 	if (value && !value.match(/^.+:\/\/.*/)) {
// 		console.log(value)
// 		thing = 'http://' + value;
// 	}
// };

// var thing = ''
// function regexFront() {
// 	var regex1 = /^(ftp|http|https):\/\/[^ "]+$/;
// 	regex1.test();
// };

// function regexBack() {
// 	var regex2 = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|io|COM|ORG|NET|MIL|EDU|IO)$/;
// 	regex2.test();
// };
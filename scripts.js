//Global Variables
var displayWrapper = document.querySelector('.display-wrapper');


//Functions

//DISPLAY FUNCTION
function displayBookmark() {
	var url = document.getElementById('url').value;
	var urlTitle = document.getElementById('title').value;
	var bookmarkCard = document.createElement('div');
	bookmarkCard.className = 'bookmark';
	bookmarkCard.innerHTML = '<h3>'+urlTitle+'</h3><a class="user-supplied-link" href=""> '+url+'</a><div class="read-delete"><button class="left" id="read-button">Read</button><button class="right" id="delete-button">Delete</button></div>';
	displayWrapper.appendChild(bookmarkCard);
	document.getElementById('read-button').addEventListener('click', markAsRead);
	document.getElementById('delete-button').addEventListener('click', deleteCard);
};

//ADD .READ CLASS ON CLICK
function markAsRead() {
	var bookmarkElement = document.querySelector('.bookmark');
	var readButton = document.getElementById('read-button');
	var urlStyle = document.getElementById('url');
	bookmarkElement.classList.toggle('bookmark-read');
	urlStyle.classList.toggle('user-supplied-link-read');
	readButton.classList.toggle('left-read');
}

//DELETE CARD
function deleteCard() {
	console.log('Delete attempt');
	this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}

//DISPLAY BOOKMARK LISTENER
document.querySelector('.enter-button').addEventListener('click', function() {
	displayBookmark();
}) 


//Global Variables
// var enterButton = document.querySelector('.enter-button');
var url = document.getElementById('url');
var urlTitle = document.getElementById('title');
var bookmarkCard
var displayWrapper = document.querySelector('.display-wrapper');
var readButton 

//Functions
function displayBookmark() {
	bookmarkCard = document.createElement('div');
	bookmarkCard.className = 'bookmark';
	bookmarkCard.innerHTML = '<h3>'+urlTitle+'</h3><a class="user-supplied-link" href=""> '+url+'</a><div class="read-delete"><button class="left" id="read-button" href="">Read</button><button class="right" href="">Delete</button></div>';
	readButton = document.getElementById('read-button');
	var bookmarkElement = document.querySelector('.bookmark');
	displayWrapper.appendChild(bookmarkCard);
};

function markAsRead() {
	bookmarkElement.className += 'bookmark-read';
	url.className += 'user-supplied-link-read';
	readButton.className += 'left-read';
	readButton.innerHTML = 'It worked';
}

//Button

//Event Listeners

document.querySelector('.enter-button').addEventListener('click', function() {
	url = url.value;
  urlTitle = urlTitle.value;
	console.log(url, urlTitle);
	displayBookmark();
}) 

document.querySelector('.url-list').addEventListener('click', function(event) {
	if (event.target.className== 'read-button') {
		alert('it worked');
	}
});

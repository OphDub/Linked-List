//Global Variables
// var enterButton = document.querySelector('.enter-button');
var url = document.getElementById('url');
var urlTitle = document.getElementById('title');
var bookmarkCard
var displayWrapper = document.querySelector('.display-wrapper');


//Functions
function displayBookmark() {
	bookmarkCard = document.createElement('div');
	bookmarkCard.className = 'bookmark';
	bookmarkCard.innerHTML = '<h3>'+urlTitle+'</h3><a class="user-supplied-link" href=""> '+url+'</a><div class="read-delete"><button class="left" id="read-button" href="">Read</button><button class="right" href="">Delete</button></div>';
	
	displayWrapper.appendChild(bookmarkCard);

	document.getElementById('read-button').addEventListener('click', markAsRead);



	function markAsRead() {
	var bookmarkElement = document.querySelector('.bookmark');
	var readButton = document.getElementById('read-button');
	var urlStyle = document.getElementById('url');
	bookmarkElement.classList.toggle('bookmark-read');
	urlStyle.classList.toggle('user-supplied-link-read');
	readButton.classList.toggle('left-read');
}

};






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

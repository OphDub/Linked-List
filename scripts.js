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
	bookmarkCard.innerHTML = '<h3>'+urlTitle+'</h3><a class="user-supplied-link" href=""> '+url+'</a><div class="read-delete"><a class="left" href="">Read</a><a class="right" href="">Delete</a></div>';
	displayWrapper.appendChild(bookmarkCard);
	clearForm();
	clearVariables();
	console.log(url.value, urlTitle.value);
};

function clearForm() {
	url.value = '';
	urlTitle.value = '';
}

function clearVariables() {
	document.getElementById('url').value = '';
	document.getElementById('title').value = '';
}
//Button

//Event Listeners

document.querySelector('.enter-button').addEventListener('click', function() {
	url = url.value;
  urlTitle = urlTitle.value;
	console.log(url, urlTitle);
	displayBookmark();
}) 

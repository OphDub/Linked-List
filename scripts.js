//Global Variables
// var enterButton = document.querySelector('.enter-button');
var url = document.getElementById('url');
var urlTitle = document.getElementById('title');
var bookmarkCard
var displayWrapper = document.querySelector('.display-wrapper');

//Functions
function displayBookmark() {
	//bookmarkCard = '<div class="bookmark"><h3>The Website Title</h3><a class="user-supplied-link" href=""> '+url+'</a><div class="read-delete"><a class="left" href="">Read</a><a class="right" href="">Delete</a></div></div>';
	displayWrapper.innerHTML = url;
	displayWrapper.innerHTML = urlTitle;
	console.log();
};
//Button

//Event Listeners

document.querySelector('.enter-button').addEventListener('click', function() {
	url = url.value;
  urlTitle = urlTitle.value;
	console.log(url, urlTitle);
	displayBookmark();
}) 

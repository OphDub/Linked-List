//Global Variables
// var enterButton = document.querySelector('.enter-button');
var url = document.getElementById('url');
var urlTitle = document.getElementById('title');
//Functions

//Button

//Event Listeners

document.querySelector('.enter-button').addEventListener('click', function() {
	url = url.value;
  urlTitle = urlTitle.value;
	console.log(url, urlTitle)
}) 
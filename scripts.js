//Global Variables
// var enterButton = document.querySelector('.enter-button');
var url = '' ;
var urlTitle = '' ;
//Functions

//Button

//Event Listeners

document.querySelector('.enter-button').addEventListener('click', function() {
	url = document.getElementById('url').value;
	urlTitle = document.getElementById('title').value;
	console.log(url, title);
}) 
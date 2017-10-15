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
};

document.querySelector('.enter-button').addEventListener('click', function() {
	displayBookmark();
}) 

function removeCard(e) {
	var target = e.target
	while (target.className !== 'display-wrapper') {
		if(target.className === 'right') {
			return target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
		}
		 target = target.parentNode.parentNode;
	}
}

document.querySelector('.display-wrapper').addEventListener('click', removeCard);

$("#right-container").on('click', '#read-button', function() {
	$(this).toggleClass('left-read')
	$(this).closest('.bookmark').toggleClass('bookmark-read');
	$(this).closest('a').toggleClass('user-supplied-link-read');
})




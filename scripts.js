//Global Variables
var displayWrapper = document.querySelector('.display-wrapper');


//Functions

//DISPLAY FUNCTION
function displayBookmark() {
	var url = document.getElementById('url').value;
	var urlTitle = document.getElementById('title').value;
	var bookmarkCard = document.createElement('li');
	bookmarkCard.className = 'bookmark';
	bookmarkCard.innerHTML = '<h3>'+urlTitle+'</h3><a class="user-supplied-link" href=""> '+url+'</a><div class="read-delete"><button class="left" id="read-button">Read</button><button class="right" id="delete-button">Delete</button></div>';
	displayWrapper.appendChild(bookmarkCard);
	// readDeleteButtons();
	// 
};

//ADD .READ CLASS ON CLICK
// function markAsRead() {
// 	var bookmarkElement = document.querySelector('.bookmark');
// 	var readButton = document.getElementById('read-button');
// 	var urlStyle = document.getElementById('url');
// 	bookmarkElement.classList.toggle('bookmark-read');
// 	urlStyle.classList.toggle('user-supplied-link-read');
// 	readButton.classList.toggle('left-read');
// }

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
// document.querySelector('.display-wrapper').addEventListener('click', markAsRead);

$("#right-container").on('click', '#read-button', function() {
	console.log("hi")
	console.log($(this).text());
	$(this).toggleClass('left-read')
	console.log($(this).parents()[1]);
	$(this).closest('.bookmark').toggleClass('bookmark-read');
	$(this).closest('a').toggleClass('user-supplied-link-read');
	
	

})



// function markAsRead2(e) {
// 	var bookmarkElement = document.querySelector('.bookmark');
// 	var readButton = document.getElementById('read-button');
// 	var urlStyle = document.getElementById('url');
// 	var readTarget = e.target
// 		if (readTarget.className !== 'left') {
// 			return;
// 		} 
// 		if (bookmarkElement.classList.contains('bookmark-read')) {
// 					bookmarkElement.classList.remove('bookmark-read');
// 		} else {
// 					bookmarkElement.classList.add('bookmark-read');
// 		}

// 		// urlStyle.classList.toggle('user-supplied-link-read');
// 		// readButton.classList.toggle('left-read');
// 		console.log("read clicked");
// }
// 
// 	var container = document.querySelectorAll('.display-wrapper');
//for (var i =0; i <container.length; i++) {
//	document.querySelector('.left')[i].addEventListener('click', markAsRead2);
//}
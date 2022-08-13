//function for adding date 
const date = new Date();
document.getElementById('date').innerHTML = date;

//function that gives a alert box message when clicked on Buy Now button
function buttonbuy() {
	alert("The product has been bought. Thank you for buying our product.");
}

//function that gives a alert box message when clicked on Add to Wishlist button
function buttonwishlist() {
	alert("The product has been placed into your wishlist.");
}

//function that runs when clicked on Subscribe button giving a alert box depending on a condition
function subscribe() {
	var email = document.getElementById('email').value;
	if(email == ""){
		alert("Please enter the valid email address.");
	} else {
		alert("Thank you for subscribing to our newsletter.");
	}
}
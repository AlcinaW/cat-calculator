var meow = document.getElementById('screen');

// Puts text to screen, if "C", clears screen and values
function addToScreen(x) {
	meow.value += x;
	if (x === "C") {
		meow.value = "";
	}
}

function answer() {
	x = meow.value;
	x = eval(x);
	meow.value = x;
}
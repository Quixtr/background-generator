var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
};


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function randColors() {
	value1a = Math.floor(Math.random() * 255) + 1;
	value1b = Math.floor(Math.random() * 255) + 1;
	value1c = Math.floor(Math.random() * 255) + 1;
	/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
	value2a = Math.floor(Math.random() * 255) + 1;
	value2b = Math.floor(Math.random() * 255) + 1;
	value2c = Math.floor(Math.random() * 255) + 1;
	/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
	value1 = "rgb(" + value1a + ", " + value1b + ", " + value1c + ")";
	value2 = "rgb(" + value2a + ", " + value2b + ", " + value2c + ")"
	console.log(value1);
	console.log(value2);
	body.style.background = "linear-gradient(to right, " + value1 + ", " + value2 + ")";
};

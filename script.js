var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random")

// function to change background color given 2 rbg or hex values
function setGradient(c1, c2) {
	body.style.background = 
	"linear-gradient(to right, " 
	+ c1
	+ ", " 
	+ c2
	+ ")";
	css.textContent = body.style.background + ";";
}
//update input color when the background is changed
function setInputColor(c1, c2){
	color1.value = c1;
	console.log(color1.value);
	color2.value = c2;
}

// call function on startup
setGradient(color1.value, color2.value);

//create random rgb number
function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

// Create a function to change an rgb value ( rbg(50,60,70) ) to HEX
function rgbToHex(rgbColor){

	rgbColor = rgbColor.slice(4, -1);
	var rgbColorAry = rgbColor.split(",");

	// changing each number in ary to hex
	var hexColorAry = rgbColorAry.map(function(item){
		item = parseInt(item).toString(16);
		return (item.length==1) ? "0" + item : item; // if item is length 1 return 0 + "item" else return item
	})
	var hexColor = "#" + hexColorAry.join("");

	return hexColor;
}


//Create a random button to assign two random colors to each input
button.addEventListener("click", function(){
	random1 = random_rgb();
	random2 = random_rgb();
	setGradient(random1, random2);

	// change the input colors when clicking the random button
	setInputColor(rgbToHex(random1), rgbToHex(random2));


})

// add event listeners to inputs
color1.addEventListener("input", function(){
	setGradient(color1.value, color2.value);
});
color2.addEventListener("input", function(){
	setGradient(color1.value, color2.value)
});
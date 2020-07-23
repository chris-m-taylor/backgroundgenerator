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

// call function on startup
setGradient();

//create random rgb number
function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

//Create a random button to assign two random colors to each input
button.addEventListener("click", function(){
	random1 = random_rgb();
	random2 = random_rgb();
	setGradient(random1, random2);

})

// add event listeners to inputs
color1.addEventListener("input", function(){
	setGradient(color1.value, color2.value);


});
color2.addEventListener("input", function(){
	setGradient(color1.value, color2.value)
});
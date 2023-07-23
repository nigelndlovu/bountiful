const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
    "Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

const date = new Date();
const dayName = daynames[date.getDay()];
const monthName = months[date.getMonth()];
const year = date.getFullYear();
const fulldate = `${dayName}, ${date.getDate()} ${monthName} ${year}`;
document.querySelector(".headerdate").innerHTML= fulldate;

document.querySelector('#getyear').textContent = year;

document.querySelector('#lastmod').textContent = document.lastModified;

function myText() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Read more"; 
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Read less"; 
	  moreText.style.display = "inline";
	}
}

const drinksMade = document.querySelector("#num-drinks");

let numDrinks = Number(window.localStorage.getItem("numDrinks-ls")) || 0;

function displayDrinksMade (visitsDisplay, numDrinks) {
    if (!visitsDisplay) {
        return;
    } else {
        if (numDrinks != 0) {
            visitsDisplay.textContent = numDrinks;
        } else {
            visitsDisplay.textContent = `This is your first drink made!`;
        }
    }
}

displayNumVisits(visitsDisplay, numDrinks);

numDrinks++;

localStorage.setItem("numDrinks-ls", numDrinks);
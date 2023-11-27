/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? Yes, it needs to be initialized when the page is loaded. 
// When do they need to be reset or updated? They need to be reset when the clear days button is clicked. and when the number of days button is clicked, it needs to be updated.

const rateObject = {
    'full': 35,
    'half': 20,
}
const clearDaysButton = document.getElementById("clear-button");
const days = document.getElementsByClassName("day-selector")[0];
const calculatedCost = document.getElementById("calculated-cost");

let dailyRate = rateObject['full'];
let totalCost = 0;
let dayCounter = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function toggleDays(e) {
  const clickedElement = e.currentTarget;

  if (!clickedElement.classList.contains("clicked")) {
    e.currentTarget.classList.add("clicked");
    dayCounter++;
  }

  calculate();
}


for (const child of days.children) {
  child.addEventListener("click", toggleDays);
}



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearDaysButton.addEventListener("click", function (e) {
  e.preventDefault();

  let days = document.getElementsByClassName("day-selector")[0];
  for (const child of days.children) {
    child.classList.remove("clicked");
  }

  dayCounter = 0;

  calculate();
});



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

document.getElementById('half').addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('full').classList.remove('clicked');
    e.currentTarget.classList.add('clicked');
    dailyRate = rateObject[e.currentTarget.textContent];

    calculate();
});




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
document.getElementById('full').addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('half').classList.remove('clicked');
    e.currentTarget.classList.add('clicked');
    dailyRate = rateObject[e.currentTarget.textContent];

    calculate();
});





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
  totalCost = dayCounter * dailyRate;
  calculatedCost.innerHTML = totalCost;
}


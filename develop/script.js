// variables
var currentDay = document.getElementById("currentDay");
// var tableRows = document.getElementsByTagName("td");
// var clickMe = document.querySelectorAll("click-me");
var calendar = 'file:///Users/indigofobes/Desktop/GT_Coding/plan-your-day/develop/index.html';
var form = 'form.html';
var now = moment().format("HH.mm");
var time = document.getElementsByClassName("time");

// var displayInput = document.getElementsByClassName("userEvent");


// Display current date at the top of the page
var today = moment().format("dddd, MMMM Do");
currentDay.textContent = today;


// Change the color if event is past or present
// Loop to access all elements with 'time' class.
for (var i = 0; i < time.length; i++) {
  // Get the task of the corresponding row in the same loop.
  var thisTask = document.getElementsByClassName("task");
  console.log(thisTask[i]);
  console.log(time[i].id);
  // If the time on the planner is greater than the current time, make it green (future event).
  if (time[i].id >= now) {
    thisTask[i].setAttribute("style", "background-color: rgb(118, 159, 118)");
  };
  // If the time on the planner is the hour we are in, make it red (current event).
  var roundedDown = Math.floor(now);
  if (time[i].id == roundedDown) {
    thisTask[i].setAttribute("style", "background-color: #ff6961");
  };

  // Make a variable for the save button
  var saveBtn = document.getElementsByClassName("bi-save");
  console.log(saveBtn[i]);
}

// function to handle input entries
function handleInput(event) {

  // Grab user's event with for loop

}

// Want it so that when user clicks save, we keep the task on the page, saved in local storage.
$(".bi-save").each(function handleClick(index) {
  $(".bi-save").click(handleInput());


})

// helpful documentation on bootstrap tables : https://examples.bootstrap-table.com/#methods/append.html#view-source
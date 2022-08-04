// variables
var currentDay = document.getElementById("currentDay");

// Display current date at the top of the page
var today = moment().format("dddd, MMMM Do");
currentDay.textContent = today;


// helpful documentation on bootstrap tables : https://examples.bootstrap-table.com/#methods/append.html#view-source
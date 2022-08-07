// variables
var currentDay = document.getElementById("currentDay");
var taskBox = document.querySelectorAll("task");
// var clickMe = document.querySelectorAll("click-me");
var calendar = 'file:///Users/indigofobes/Desktop/GT_Coding/plan-your-day/develop/index.html';
var form = 'form.html';


// Display current date at the top of the page
var today = moment().format("dddd, MMMM Do");
currentDay.textContent = today;

// Change the color if event is past or present
var now = moment().format("HHmm");
console.log(now);
var time = document.getElementsByClassName("time");

for (var i = 0; i < time.length; i++) {
  console.log(time[i].id);
  if (time[i].id >= now) {
    time[i].setAttribute("style", "background-color: #ff6961");
  }
  //var timeBlock = time[i].innerHTML;
  // console.log(timeBlock);
  // If time block is greater than now, make the block GREEN
}



// On click... 
/* document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){

  var addTask = document.getElementsByClassName("addTask");

  for (var i=0; i<addTask.length; i++) {
    addTask[i].addEventListener("click", function() {
      window.location.replace(form);
    });
};
}; */



// Create a function that allows user input into the form



// <script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
//(function() {
 // 'use strict';
 // window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
   // var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    //var validation = Array.prototype.filter.call(forms, function(form) {
      //form.addEventListener('submit', function(event) {
        //if (form.checkValidity() === false) {
          //event.preventDefault();
          //event.stopPropagation();
        //}
        //form.classList.add('was-validated');
    //  }, false);
   // });
 // }, false);
//})();
//</script>

// helpful documentation on bootstrap tables : https://examples.bootstrap-table.com/#methods/append.html#view-source
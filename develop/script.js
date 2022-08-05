// variables
var currentDay = document.getElementById("currentDay");
var taskBox = document.querySelectorAll("task");
var clickMe = document.querySelectorAll("click-me");
var hiThere = document.getElementById("hello");


// Display current date at the top of the page
var today = moment().format("dddd, MMMM Do");
currentDay.textContent = today;

console.log(taskBox);
// Click event listener
if (hiThere){
hiThere.addEventListener("click", function() {
    console.log("hello");
});
};
//$(".click-me").click(function() {
 //   console.log("hello");
//});

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
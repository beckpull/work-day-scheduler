// Wraps all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  setTime();

  // Adds a listener for click events on the save button. 

  var saveBtns = $('.saveBtn');

  saveBtns.on('click', function() {

      var parentElement = $(this).closest('.time-block');

      var toDo = parentElement.find('textarea').val();
  
      var parentId = parentElement.attr('id');
      localStorage.setItem(parentId, toDo);
      console.log(parentId + ' ' + toDo)
  });
  

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  var currentHour = dayjs().hour();


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this? 



  // Displays the current date in the header of the page.

  function setTime() {
    timerInterval = setInterval(function() {
      var today = dayjs().format('dddd MMMM DD, YYYY HH:mm:ss');
      $('#currentDay').text(today);
    }, 1000);
  }

});

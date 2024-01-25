// Wraps all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.

$(function () {
  setTime();

  // Adds a listener for click events on the save button. 

  var saveBtns = $('.saveBtn');

  saveBtns.on('click', function() {

      var parentElement = $(this).closest('.time-block');

      var toDo = parentElement.find('textarea').val();
  
      var parentId = parentElement.attr('id');
      localStorage.setItem(parentId, toDo);
  });
  

  // Applies the past, present, or future class to each time block by comparing the id to the current hour.

  var currentHour = dayjs().hour();

  $('.time-block').each(function() {

      var elementId = $(this).attr('id');
      var hourNumber = parseInt(elementId.split('-')[1]);

      if (hourNumber < currentHour) {
          $(this).addClass('past');
      } else if (hourNumber === currentHour) {
          $(this).addClass('present');
      } else {
          $(this).addClass('future');
      }
  });

  // Gets any user input that was saved in localStorage and sets the values of the corresponding textarea elements.

  $('.time-block').each(function() {

    var parentElement = $(this);
    var parentId = parentElement.attr('id');
    var toDos = localStorage.getItem(parentId);

    if (toDos !== null && toDos !== undefined) {
      parentElement.find('textarea').val(toDos);
    }

  })

  // Displays the current date in the header of the page.

  function setTime() {
    
    timerInterval = setInterval(function() {
      var today = dayjs().format('dddd MMMM DD, YYYY HH:mm:ss');
      $('#currentDay').text(today);
    }, 1000);
  }

});

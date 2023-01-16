

$(document).ready(function () {
  $(function app() {

    // adds event listener to all save buttons 
    $('.saveBtn').on('click', (event) => {
    // grabs the button clicked 
      let curButton = $(event.currentTarget);
      // grabs the id of the button clicked 
      let curButtonId = $(curButton).attr('id')
      // grabs the block container of the current button 
      let curButtonContainer = `#${curButtonId}-container`
      // grabs the textarea associated with the current container
      let curTextarea = $(curButtonContainer).find('textarea')
      // gets the value from that container
      let valueOfTextarea = $(curTextarea).val()
      // set the text value to be associated with the container it was saved in 
      localStorage.setItem(curButtonId, valueOfTextarea)
    })

      // saves the text content to the associated container  
      const hour9Text = localStorage.getItem('hour-9')
      $('#hour-9-text').text(hour9Text)
      const hour10Text = localStorage.getItem('hour-10')
      $('#hour-10-text').text(hour10Text)
      const hour11Text = localStorage.getItem('hour-11')
      $('#hour-11-text').text(hour11Text)
      
      
    
   /*
this part:
2. loop through the array of time block input elements and inside the loop:
    a. do localstorage.getItem('hour-9') (for example)
    b. if that value exists, make the textcontent equal to it
    c. do nothing if the value doesn't exist
   */
  
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    
    let currentDayAndTime = dayjs()
    $('#currentDay').text(currentDayAndTime)
  });
});

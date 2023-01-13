

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
      valueOfTextarea = $(curTextarea).val()
      

      localStorage.setItem("text", valueOfTextarea)
      let test = localStorage.getItem('text')
      curButtonContainer.textContent = test
     

      
      
    // Set the textarea value to the saved text

      // stringify the current container id 
      //let stringCurContainer = JSON.stringify(curButtonContainer)
      // saves to local storage
    
      let currentDayAndTime = dayjs()
      $('#currentDay').text(currentDayAndTime)
    })
   
  

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
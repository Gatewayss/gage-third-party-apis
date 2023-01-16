$(document).ready(function () {
  $(function app() {

    // adds event listener to all save buttons 
    $('.saveBtn').on('click', (event) => {
    // grabs the button clicked 
      const curButton = $(event.currentTarget);
      // grabs the id of the button clicked 
      const curButtonId = $(curButton).attr('id')
      // grabs the block container of the current button 
      const curButtonContainer = `#${curButtonId}-container`
      // grabs the textarea associated with the current container
      const curTextarea = $(curButtonContainer).find('textarea')
      // gets the value from that container
      const valueOfTextarea = $(curTextarea).val()
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
      const hour12Text = localStorage.getItem('hour-12')
      $('#hour-12-text').text(hour12Text)
      const hour1Text = localStorage.getItem('hour-1')
      $('#hour-1-text').text(hour1Text)
      const hour2Text = localStorage.getItem('hour-2')
      $('#hour-2-text').text(hour2Text)
      const hour3Text = localStorage.getItem('hour-3')
      $('#hour-3-text').text(hour3Text)
      const hour4Text = localStorage.getItem('hour-4')
      $('#hour-4-text').text(hour4Text)
      const hour5Text = localStorage.getItem('hour-5')
      $('#hour-5-text').text(hour5Text)
     
      
    
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    
    
    const currentDayAndTime = dayjs()
    $('#currentDay').text(currentDayAndTime)
  });
});

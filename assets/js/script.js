//function for save button.
function saveButton(){
  //saves the value of the time attribute associated with the save button pressed.
  let hour = $(this).parent().attr("time");
  //saves the text value associated with the save button pressed.
  let text = $(this).siblings("textarea").val();
  //saves the the time and text object to local storage.
  localStorage.setItem(hour, text);
}
//function for checking whats inside local storage.
function checkStor(){

  for(let i = 09 ; i <= 17 ; i++){ 
      //saves the text value associated with each time value.
      //.padStart is used to add a 0 in front of the initial 9 value.
      let x = localStorage.getItem(String(i).padStart(2, '0'));
      //prints any saved text entries 
     $("[time='" + String(i).padStart(2, '0') + "'] .description").val(x); 
  }
}

$(function () {
   //create variable with the date value of the current day.
   let curDay = dayjs().format("MMMM DD, YYYY")
   //gets time value
   let curTime = dayjs().format('HH')
  //runs the checkStor function.
  checkStor();
  //change the text output on the html to the current date.
  $("#currentDay").text("It is: " + curDay);
  //loops through all the .time-block elements.
  $(".time-block").each(function(){ 
  //gets the associated time attribute value with whichever time-block element it is looping through.
  let inputTime = $(this).attr("time");
  //These if statements check where the time block is with relation to the current time and change the css accordingly.
  if(inputTime < curTime){
    $(this).addClass("past");
  }
  else if(inputTime === curTime){
    $(this).addClass("present");
  }
  else{
      $(this).addClass("future");
    }
  })
  //checks for button press then runs the saveButton function.
  $(".saveBtn").click(saveButton);
});


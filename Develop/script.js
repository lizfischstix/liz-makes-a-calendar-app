
$(function dynamicCal () {
  
});

//var hour = document.section
function colorCode(){ 
  var currentHour = dayjs().hour() 
  console.log(currentHour);
  $(".time-block").each(function (){
    var blockHour = parseInt( $(this).attr("id"))
    console.log(blockHour);
    if (blockHour < currentHour){
      $(this).addClass("past")
    }
    else if (blockHour === currentHour){
      $(this).removeClass("past")
      $(this).addClass("present")
    } else {
      $(this).removeClass("past")
      $(this).removeClass("present")
      $(this).addClass("future")
    }
  })
}
colorCode()

var dateEL = $("#currentDay").text(dayjs().format("MMMM DD, YYYY [at] hh:mm a"));

function renderTime() {
  $("#currentDay").text(dayjs().format("MMMM DD, YYYY [at] hh:mm a"));
}
renderTime();
setInterval(renderTime, 1000);

// var dates = JSON.parse(localStorage.getItem("userInput"));
var textInput = document.getElementById("userInput")
//click event to save to localStorage
$(".saveBtn").on("click", function(){
    var description = $(this).siblings(".description").val();
    console.log(description);
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, description);
    //ocalStorage.setItem("userInput", JSON.stringify(dates))
})



$('#9 .description').val(localStorage.getItem('9'))
$('#10 .description').val(localStorage.getItem('10'))
$('#11 .description').val(localStorage.getItem('11'))
$('#12 .description').val(localStorage.getItem('12'))
$('#13 .description').val(localStorage.getItem('13'))
$('#14 .description').val(localStorage.getItem('14'))
$('#15 .description').val(localStorage.getItem('15'))
$('#16 .description').val(localStorage.getItem('16'))
$('#17 .description').val(localStorage.getItem('17'))
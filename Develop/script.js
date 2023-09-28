
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
// $("button").click(function(event){
// event.preventDefault();
// });

var dateEL = $("#currentDay").text(dayjs().format("MMMM DD, YYYY [at] hh:mm a"));

function renderTime() {
  $("#currentDay").text(dayjs().format("MMMM DD, YYYY [at] hh:mm a"));
}
renderTime();
setInterval(renderTime, 1000);
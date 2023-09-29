
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

var dates = JSON.parse(localStorage.getItem("userInput"));
var textInput = document.getElementById("userInput")
document.getElementById("saveBtn").addEventListener("click", function(e){
    e.preventDefault();
    var userInput = {
        user: document.getElementById("userInput").value
    }
    console.log(userInput);
    
    localStorage.setItem("userInput", JSON.stringify(dates))
    renderScore();
})

function renderScore(){
textInput.innerHTML = "";
    for (var i = 0; i < userInput.length; i++) {
        console.log(dates[i]);;
    }
}

renderUserInput();
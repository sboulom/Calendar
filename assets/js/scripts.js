var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var currentHour = moment().hour()

function displayHour(){
    for (let index = 0; index < workHours.length; index++) {
      var row = $("<div class = 'row'>") //dynamic < > 
      var col1 = $("<div class = 'col-sm-2 text-right'>") //move text to right label essentially
      var getWorkHour = workHours[index] + "A.M."
      if (workHours[index] >= 12) {      
        getWorkHour= workHours[index] + "P.M."
        if (workHours[index] >= 13) {
          getWorkHour = workHours[index] - 12+ "P.M." //convert to 1pm etc
        }
      }
      col1.append(getWorkHour)
      var col2 = $("<div class = 'col-sm-8'>")

      var textarea= $("<textarea>") //create element
      textarea.attr("id", "textarea" + index) //created new id each comming out unique + 0123 etc
      textarea.addClass("form-control")

      if (currentHour > workHours[index]) {    ///need index
        textarea.addClass("bg-secondary")
  
      }
      if(currentHour === workHours[index]){
        textarea.addClass("bg-danger")
      }

      if(currentHour < workHours[index]){
        textarea.addClass("bg-success")
      }

      var getTextArea = localStorage.getItem("textarea"+ index)
      textarea.text(getTextArea) //display get item in local storage
      col2.append(textarea)
      var col3 =$("<div class ='col-sm-2'>")
      var button = $("<button>") //important
      button.addClass("saveBtn")
      button.text("SAVE")
      col3.append(button) //no"
      row.append(col1, col2, col3)
      $("#planner").append(row) // # selecting
      


    }

}

displayHour()



$(".saveBtn").on("click", function(){
  for (let index = 0; index < workHours.length; index++) {
     var getTextArea =  $("#textarea" + index).val()
    localStorage.setItem("textarea" + index, getTextArea)
    
  }

})
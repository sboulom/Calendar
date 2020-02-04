
// need field Input
// current day
// should display business hours 9-5 hours with save button
// should display 1 hour slots and color coded
// each time slot should change colors from past present time and future
// dynamically updated with html, css and jquery
// need the time
// store to local storage
// user input stored to local storage



$(document).ready(function(){

  var dataStored0 = localStorage.getItem("hour0")
  var dataStored1 = localStorage.getItem("hour1")
  var dataStored2 = localStorage.getItem("hour2")
  var dataStored3 = localStorage.getItem("hour3")
  var dataStored4 = localStorage.getItem("hour4")
  var dataStored5 = localStorage.getItem("hour5")
  var dataStored6 = localStorage.getItem("hour6")
  var dataStored7 = localStorage.getItem("hour7")
  var dataStored8 = localStorage.getItem("hour8")

  if(dataStored0 === null){
    dataStored0 = ""
  } 
  if(dataStored1 === null){
    dataStored1 = ""
  }
  if(dataStored2 === null){
    dataStored2 = ""
  }
  if(dataStored3 === null){
    dataStored3 = ""
  }
  if(dataStored4 === null){
    dataStored4 = ""
  }
  if(dataStored5 === null){
    dataStored5 = ""
  }
  if(dataStored6 === null){
    dataStored6 = ""
  }
  if(dataStored7 === null){
    dataStored7 = ""
  }
  if(dataStored8 === null){
    dataStored8 = ""
  }

  var inputField9am = $("#hour0")
  var inputField10am = $("#hour1")
  var inputField11am = $("#hour2")
  var inputField12pm = $("#hour3")
  var inputField1pm = $("#hour4")
  var inputField2pm = $("#hour5")
  var inputField3pm = $("#hour6")
  var inputField4pm = $("#hour7")
  var inputField5pm = $("#hour8")
  inputField9am.val(dataStored0)
  inputField10am.val(dataStored1)
  inputField11am.val(dataStored2)
  inputField12pm.val(dataStored3)
  inputField1pm.val(dataStored4)
  inputField2pm.val(dataStored5)
  inputField3pm.val(dataStored6)
  inputField4pm.val(dataStored7)
  inputField5pm.val(dataStored8)


  $("#btn0").on("click", function(){

    var inputFieldValue0 = $("#hour0").val()
    localStorage.setItem("hour0", inputFieldValue0)
  })

  $("#btn1").on("click", function(){

    var inputFieldValue1 = $("#hour1").val()
    localStorage.setItem("hour1", inputFieldValue1)
  })
  $("#btn2").on("click", function(){

    var inputFieldValue2 = $("#hour2").val()
    localStorage.setItem("hour2", inputFieldValue2)
  })
  $("#btn3").on("click", function(){

    var inputFieldValue3 = $("#hour3").val()
    localStorage.setItem("hour3", inputFieldValue3)
  })
  $("#btn4").on("click", function(){

    var inputFieldValue4 = $("#hour4").val()
    localStorage.setItem("hour4", inputFieldValue4)
  })
  $("#btn5").on("click", function(){

    var inputFieldValue5 = $("#hour5").val()
    localStorage.setItem("hour5", inputFieldValue5)
  })
  $("#btn6").on("click", function(){

    var inputFieldValue6 = $("#hour6").val()
    localStorage.setItem("hour6", inputFieldValue6)
  })
  $("#btn7").on("click", function(){

    var inputFieldValue7 = $("#hour7").val()
    localStorage.setItem("hour7", inputFieldValue7)
  })
  $("#btn8").on("click", function(){

    var inputFieldValue8 = $("#hour8").val()
    localStorage.setItem("hour8", inputFieldValue8)
  })



//   var x = moment().hour()

//   if(x > 9 ){
//     $("#hour0").addClass("afterHours")
//     $("#hour0").attr("disabled", true)
//   }
//   if(x > 10 ){
//     $("#hour1").addClass("afterHours")
//     $("#hour1").attr("disabled", true)
//   }
//   if(x > 11 ){
//     $("#hour2").addClass("afterHours")
//     $("#hour2").attr("disabled", true)
//   }
//   if(x > 12 ){
//     $("#hour3").addClass("afterHours")
//     $("#hour3").attr("disabled", true)
//   }
})
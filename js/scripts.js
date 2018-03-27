$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault
    var userCountUp = $("input#CountUp").val();
    var userCountBy = $("input#CountBy").val();
    var CountingUp = parseInt(userCountUp);
    var CountingBy = parseInt(userCountBy);
    for(var i =0; i<=CountingUp; i+=CountingBy){
      console.log(i);
    }

  document.getElementById('Input').innerHTML = Output;
    // console.log(CountingUp, CountingBy);


  });
});

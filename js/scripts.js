$(document).ready(function() {
  $("form#transportation-survey").submit(function(event){
    $("input:checkbox[name=group1]:checked").each(
      function(){
        var transportationChoice = $(this).val();
        $("#paragraph1").append(transportationChoice + "<br>");
        $("#fun-survey").show();

      });
    event.preventDefault();
  });
    $("form#fun-survey").submit(function(event){
      $("input:checkbox[name=group2]:checked").each(function(){
        var funTransportationChoice = $(this).val();
      $("#paragraph2").append(funTransportationChoice + "</br>");
    });
        event.preventDefault();
  });
  });

$(document).ready(function() {
  $("h1").animate({
    width: 100,
    opacity: 0.3
  }, 1000);


  $(document).ready(function(){
      $("p").dblclick(function(){
          $(this).hide();
      });
  });

  $(document).ready(function(){
      $("#p1").mouseleave(function(){
          $(this).hide();
      });
  })

  $(document).ready(function(){
      $("button").click(function(){
          $("#div1").fadeOut();
          $("#div2").fadeOut("slow");
          $("#div3").fadeOut(3000);
      });
  });

  $(".box-1").animate({
    opacity: 0.5
  }, 2000);

  $(".box-2").animate({
    opacity: 0.5
  }, 2000);

  $(".box-3").click(function() {
    alert("Hello World!");
  });

  $(".box-4").slideUp(1000, function() {
    $(".box-4").slideDown(1000);
  });
});

$(".box-5").click(function() {
  $("box-5").slideDown();
});

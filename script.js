$(document).ready(function () {
  $(".address").click(function () {
    $(this).hide();
  });
  $(".courses").click(function () {
    $(this).hide();
  });
  $(".show").click(function () {
    $("p").show();
  });

  $(".name").mouseenter(function () {
    $(this).css("color", "blue");
  });

  $(".name").mouseleave(function () {
    $(this).css("color", "black");
  });

  $(".address").hover(
    function () {
      alert("you hovered on address");
    },
    function () {
      alert("You are leaving address now.");
    }
  );
  $(".text").click(function () {
    $(this).css("font-size", 30 + "px");
  });
  $(".text").dblclick(function () {
    $(this).css("font-size", 20 + "px");
  });
});

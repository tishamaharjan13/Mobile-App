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

$(document).ready(function () {
  $("#box").click(function () {
    var div = $("#box");
    div.animate({ height: "250px", opacity: 0.7 }, "slow", function () {
      div.css({
        color: "yellow",
        fontSize: "30px",
      });
    });

    div.animate({ width: "250px", opacity: 0.5 }, "slow", function () {
      div.css({
        color: "blue",
        fontSize: "45px",
      });
    });
    div.animate({ height: "150px", opacity: 0.3 }, "slow", function () {
      div.css({
        color: "black",
        fontSize: "30px",
      });
    });
    div.animate({ width: "150px", opacity: 1 }, "slow", function () {
      div.css({
        color: "white",
        fontSize: "20px",
      });
    });
  });
});

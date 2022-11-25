$("#Nav-ito a")
  .each(function(i) {
    if (i != 0) {
      $("#audio")
        .clone()
        .attr("id", "audio" + i)
        .appendTo($(this).parent());
    }
    $(this).data("beeper", i);
  })
  .mouseenter(function() {
    $("#audio" + $(this).data("beeper"))[0].play();
  });
$("#audio").attr("id", "audio0");

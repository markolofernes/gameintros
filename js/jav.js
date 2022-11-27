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

$("#itemSounds a")
  .each(function(i) {
    if (i != 0) {
      $("#audiox")
        .clone()
        .attr("id", "audiox" + i)
        .appendTo($(this).parent());
    }
    $(this).data("beeper", i);
  })
  .mouseenter(function() {
    $("#audiox" + $(this).data("beeper"))[0].play();
  });
$("#audiox").attr("id", "audiox0");


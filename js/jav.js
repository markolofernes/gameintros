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

var w = window.innerWidth;
var h = window.innerHeight;

function myFunction() {
  document.getElementById("getheightIframe").style.height = h + 150 + "px";
}
window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#?';
        window.location.reload();
    }
}
$(document).ready(function () {
  let totalEmojis = 12; 
  let clickedEmojis = 0;

  $(".secret-button").click(function () {
    if (!$(this).hasClass("clicked")) {
      $(this).addClass("clicked");
      clickedEmojis++;

      if (clickedEmojis === totalEmojis) {
        $("#congratulations").fadeIn();
        confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 },
            });
        $("#draggable-trophy").fadeIn().draggable();
      }
    }
  });
});
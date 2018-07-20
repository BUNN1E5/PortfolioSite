document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-visible');
        $target.classList.toggle('is-visible');

      });
    });
  }

});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

/*Github.userProfile({
  username: "BUNN1E5",
  OAuth: '766a285203d3508c807960883ace3e44fb7d19c9', //Oh lol I'm dumb
  selector: "#myProfile"
});*/

Github.userActivity({
    username: 'BUNN1E5',
    selector: '#myProfile'
});

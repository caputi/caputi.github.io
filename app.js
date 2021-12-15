//  THEME

    // theme variables

    const body = document.body;
    const theme = localStorage.getItem('theme');
    const themeButton = document.getElementById('theme-button');

    // load cached theme

    if (theme == 'dark') {

        body.classList.replace('light', 'dark');
        themeButton.classList.toggle('slide-animation');

    }

    // theme switching button

    themeButton.onclick = function themeSwitch() {

        // light to dark
        if (body.classList.contains('light')) {

            body.classList.replace('light', 'dark');
            localStorage.setItem('theme', 'dark');
            themeButton.classList.toggle('slide-animation');
        }

        // dark to light
        else if (body.classList.contains('dark')) {

            body.classList.replace('dark', 'light');
            localStorage.setItem('theme', 'light');
            themeButton.classList.toggle('slide-animation');
        }
    }

// eu peguei esse código de countdown pronto

var countDownDate = new Date("Jul 1, 2022 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

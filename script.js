var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// VALUE ONE
function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

animateValue("value", 0, 264, 6000);

// VALUE TWO
function animateValue2(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

animateValue2("value2", 0, 61, 6000);

// VALUE THREE
function animateValue3(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

animateValue3("value3", 0, 3, 6000);

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

  window.addEventListener("DOMContentLoaded", function(e) {

    var stage = document.getElementById("stage");
    var fadeComplete = function(e) { stage.appendChild(arr[0]); };
    var arr = stage.getElementsByTagName("a");
    for(var i=0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
    }

  }, false);

$(document).on("scroll", function () {
var pageTop = $(document).scrollTop()
var pageBottom = pageTop + $(window).height()
var tags = $("section")

for (var i = 0; i < tags.length; i++) {
var tag = tags[i]

if ($(tag).position().top < pageBottom) {
$(tag).addClass("visible")
} else {
  $(tag).removeClass("visible")
}
}
})



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}


// Get the modal
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal 
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

function myFunction() {
  document.getElementById("schedimg").src = "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2FCopy%20of%20_DSC9115%20(1).jpg?v=1575871496646";
}
function myFunction1() {
  document.getElementById("schedimg").src = "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2FCopy%20of%20superpos1-55.JPG?v=1575871880493";
}
function myFunction2() {
  document.getElementById("schedimg").src = "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2FCopy%20of%20_DSC9081%20(3).jpg?v=1575872229640";
}
function myFunction3() {
  document.getElementById("schedimg").src = "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fsuperpos1-197.JPG?v=1575872540173";
}
function myFunction4() {
  document.getElementById("schedimg").src = "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2FCopy%20of%20_DSC8951.jpg?v=1575872620050";
}
function myFunction5() {
  document.getElementById("schedimg").src = "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2FCopy%20of%20_DSC9015.jpg?v=1575872726375";
}
function myFunction7() {
  document.getElementById("schedimg").src = "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2FCopy%20of%20_DSC9002.jpg?v=1575872727204";
}
function myFunction6() {
  document.getElementById("schedimg").src = "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2FCopy%20of%20_DSC9015.jpg?v=1575872726375";
}

function myFunctionSat() {
  document.getElementById("schedimg").src = "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2FCopy%20of%20_DSC9115%20(1).jpg?v=1575871496646";
  document.getElementById("e0").innerHTML = "Saturday Schedule";
  document.getElementById("e1").innerHTML = "10:00 AM Check In";
  document.getElementById("e2").innerHTML = "10:45 AM Opening Ceremony";
  document.getElementById("e3").innerHTML = "11:15 AM Form Teams";
  document.getElementById("e4").innerHTML = "12:00 PM Lunch; hacking begins!";
  document.getElementById("e5").innerHTML = "06:00 PM Dinner";
  document.getElementById("e6").innerHTML = "08:00 PM Women In Tech Panel";
}

function myFunctionSunday() {
  document.getElementById("schedimg").src = "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2FSuperposition-72%20(1).jpg?v=1575887047931";
  document.getElementById("e0").innerHTML = "Sunday Schedule";
  document.getElementById("e1").innerHTML = "08:30 AM Attendee Breakfast";
  document.getElementById("e2").innerHTML = "09:00 Submissions Due";
  document.getElementById("e3").innerHTML = "09:30 Judging Closes";
  document.getElementById("e4").innerHTML = "11:00 Closing Ceremony";
  document.getElementById("e5").innerHTML = "11:30 Superposition Ends";
  document.getElementById("e6").innerHTML = "";
}

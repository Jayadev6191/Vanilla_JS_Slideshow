// slide-show selection
var sliders = document.getElementsByClassName("slide-show");
var circle_container = document.getElementById("circle_container");

console.log(sliders);

for (var i = 0; i < sliders.length; i++) {
  var node = document.createElement("div");
  node.className = "p_circle";
  node.id = "c_" + i;
  node.number = i;
  circle_container.appendChild(node);
}

document.addEventListener("click", function(e) {
  if (e.target && e.target.className == "p_circle") {
    //do something
    computeScrollDirection(e.target.number);
  }
});

function computeScrollDirection(new_val) {
  var currentSlide = document.getElementsByClassName("slide-show active")[0];
  var old_val = currentSlide.id;
  console.log("new_val", new_val);
  console.log("old_val", currentSlide.id);

  if (new_val > old_val) {
    // slide right
    updateCarousel(currentSlide, new_val, "right");
  }

  if (new_val < old_val) {
    // slide left
    updateCarousel(currentSlide, new_val, "left");
  }
}

function updateCarousel(currentSlide, val, direction) {
  console.log(direction);
  currentSlide.classList.remove("active");
  direction === "right"
    ? currentSlide.classList.remove("active", "slide-right")
    : currentSlide.classList.remove("active", "slide-left");

  currentSlide.classList.add("inactive");
  sliders[val].classList.remove("inactive");
  direction === "right"
    ? sliders[val].classList.add("active", "slide-right")
    : sliders[val].classList.add("active", "slide-left");
}

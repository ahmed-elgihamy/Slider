var img = Array.from(document.querySelectorAll("img"));
var light = document.querySelector(".light");

var close = document.querySelector(".close");
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var lightBox = document.querySelector(".light-box ");
var indexPage = 0;

for (var i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function (e) {
    indexPage = img.indexOf(e.target);

    var src = e.target.src;
    lightBox.style.backgroundImage = `url(${src})`;

    light.classList.remove("d-none");
  });
}

close.addEventListener("click", closePage);

function closePage() {
  light.classList.add("d-none");
}

next.addEventListener("click", nextPage);

function nextPage() {
  indexPage++;
  if (indexPage == img.length) {
    indexPage = 0;
  }
  src = img[indexPage].src;
  lightBox.style.backgroundImage = `url(${src})`;
}

prev.addEventListener("click", prevPage);

function prevPage() {
  indexPage--;
  if (indexPage < 0) {
    indexPage = img.length - 1;
  }
  src = img[indexPage].src;
  lightBox.style.backgroundImage = `url(${src})`;
}

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key == "ArrowLeft") {
    prevPage();
  } else if (event.key == "ArrowRight") {
    nextPage();
  } else if (event.key == "Escape") {
    closePage();
  }
});

/* Get the elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

/* Build the funtions */
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

function skip() {
  // get the skip value from the dataset object of the current element
  // Change the current video time with value of skip, converting to float from string
  video.currentTime += parseFloat(this.dataset.skip);
}

// Handle volume and playback speed
function handleRangeUpdate() {
  video[this.name] = this.value;
}

// Handle video progress
function handleProgress() {
  let percent = video.currentTime / video.duration;
  percent *= 100;
  progressBar.style.flexBasis = `${percent}%`;
}

// Scrub the video progress
function scrubProgress(e) {
  let scrubTime = e.offsetX / progress.offsetWidth;
  scrubTime *= video.duration;
  video.currentTime = scrubTime;
}

/* Hook up the event listener */
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);
skipButtons.forEach(button => button.addEventListener("click", skip));

ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));

// Making scrub progress on mousedown
let mousedown = false;
progress.addEventListener("click", scrubProgress);
// If mouse is down, then only update the scrub progress
progress.addEventListener("mousemove", e => mousedown && scrubProgress(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => {
  mousedown = false;
});

/* CHALLENGE: ADD FULLSCREEN FUNCTIONALITY */

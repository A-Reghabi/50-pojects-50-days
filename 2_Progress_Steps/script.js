'use strict';

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActice = 1;

next.addEventListener('click', () => {
  currentActice++;

  if (currentActice > circles.length) {
    currentActice = circles.length;
  }

  update();
});

prev.addEventListener('click', () => {
  currentActice--;

  if (currentActice < 1) {
    currentActice = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActice) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if (currentActice === 1) {
    prev.disabled = true;
  } else if (currentActice === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

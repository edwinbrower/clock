const time = document.querySelector('#time');

function tick() {
  const now = new Date();
  time.innerHTML = now.toString().split(' ')[4];
}

setInterval(tick, 1000);

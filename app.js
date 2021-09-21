let bars = [];

window.onload = setup();

async function setup() {
  let b = document.getElementById("bars");
  let d = document.getElementById("delay");
  document.getElementById("b").innerText = b.value;
  document.getElementById("d").innerText = d.value + "ms";

  if (bars.length != parseInt(b.value)) {
    generateBars(parseInt(b.value));
  }
}

function generateBars(n = -1) {
  bars = [];
  let container = document.querySelector(".container");
  n = n < 0 ? Math.random() * 20 : n;
  for (let i = 0; i < n; i++) {
    bars.push('<div class="bar" id="' + i + '" style="height:' + Math.floor(2 + Math.random() * 98) + '%"></div>');
  }
  container.innerHTML = bars.join('');
}


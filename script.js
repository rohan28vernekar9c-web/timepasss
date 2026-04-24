let current = '0';

function toggleTheme() {
  document.body.classList.toggle('dark');
  const btn = document.querySelector('.theme-toggle');
  btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
}

function updateDisplay() {
  document.getElementById('display').textContent = current;
}

function append(val) {
  if (current === '0' && val !== '.') current = val;
  else current += val;
  updateDisplay();
}

function calculate() {
  try {
    current = String(eval(current));
  } catch {
    current = 'Error';
  }
  updateDisplay();
}

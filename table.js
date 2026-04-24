function toggleTheme() {
  document.body.classList.toggle('dark');
  const btn = document.querySelector('.theme-toggle');
  btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
}

function generateTable() {
  const num = parseInt(document.getElementById('tableNum').value);
  const output = document.getElementById('tableOutput');

  if (!num || num < 1) {
    output.innerHTML = '<p style="color:#fff;margin-top:10px;">Please enter a valid number.</p>';
    return;
  }

  let rows = '';
  for (let i = 1; i <= 10; i++) {
    rows += `<tr>
      <td>${num}</td>
      <td>×</td>
      <td>${i}</td>
      <td>=</td>
      <td class="result-col">${num * i}</td>
    </tr>`;
  }

  output.innerHTML = `
    <table>
      <thead>
        <tr>
          <th colspan="5">Table of ${num}</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>`;
}

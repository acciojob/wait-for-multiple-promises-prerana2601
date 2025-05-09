//your JS code here. If required.
const outputBody = document.getElementById("output");

function createPromise(index) {
  const delay = Math.random() * 2000 + 1000; // 1000 - 3000 ms
  return new Promise(resolve => {
    const start = performance.now();
    setTimeout(() => {
      const end = performance.now();
      const seconds = ((end - start) / 1000).toFixed(3);
      resolve({ name: `Promise ${index}`, time: parseFloat(seconds) });
    }, delay);
  });
}

// Start timer
const startAll = performance.now();

Promise.all([createPromise(1), createPromise(2), createPromise(3)])
  .then(results => {
    const endAll = performance.now();
    const totalTime = ((endAll - startAll) / 1000).toFixed(3);

    // Clear loading row
    outputBody.innerHTML = "";

    // Add each promise result
    results.forEach(result => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${result.name}</td>
        <td>${result.time.toFixed(3)}</td>
      `;
      outputBody.appendChild(row);
    });

    // Add total row
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `
      <td><strong>Total</strong></td>
      <td><strong>${totalTime}</strong></td>
    `;
    outputBody.appendChild(totalRow);
  });

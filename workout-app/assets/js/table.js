export function renderTable(data) {
  const user = document.getElementById("userFilter").value;
  const cat = document.getElementById("categoryFilter").value;
  const week = document.getElementById("weekFilter").value;

  const tbody = document.querySelector("#workoutTable tbody");
  tbody.innerHTML = "";

  const filtered = data.filter(item => {
    return (!user || item.User === user)
        && (!cat || item.Category === cat)
        && (!week || String(item.WEEK) === week);
  });

  filtered.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.User}</td>
      <td>${item.Workout}</td>
      <td>${item.Category || ""}</td>
      <td>${item["rep x weight"]}</td>
      <td>${item.Notes || ""}</td>
      <td>${item.Date}</td>
    `;
    tbody.appendChild(tr);
  });
}

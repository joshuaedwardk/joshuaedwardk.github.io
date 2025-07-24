import { getData } from './data.js';
import { renderTable } from './table.js';

export function populateFilters(data) {
  const users = new Set();
  const categories = new Set();
  const weeks = new Set();

  data.forEach(item => {
    users.add(item.User);
    if (item.Category) categories.add(item.Category);
    weeks.add(item.WEEK);
  });

  fillSelect("userFilter", [...users]);
  fillSelect("categoryFilter", [...categories]);
  fillSelect("weekFilter", [...weeks].sort((a, b) => a - b));
}

function fillSelect(id, items) {
  const select = document.getElementById(id);
  items.forEach(val => {
    const option = document.createElement("option");
    option.value = val;
    option.textContent = val;
    select.appendChild(option);
  });

  select.addEventListener("change", () => {
    renderTable(getData());
  });
}

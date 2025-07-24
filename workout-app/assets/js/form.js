import { addEntry, getData } from './data.js';
import { renderTable } from './table.js';

export function setupForm() {
  document.getElementById("entryForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = e.target;
    const newEntry = {
      User: form.User.value,
      Workout: form.Workout.value,
      Category: form.Category.value,
      Date: form.Date.value,
      "rep x weight": form.repXweight.value
    };

    addEntry(newEntry);
    renderTable(getData());
    form.reset();
  });
}

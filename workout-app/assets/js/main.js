import { loadData } from './data.js';
import { populateFilters } from './filters.js';
import { renderTable } from './table.js';
import { setupForm } from './form.js';

loadData().then(data => {
  populateFilters(data);
  renderTable(data);
});

setupForm();

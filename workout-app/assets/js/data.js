let data = [];

export async function loadData() {
  const res = await fetch("data/workouts.json");
  data = await res.json();
  return data;
}

export function getData() {
  return data;
}

export function addEntry(entry) {
  data.push(entry);
}

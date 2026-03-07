const kundliStore = new Map();

export function saveKundli(hash, data) {
  kundliStore.set(hash, data);
}
console.log("KUNDLI STORE SIZE:", kundliStore.size);

export function getKundli(hash) {
  return kundliStore.get(hash);
}

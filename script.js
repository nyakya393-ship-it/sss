function getBattles() {
  return JSON.parse(localStorage.getItem("battles") || "[]");
}

function saveBattles(data) {
  localStorage.setItem("battles", JSON.stringify(data));
}

function getBattleById(id) {
  return getBattles().find(b => b.id == id);
}

const mapFrame = document.getElementById("mapFrame");
const img = document.getElementById("img");
const stateSelect = document.getElementById("stateSelect");
const clearBtn = document.getElementById("clearAll");
const addAllBtn = document.getElementById("addAll");

const STORAGE_KEY = "map_state_positions_v1";


let statePositions = {
  Maharashtra:   { x: 46, y: 60 },
  Gujarat:       { x: 30, y: 52 },
  Rajasthan:     { x: 30, y: 36 },
  MadhyaPradesh: { x: 48, y: 50 },
  UttarPradesh:  { x: 58, y: 36 },
  Bihar:         { x: 67, y: 38 },
  WestBengal:    { x: 73, y: 45 },
  Telangana:     { x: 50, y: 62 },
  Karnataka:     { x: 46, y: 74 },
  TamilNadu:     { x: 54, y: 86 },
  Kerala:        { x: 44, y: 86 },
  Punjab:        { x: 42, y: 22 }
};


try {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) statePositions = JSON.parse(saved);
} catch (e) {
  console.warn("Storage read error");
}


function persistPositions() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(statePositions));
  } catch {}
}


function clearFlags() {
  document.querySelectorAll(".pin").forEach(p => p.remove());
}


function addFlag(state) {
  clearFlags();
  const pos = statePositions[state];
  if (!pos) return;

  const rect = img.getBoundingClientRect();

  const left = (pos.x / 100) * rect.width;
  const top  = (pos.y / 100) * rect.height;

  const flag = document.createElement("div");
  flag.className = "pin";
  flag.style.left = left + "px";
  flag.style.top  = top + "px";
  flag.innerHTML = `🚩 <span class="label">${state.replace(/([A-Z])/g,' $1').trim()}</span>`;

  mapFrame.appendChild(flag);
}


function addAllFlags() {
  clearFlags();
  const rect = img.getBoundingClientRect();

  for (let state in statePositions) {
    const pos = statePositions[state];
    const left = (pos.x / 100) * rect.width;
    const top  = (pos.y / 100) * rect.height;

    const flag = document.createElement("div");
    flag.className = "pin";
    flag.style.left = left + "px";
    flag.style.top  = top + "px";
    flag.innerHTML = `🚩 <span class="label">${state.replace(/([A-Z])/g,' $1').trim()}</span>`;
    mapFrame.appendChild(flag);
  }
}


img.addEventListener("click", function (e) {
  const state = stateSelect.value;
  if (!state) {
    alert("Select a state first");
    return;
  }

  const rect = img.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const xPct = (x / rect.width) * 100;
  const yPct = (y / rect.height) * 100;

  statePositions[state] = {
    x: parseFloat(xPct.toFixed(2)),
    y: parseFloat(yPct.toFixed(2))
  };

  persistPositions();
  addFlag(state);

  console.log("Saved:", state, statePositions[state]);
});


stateSelect.addEventListener("change", function () {
  if (this.value) addFlag(this.value);
});


clearBtn.addEventListener("click", clearFlags);
addAllBtn.addEventListener("click", addAllFlags);


window.addEventListener("resize", () => {
  if (stateSelect.value) addFlag(stateSelect.value);
});

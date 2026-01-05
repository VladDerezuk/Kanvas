const cina = document.getElementById("idk");
const shirina = document.getElementById("ino");
const visota = document.getElementById("ind");
const kartina = document.querySelector(".kartina");
const dodatokBtn = document.getElementById("int");
const sizeButtons = document.querySelectorAll(".rozmir");
const dobodn = document.getElementById("checkod");
const dobotwo = document.getElementById("checkdw");
const dobothree = document.getElementById("checktr");
let stanp = 0;
let allp = 0;
const maxw = 420;
const maxh = 420;
const buttons = {
    btno: { w: 30, h: 30, price: 100 },
    btnd: { w: 30, h: 90, price: 150 },
    btnt: { w: 90, h: 120, price: 220 },
    btnc: { w: 90, h: 150, price: 280 }
};
function upPric() {
    cina.textContent = stanp + allp;
}
function resKanv(w, h) {
    if (!w || !h) return;
    const scale = Math.min(
        maxw / w,
        maxh / h
    );
    kartina.style.width = w * scale + "px";
    kartina.style.height = h * scale + "px";
}
function resetActiveButtons() {
    sizeButtons.forEach(btn => btn.classList.remove("cina"));
}
function recalcOptions() {
    allp = 0;
    if (dobodn.checked) allp += 35;
    if (dobotwo.checked) allp += 10;
    if (dobothree.checked) allp += 40;
}
Object.entries(buttons).forEach(([id, data]) => {
    const btn = document.getElementById(id);
    btn.addEventListener("click", () => {
        shirina.value = data.w;
        visota.value = data.h;
        stanp = data.price;
        resetActiveButtons();
        btn.classList.add("cina");
        resKanv(data.w, data.h);
        recalcOptions();
        upPric();
    });
});
dodatokBtn.addEventListener("click", () => {
    const w = Number(shirina.value);
    const h = Number(visota.value);
    if (!w || !h) {
        alert("введи і то і то");
        return;
    }
    resetActiveButtons();
    stanp = Math.round(w * h * 0.04);
    resKanv(w, h);
    recalcOptions();
    updateupPricPrice();
});
[dobodn, dobotwo, dobothree].forEach(box => {
    box.addEventListener("change", () => {
        recalcOptions();
        upPric();
    });
});

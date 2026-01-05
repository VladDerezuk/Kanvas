const cina = document.getElementById("idk");
const shirina = document.getElementById("ino");
const visota = document.getElementById("ind");
const kartina = document.querySelector(".kartina");
const dodatokBtn = document.getElementById("int");
const sizeButtons = document.querySelectorAll(".rozmir");
const customSizeBtn = document.getElementById("btn5");
const customSizeBlock = document.querySelector(".sio.persh");
const dobodn = document.getElementById("checkod");
const dobotwo = document.getElementById("checkdw");
const dobothree = document.getElementById("checktr");
let stanp = 0;
let allp = 0;
let calculated = false;
const maxw = 500;
const maxh = 500;
const buttons = {
    btno: { w: 30, h: 30, price: 100 },
    btnd: { w: 30, h: 90, price: 150 },
    btnt: { w: 90, h: 120, price: 220 },
    btnc: { w: 90, h: 150, price: 280 }
};
function upPric() {
    const total = stanp + allp;
    cina.textContent = total > 0 ? total : "—";
}
function resKanv(w, h) {
    if (!w || !h) return;
    const scale = Math.min(maxw / w, maxh / h);
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
function limitSize(w, h) {
    return {
        w: Math.min(w, maxw),
        h: Math.min(h, maxh)
    };
}
Object.entries(buttons).forEach(([id, data]) => {
    const btn = document.getElementById(id);
    btn.addEventListener("click", () => {
        customSizeBlock.classList.remove("show");
        const { w, h } = limitSize(data.w, data.h);
        shirina.value = w;
        visota.value = h;
        stanp = data.price;
        calculated = true;
        resetActiveButtons();
        btn.classList.add("cina");
        resKanv(w, h);
        recalcOptions();
        upPric();
    });
});
customSizeBtn.addEventListener("click", () => {
    customSizeBlock.classList.add("show");
    resetActiveButtons();
    shirina.value = "";
    visota.value = "";
    stanp = 0;
    allp = 0;
    calculated = false;
    upPric();
});
dodatokBtn.addEventListener("click", () => {
    let w = Number(shirina.value);
    let h = Number(visota.value);
    if (!w || !h) {
        alert("Введи ширину і висоту");
        return;
    }
    const limited = limitSize(w, h);
    w = limited.w;
    h = limited.h;
    shirina.value = w;
    visota.value = h;
    stanp = Math.round(w * h * 0.04);
    calculated = true;
    resKanv(w, h);
    recalcOptions();
    upPric();
});
[dobodn, dobotwo, dobothree].forEach(box => {
    box.addEventListener("change", () => {
        if (!calculated) return;
        recalcOptions();
        upPric();
    });
});
/* ===== Shortcut bawaan (edit lewat tombol ✏️ di halaman) ===== */
const DEFAULT_SHORTCUTS = [
  { nama: "GPT a6",        url: "https://chatgpt.com/" },
  { nama: "Monev",         url: "https://beasiswaunggulan.kemendikdasmen.go.id/Monev/Account/Login" },
  { nama: "LMS Broku",     url: "https://lms.telkomuniversity.ac.id/my/" },
  { nama: "Queen bukan Q", url: "https://chat.qwen.ai/" },
  { nama: "Gemini oh gem", url: "https://gemini.google.com" },
  { nama: "TAK",           url: "https://situ-kem.telkomuniversity.ac.id/tak/auth/login" },
  { nama: "Igracias",      url: "https://igracias.telkomuniversity.ac.id/index.php?pageid=2941#" },
  { nama: "WA Kicaw",      url: "https://web.whatsapp.com" },
  { nama: "Clippo",        url: "https://clippo.id/" },
  { nama: "Ternak klip",   url: "https://app.ternakklip.com/login" },
];

/* ===== Simpan/muat dari localStorage ===== */
let shortcuts = muat();
function muat() {
  try {
    const raw = localStorage.getItem("shortcutsku");
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return [...DEFAULT_SHORTCUTS];
}
function simpan() { localStorage.setItem("shortcutsku", JSON.stringify(shortcuts)); }
function domainAman(url) { try { return new URL(url).hostname; } catch (e) { return ""; } }

/* ===== Render shortcut ===== */
const wadah = document.getElementById("shortcuts");
function render() {
  wadah.innerHTML = "";
  shortcuts.forEach((s, i) => {
    const icon = s.icon || `https://www.google.com/s2/favicons?domain=${domainAman(s.url)}&sz=128`;
    const a = document.createElement("a");
    a.className = "sc";
    a.href = s.url;
    a.innerHTML = `
      <span class="sc-icon">
        <img src="${icon}" alt="">
      </span>
      <span class="sc-label">${s.nama}</span>
      <span class="sc-tools">
        <button class="sc-edit" title="Edit">✏️</button>
        <button class="sc-del" title="Hapus">✕</button>
      </span>`;
    a.querySelector(".sc-edit").addEventListener("click", e => { e.preventDefault(); bukaModal(i); });
    a.querySelector(".sc-del").addEventListener("click", e => { e.preventDefault(); hapus(i); });
    wadah.appendChild(a);
  });

  const add = document.createElement("button");
  add.className = "sc sc-add";
  add.innerHTML = `<span class="sc-icon add-icon">＋</span><span class="sc-label">Tambah</span>`;
  add.addEventListener("click", () => bukaModal(null));
  wadah.appendChild(add);
}

/* ===== Modal tambah/edit shortcut ===== */
let editIndex = null;
const modalWrap = document.getElementById("modalWrap");
const inputNama = document.getElementById("inputNama");
const inputUrl  = document.getElementById("inputUrl");
const inputIcon = document.getElementById("inputIcon");

function bukaModal(i) {
  editIndex = i;
  document.getElementById("modalJudul").textContent = i === null ? "Tambah Shortcut" : "Edit Shortcut";
  inputNama.value = i === null ? "" : shortcuts[i].nama;
  inputUrl.value  = i === null ? "" : shortcuts[i].url;
  inputIcon.value = i === null ? "" : (shortcuts[i].icon || "");
  modalWrap.hidden = false;
  inputNama.focus();
}
function tutupModal() { modalWrap.hidden = true; }

document.getElementById("btnBatal").addEventListener("click", tutupModal);
modalWrap.addEventListener("click", e => { if (e.target === modalWrap) tutupModal(); });
document.getElementById("btnSimpan").addEventListener("click", () => {
  const nama = inputNama.value.trim();
  let url = inputUrl.value.trim();
  const icon = inputIcon.value.trim();
  if (!nama || !url) { alert("Nama dan link wajib diisi!"); return; }
  if (!/^https?:\/\//i.test(url)) url = "https://" + url;
  const data = { nama, url, icon: icon || null };
  if (editIndex === null) shortcuts.push(data);
  else shortcuts[editIndex] = data;
  simpan(); render(); tutupModal();
});

function hapus(i) {
  if (!confirm(`Hapus shortcut "${shortcuts[i].nama}"?`)) return;
  shortcuts.splice(i, 1);
  simpan(); render();
}

/* ===== Jam & tanggal ===== */
function updateJam() {
  const now = new Date();
  document.getElementById('jam').textContent =
    String(now.getHours()).padStart(2,'0') + ':' + String(now.getMinutes()).padStart(2,'0');
  document.getElementById('tanggal').textContent =
    now.toLocaleDateString('id-ID', { weekday:'long', day:'numeric', month:'long', year:'numeric' });
}
updateJam();
setInterval(updateJam, 1000);

/* ===== Gerimis miring ===== */
const hujan = document.getElementById("hujan");
for (let i = 0; i < 40; i++) {
  const t = document.createElement("div");
  t.className = "titik";
  t.style.left = Math.random() * 105 + "vw";
  t.style.animationDuration = (1.2 + Math.random() * 1.5) + "s";
  t.style.animationDelay = (Math.random() * 3) + "s";
  t.style.opacity = 0.15 + Math.random() * 0.3;
  hujan.appendChild(t);
}

/* ===== Petir tenang: menyala acak tiap 7–17 detik ===== */
const petir = document.getElementById("petir");
function jadwalPetir() {
  const tunggu = 7000 + Math.random() * 10000;
  setTimeout(() => {
    petir.classList.add("kilat");
    setTimeout(() => petir.classList.remove("kilat"), 950);
    jadwalPetir();
  }, tunggu);
}
jadwalPetir();

/* ===== Rumput tinggi bergoyang (130 helai acak) ===== */
const rumput = document.getElementById("rumput");
for (let i = 0; i < 130; i++) {
  const d = document.createElement("div");
  d.className = "daun";
  const hue = 95 + Math.random() * 40;   // variasi hijau
  d.style.left = (Math.random() * 100) + "%";
  d.style.height = (30 + Math.random() * 55) + "px";   // 30–85 px, rumput tinggi
  d.style.width = (3 + Math.random() * 3) + "px";
  d.style.background = `linear-gradient(180deg, hsl(${hue},55%,45%), hsl(${hue},60%,20%))`;
  d.style.animationDuration = (1.6 + Math.random() * 2.4) + "s";
  d.style.animationDelay = (-Math.random() * 3) + "s";
  d.style.opacity = .75 + Math.random() * .25;
  rumput.appendChild(d);
}

/* ===== HAPUS bar bawaan Chrome (nama ekstensi & Customize Chrome) ===== */
function sembunyikanBarBawaan() {
  document.querySelectorAll("body *").forEach(el => {
    if (el.closest(".rumput, .kredit, .modal-wrap, .konten, .maskot")) return;
    const t = (el.textContent || "").trim();
    if (t === "Customize Chrome" || t === "New Tab Animatik") {
      let bar = el;
      while (bar.parentElement && bar.parentElement !== document.body && bar.offsetHeight < 150) {
        bar = bar.parentElement;
      }
      bar.remove();   // dibuang permanen dari halaman
    }
  });
}
setTimeout(sembunyikanBarBawaan, 300);
setInterval(sembunyikanBarBawaan, 3000);   // jaga-jaga kalau Chrome menyuntikkan ulang

render();
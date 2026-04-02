// 1. Elemanları Seçelim
const temaButon = document.getElementById("tema-btn");
const temaIkon = document.getElementById("tema-ikon");
const temaMetin = document.getElementById("tema-metin");

// 2. SAYFA AÇILDIĞINDA: Hafızayı kontrol et
// localStorage'dan "temaTercihi" anahtarını oku
const mevcutTema = localStorage.getItem("temaTercihi");

// Eğer hafızada 'dark' yazıyorsa, karanlık modu aktif et
if (mevcutTema === "dark") {
    temaUygula();
}

function temaDegistir() {
    // Body'ye .dark-theme class'ını ekle/çıkar (Toggle)
    document.body.classList.toggle("dark-theme");

    // Hafızayı Güncelleme Kısmı
    if (document.body.classList.contains("dark-theme")) {
        // Eğer şu an karanlık moddaysak hafızaya 'dark' yaz
        localStorage.setItem("temaTercihi", "dark");
        ikonGuncelle(true);
    } else {
        // Değilsek hafızaya 'light' yaz veya komple sil
        localStorage.setItem("temaTercihi", "light");
        ikonGuncelle(false);
    }
}

// Görseli güncellemek için yardımcı fonksiyon
function temaUygula() {
    document.body.classList.add("dark-theme");
    ikonGuncelle(true);
}

function ikonGuncelle(isDark) {
    if (isDark) {
        temaIkon.className = "fa-solid fa-sun"; // Güneş ikonu
        temaMetin.innerText = "Gündüz Moduna Geç";
    } else {
        temaIkon.className = "fa-solid fa-moon"; // Ay ikonu
        temaMetin.innerText = "Gece Moduna Geç";
    }
}
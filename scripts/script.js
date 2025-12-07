document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("kapcsolatForm");
    const valasz = document.getElementById("uzenetValasz");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nev     = document.getElementById("nev").value.trim();
        const email   = document.getElementById("email").value.trim();
        const tel     = document.getElementById("tel").value.trim();
        const eletkor = Number(document.getElementById("eletkor").value);
        const nem     = document.getElementById("nem").value;
        const tema    = document.getElementById("tema").value.trim();
        const uzenet  = document.getElementById("uzenet").value.trim();

        const hibak = [];

        if (nev.length < 3) hibak.push("A név túl rövid (minimum 3 karakter)!");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) hibak.push("Az e-mail cím érvénytelen!");
        if (tel.length < 6) hibak.push("A telefonszám túl rövid!");
        if (eletkor < 10 || eletkor > 120) hibak.push("Az életkornak 10 és 120 között kell lennie!");
        if (!nem) hibak.push("Kérlek válassz nemet!");
        if (tema.length < 3) hibak.push("A téma túl rövid!");
        if (uzenet.length < 10) hibak.push("Az üzenet túl rövid (minimum 10 karakter)!");

        //hiba
        if (hibak.length > 0) {
            valasz.innerHTML =
                `<h4>Hiba történt:</h4><ul>${hibak.map(h => `<li>${h}</li>`).join("")}</ul>`;
            valasz.style.cssText = `
                color:#d32f2f;
                background:#ffebee;
                border:2px solid #ffcdd2;
            `;
            return;
        }

        //jo
        valasz.innerHTML = `
            <h4>Sikeres küldés!</h4>
            <p>Köszönjük, hogy írtál nekünk. Hamarosan válaszolunk.</p>
        `;
        valasz.style.cssText = `
            color:#2e7d32;
            background:#e8f5e9;
            border:2px solid #c8e6c9;
        `;

        console.log("Kapcsolat űrlap adatok:", {
            nev, email, tel, eletkor, nem, tema,
            uzenet: uzenet.slice(0, 50) + "...",
        });

        form.reset();
    });
});

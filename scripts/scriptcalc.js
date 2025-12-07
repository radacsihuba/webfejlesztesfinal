const teruletValaszto = document.getElementById('teruletValaszto');
const egyebInput = document.getElementById('egyebInput');
const eredmenyTarolo = document.getElementById('eredmenyTarolo');

teruletValaszto.addEventListener('change', function() {
    if (this.value === 'egyeb') {
        egyebInput.classList.remove('rejtett');
    } else {
        egyebInput.classList.add('rejtett');
    }
});

function szamol() {
    let veszteseg = 0;
    const valasztott = teruletValaszto.value;

    if (valasztott === 'egyeb') {
        veszteseg = parseInt(document.getElementById('egyebMeret').value);
    } else if (valasztott) {
        veszteseg = parseInt(valasztott);
    }

    if (isNaN(veszteseg) || veszteseg <= 0) {
        document.getElementById('eredmeny').textContent = 'Kérlek adj meg érvényes adatot!';
        return;
    }

    document.getElementById('eredmeny').innerHTML =
        'Területvesztés: <strong>' + veszteseg.toLocaleString() + ' km²</strong>';
    eredmenyTarolo.classList.remove('rejtett');

    // Fájdalommérő
    let fajdalom = 0;
    if (veszteseg < 20000) fajdalom = 1;
    else if (veszteseg < 50000) fajdalom = 2;
    else if (veszteseg < 100000) fajdalom = 3;
    else if (veszteseg < 150000) fajdalom = 4;
    else fajdalom = 5;

    const slider = document.getElementById('fajdalomSlider');
    slider.innerHTML = '';

    for (let i = 1; i <= 5; i++) {
        const pont = document.createElement('div');
        pont.className = 'fajdalomPont' + (i <= fajdalom ? ' aktív' : '');
        slider.appendChild(pont);
    }

    const szovegek = [
        'Enyhe veszteség',
        'Mérsékelt veszteség',
        'Komoly veszteség',
        'Nagyon súlyos veszteség',
        'Katasztrofális veszteség'
    ];
    document.getElementById('fajdalomSzoveg').textContent = szovegek[fajdalom - 1];
}

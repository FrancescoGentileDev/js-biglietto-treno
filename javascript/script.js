const percorrenza = prompt("inserire il numero dei km da percorrere");
const eta = prompt("inserire l'età del passeggero");

let costoTotale = percorrenza * 0.21;

if (eta < 18) {
    costoTotale *= 0.2;
}
else if (eta > 65) {
    costoTotale *= 0.4
}

costoTotale = costoTotale.toFixed(2)

alert(`Il prezzo da pagare è ${costoTotale}`)

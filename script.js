console.log('JS OK!');

// chiedi numero di chilometri di percorrenza ed età 
const streetUser = parseInt(prompt('Inserisci km percorrenza'));
const ageUser = parseInt(prompt('Inserisci età'));

console.log('Percorso in km' + streetUser);
console.log('Età' + ageUser);

// 0,21€ al km
const priceKm = 0.21;
console.log(priceKm + "€ Costo km percorrenza");

// Prezzo finale con forma decimale
let priceTicket = (priceKm * streetUser);

// 20% sconto per minorenni
// 40% sconto per over 65

if (ageUser < 18) {
    let discountYoung = (priceTicket * 0.8);
    discountYoung = discountYoung.toFixed(2);
    console.log('Totale con sconto giovani' + discountYoung + '€');

    document.getElementById('price').innerText = 'Il prezzo totale è:' + discountYoung + '€';

} else if (ageUser > 65) {
    let discountOld = (priceTicket * 0.6);
    discountOld = discountOld.toFixed(2);
    console.log('Totale con sconto anziani' + discountOld + '€');

    document.getElementById('price').innerText = 'Il prezzo totale è:' + discountOld + '€';

} else {
    priceTicket = priceTicket.toFixed(2);
    console.log('Prezzo finale ' + priceTicket + '€');

    document.getElementById('price').innerText = 'Il prezzo totale è:' + priceTicket + '€';
}



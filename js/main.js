
/*
Il programma dovrà mostrare una form da compilare con cui chiedere all’utente:
nome e cognome
km da percorrere
eta (input testuale o number)
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l’output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo)
Al click sul tasto GENERA si genera il biglietto con i calcoli dovuti
Al click sul tasto ANNULLA si svuotano i campi
BONUS
la sezione del biglietto generato, all’avvio dovrebbe essere nascosta e comparire solo quando si preme il pulsante genera
Questo compare solo se i dati inseriti sono validi
per l’età inserire una select con 3 voci:
minorenne
maggiorenne
over 65
In base alla voce scelta dall’utente, fare i dovuti calcoli
*/

const inputNome = document.querySelector("[name='nomeUtente']");
const inputKm = document.querySelector("[name='kmUtente']");
const inputEta = document.querySelector("[name='etaUtente']");
const submitButton = document.getElementById("genera-biglietto");
const cancelButton = document.getElementById("annulla-biglietto");

const containerBiglietto = document.getElementById("container-biglietto");

submitButton.addEventListener("click", function() {
    
    const kmDaPercorrere = parseInt(inputKm.value);
    let prezzoAlKm = 0.21;

    if (kmDaPercorrere >= 1200) {
        alert("Inserisci un kilometraggio idoneo");
    } else if (kmDaPercorrere <= 10) {
        alert("Inserisci un kilometraggio idoneo");
    }

    if (inputEta.value === "minorenne") {
        prezzo = prezzoAlKm / 100 * 80;
        nomeOfferta = "Sconto Minorenni";
    } else if (inputEta.value === "over65") {
        prezzo = prezzoAlKm / 100 * 60;
        nomeOfferta = "Sconto Over 65";
    } else if (inputEta.value === "maggiorenne") {
        prezzo = prezzoAlKm;
        nomeOfferta = "Biglietto Standard"
    }

    document.getElementById("container-biglietto").classList.remove("d-none");
    
    document.getElementById("nome-utente").innerHTML = inputNome.value;
    document.getElementById("offerta").innerHTML = nomeOfferta;
    document.getElementById("carrozza").innerHTML = (Math.floor(Math.random() * 9) + 1);
    document.getElementById("codice-cp").innerHTML = (Math.floor(Math.random() * 10000) + 1);
    document.getElementById("costo-biglietto").innerHTML = (prezzo * kmDaPercorrere).toFixed(2);

    }
);

cancelButton.addEventListener("click", function() {

    inputNome.value = "";
    inputKm.value = "";

    document.getElementById("container-biglietto").classList.add("d-none");
}
);

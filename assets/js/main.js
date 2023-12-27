// Ein Projekt zur Berechnung des Tagesbedarfs an Kalorien nach der Harris-Benedict-Formel nach Geschlecht inkl. Beachtung des PAL-Wertes (Physical Activity Level)

// Variablen
let geschlecht = document.querySelector("#male").checked;
let gewicht = 0;
let groesse = 0;
let alter = 0;
let pal = 0;
let grundumsatz = 0;
let gesamtumsatz = 0;
let ergebnis = 0;

// Funktionen

// Funktion zur Berechnung des Grundumsatzes und des Gesamtumsatzes nach Geschlecht und PAL-Wert (Physical Activity Level) und Ausgabe des Ergebnisses in #resultValue und #resultValuePal
// nach der Harris-Benedict-Formel (https://de.wikipedia.org/wiki/Harris-Benedict-Formel)

const calcTdee = (event) => {
    event.preventDefault(); // Verhindert das Neuladen der Seite nach Klick auf #calcButton
    weight = document.querySelector("#weightVal").value; // Wert aus #weightVal wird in Variable weight gespeichert
    height = document.querySelector("#heightVal").value; // Wert aus #heightVal wird in Variable height gespeichert
    age = document.querySelector("#ageVal").value; // Wert aus #ageVal wird in Variable age gespeichert
    pal = document.querySelector("#palLevelSelect").value; // Wert aus #palLevelSelect wird in Variable pal gespeichert
    if (geschlecht === true) {
        // Wenn #male checked ist, dann wird der Grundumsatz nach der Harris-Benedict-Formel für Männer berechnet
        grundumsatz = 66.47 + 13.7 * weight + 5 * height - 6.8 * age;
    } else {
        // Wenn #male nicht checked ist, dann wird der Grundumsatz nach der Harris-Benedict-Formel für Frauen berechnet
        grundumsatz = 655.1 + 9.6 * weight + 1.8 * height - 4.7 * age;
    }
    gesamtumsatz = grundumsatz * pal; // Der Gesamtumsatz wird berechnet
    document.querySelector("#resultValue").textContent = ` ${grundumsatz.toFixed(0)} kcal`; // Der Grundumsatz wird in #resultValue ausgegeben
    document.querySelector("#resultValuePal").textContent = ` ${gesamtumsatz.toFixed(0)} kcal`; // Der Gesamtumsatz wird in #resultValuePal ausgegeben
};

// Eventlistener für #calcButton
document.querySelector("#calcButton").addEventListener("click", calcTdee);

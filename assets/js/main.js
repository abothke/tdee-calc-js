// Ein Projekt zur Berechnung des Tagesbedarfs an Kalorien nach der Harris-Benedict-Formel nach Geschlecht inkl. Beachtung des PAL-Wertes (Physical Activity Level)
// nach der Harris-Benedict-Formel (https://de.wikipedia.org/wiki/Harris-Benedict-Formel)
// Funktion zur Berechnung des Grundumsatzes und des Gesamtumsatzes nach Geschlecht und PAL-Wert (Physical Activity Level) und Ausgabe des Ergebnisses in #resultValue und #resultValuePal

const calcTdee = (event) => {
    event.preventDefault(); // Verhindert das Neuladen der Seite nach Klick auf #calcButton

    let weight = document.querySelector("#weightVal").value; // Wert aus #weightVal wird in Variable weight gespeichert
    let height = document.querySelector("#heightVal").value; // Wert aus #heightVal wird in Variable height gespeichert
    let age = document.querySelector("#ageVal").value; // Wert aus #ageVal wird in Variable age gespeichert
    let pal = document.querySelector("#palLevelSelect").value; // Wert aus #palLevelSelect wird in Variable pal gespeichert
    let geschlecht = document.querySelector("#male").checked; // Wert aus #male wird in Variable geschlecht gespeichert

    // Der Grundumsatz wird berechnet wenn geschlecht == true (männlich), dann wird die erste Formel (für Männer) verwendet, wenn geschlecht == false (weiblich), dann wird die zweite Formel (für Frauen) verwendet
    geschlecht == true ? (grundumsatz = 66.47 + 13.7 * weight + 5 * height - 6.8 * age) : (grundumsatz = 655.1 + 9.6 * weight + 1.8 * height - 4.7 * age);

    let gesamtumsatz = grundumsatz * pal; // Der Gesamtumsatz wird berechnet

    document.querySelector("#resultValue").textContent = ` ${grundumsatz.toFixed(0)} kcal`; // Der Grundumsatz wird in #resultValue ausgegeben
    document.querySelector("#resultValuePal").textContent = ` ${gesamtumsatz.toFixed(0)} kcal`; // Der Gesamtumsatz wird in #resultValuePal ausgegeben

    console.log(geschlecht);
};

// Eventlistener für #calcButton
document.querySelector("#calcButton").addEventListener("click", calcTdee);
// Ein Projekt zur Berechnung des Tagesbedarfs an Kalorien nach der Harris-Benedict-Formel nach Geschlecht inkl. Beachtung des PAL-Wertes (Physical Activity Level)
// nach der Harris-Benedict-Formel (https://de.wikipedia.org/wiki/Harris-Benedict-Formel)
// Funktion zur Berechnung des Grundumsatzes und des Gesamtumsatzes nach Geschlecht und PAL-Wert (Physical Activity Level) und Ausgabe des Ergebnisses in #resultValue und #resultValuePal
const calcTdee = () => {
    // Deklaration der Variablen und Zuweisung der Werte aus den Input-Feldern mithilfe von Array.from und map
    // Array.from wird hier verwendet, da querySelectorAll eine nodeList zurückgibt, die nicht mit map verwendet werden kann
    // Die Werte werden in die Variablen age, height, weight und pal gespeichert
    // Die Reihenfolge der Variablen entspricht der Reihenfolge der Input-Felder im HTML-Code, nicht der Reihenfolge der IDs im Array.
    // Hier werden gleich mehrere Variablen in einem Schritt deklariert und initialisiert. Das ist möglich, weil die Werte in einem Array gespeichert werden.
    let [age, height, weight, pal] = Array.from(document.querySelectorAll("#weightVal, #heightVal, #ageVal, #palLevelSelect")).map(e => e.value);

    // Der Grundumsatz wird berechnet wenn geschlecht == true (männlich), dann wird die erste Formel (für Männer) verwendet, wenn geschlecht == false (weiblich), dann wird die zweite Formel (für Frauen) verwendet
    let grundumsatz = document.querySelector("#male").checked == true 
        ? (66.47 + 13.7 * weight + 5 * height - 6.8 * age) 
        : (655.1 + 9.6 * weight + 1.8 * height - 4.7 * age);

    let gesamtumsatz = grundumsatz * pal; // Der Gesamtumsatz wird berechnet

    // Der Grundumsatz wird in #resultValue ausgegeben
    document.querySelector("#resultValue").textContent = ` ${grundumsatz.toFixed(0)} kcal`;

    // Der Gesamtumsatz wird in #resultValuePal ausgegeben
    document.querySelector("#resultValuePal").textContent = ` ${gesamtumsatz.toFixed(0)} kcal`;
};

// Eventlistener für #calcButton
document.querySelector("#calcButton").addEventListener("click", calcTdee);
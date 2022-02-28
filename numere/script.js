// Valoarea maxima dintr-un array
let array = [-1, 4, 5, 19, 23, 18, 25];
document.write("Elementele array-ului sunt: ", array, "<br><br>");
// Declaram un max care va fi initializat cu primul element din array
let max = array[0];

// Parcurgem array-ul de la al doi-lea element pana la ultimul folosind for
for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}
document.write("Cel mai mare numar din array este: ", max);
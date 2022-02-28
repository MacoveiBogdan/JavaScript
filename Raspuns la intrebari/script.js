// Declaram un array care va stoca raspunsurile
let raspunsuri = ['da', 'nu', 'niciodata', 'fara indoiala', 'esti sigur', 'foarte posibil', 'evident', 'bine'];

// citim de la tastatura intrebarea utilizatorului
let intrebare = prompt("Intrebarea dumneavoastra este: ");
if(intrebare){
    let ndx = Math.floor(Math.random()*8);
    document.write(intrebare);
    document.write(` : ${raspunsuri[ndx]}`);
} else{
    document.write("<strong>ai anulat</strong>");
}
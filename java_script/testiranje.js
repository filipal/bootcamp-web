/* function prebrojiUnos(ogranicenje = 140) {
    let unosUser = prompt("Unesite text: ");
    if (unosUser === null || unosUser.trim() === " ") {
        alert("Niste unijeli niti jedan znak.");
        return;
    }
    let brojZnakova = unosUser.length;
    let preostalo = ogranicenje - brojZnakova;
    alert("Unijeli ste " + brojZnakova + " znakova, ostalo vam je još " + preostalo + " znakova.");
}

prebrojiUnos ();

var ime = "Dino";

console.lpg(ime.slice(0, 3)) // din
console.lpg(ime.slice(0, 1)) // din //d */


/* function unosTeksta(ogranicenje=60) {
    let tekst = prompt("Unesite tekst duljine do 60 znakova: ")
    
    if (text > ogranicenje || tekst.trim(ogranicenje)) {

        alert("Unijeli ste više od 60 znakova. Vaš tekst dužine 60 znakova je: " + text)
    }
    
}

unosTeksta() */

/* function test() {
    alert("korak 1")
    alert("korak 2")
    alert("korak 3")

}

test() */
/* const input = prompt("Unesite raspoloživa sredstva: ")
const kruh = 2
function izracun(n, c) {
    
    let kolicina = Math.floor (n / c)
    let ostatak = n - (c*kolicina)
    alert("Možeš kupiti " + kolicina + " kruha. Ostati će vam " + ostatak.toFixed(2) + " €") 
}

izracun(input, kruh) */

/* var gosti = ["Angela", "Marko", "Ivana", "Petar", "Maja", "Luka"]; */

/* let uzvanik = prompt("Molimo unesite svoje ime: ")

function provjeriListu(uzvanik) {
    if (gosti.includes(uzvanik)) {
        alert("Ulaz slobodan!")
    }
    else {
        alert("Žao nam je " + uzvanik + ", niste pozvani na party!")
    }

}

provjeriListu(uzvanik)
 */

/* alert("Prvi na listi je " + gosti[0] + ". Zadnji gost je " + gosti.at(-1)) */



/* function fizzBuzz() {
    var broj = prompt("Unesite broj: ");
    if ((broj % 3 === 0) && (broj % 5 === 0)) {
        alert("FizzBuzz")
    }
    else if (broj % 3 === 0) {
        alert("Fizz")
    }
    else if (broj % 5 === 0) {
        alert("Buzz")
    }
    else {
        alert("Ni Fizz ni Buzz")
    }
}


fizzBuzz() */
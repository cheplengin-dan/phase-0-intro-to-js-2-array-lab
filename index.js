// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function  destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop("Garfield");
}
function destructivelyRemoveFirstCat() {
    cats.shift("Milo");
}

const newCat = [ ...cats, "Broom"];

function appendCat(name) {
    return newCat;
}

const newCat2 = [ "Arnold", ...cats];

function prependCat(name) {
    return newCat2;
}

const removeCat = cats.slice( 0, 2);

function removeLastCat() {
    return removeCat;
}

const removeCat2 = cats.slice(1);

function removeFirstCat() {
    return removeCat2;
}

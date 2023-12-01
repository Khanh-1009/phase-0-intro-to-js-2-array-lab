// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(name){
    let newCats = [];
    return newCats = [...cats,name];
}

function prependCat(name){
    let newKitty = [];
    return newKitty = [name,...cats];
}

function removeLastCat(){
    const newRemove = cats.slice(0,-1);
    return newRemove;
}

function removeFirstCat(){
    const newFirst = cats.slice(1);
    return newFirst;
}
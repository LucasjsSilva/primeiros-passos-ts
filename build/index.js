"use strict";
function concatArrays(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArrays([1, 2, 3], [4]);
const stgArray = concatArrays(["Lucas", "Jesus"], ["Santos", "Silva"]);
console.log(numArray);
console.log(stgArray);

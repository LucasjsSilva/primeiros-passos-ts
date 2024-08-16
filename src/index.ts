//Generics
function concatArrays<T>(...itens: T[]): T[]{
    return new Array().concat(...itens);
}

const numArray = concatArrays<number[]>([1, 2, 3], [4]);
const stgArray = concatArrays<string[]>(["Lucas", "Jesus"], ["Santos", "Silva"]);

console.log(numArray);
console.log(stgArray);

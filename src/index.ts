type Heroi = {
    nome: string;
    vulgo: string;
};

function printaObjetos(pessoa: Heroi){
    console.log(pessoa);
}

printaObjetos({
    nome: "bruce",
    vulgo: "batman",
})
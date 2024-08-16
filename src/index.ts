/**
 * variaveis
 */

//tipos primitivos: boolean, number, string
let ligado: boolean = true;
let nome: string = "Lucas";
let idade: number = 21;
let altura: number = 1.80;

//tipos especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

// tipos abrangentes: any, void
let retornoView: any = false;
let retorno: void;

//objeto - sem previsibilidade
let pessoa: object = {
    name: "Lucas",
    cidade: "teresina",
    idade: 21,
};

//objeto tipado - com previsibilidade
type Produto ={
    nome: string;
    preco: number;
    unidades: number;
};

/**
 * arrays
 */

//so com um tipo
let dados: string[]=["Lucas", "Eduarda", "Cecilia"];
let dados2: Array<string> = ["Lucas", "Eduarda", "Cecilia"];

//multi types
let infos: (string | number)[] = ["Lucas", 21];






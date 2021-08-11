// BOolean

const contaPaga: boolean = false;

// Number
const idade: number = 23;
const avaliacao: number = 4.5;

// String 
const nome: string = 'Vitor Farias';

// Array
const idades: number[] = [23, 28, 45];
const idades2: Array<number> = [23, 28, 45, 85];

// Tuple
let jogadores: [string, string, string];
jogadores = ['vitor', 'fulano', 'ciclano'];

// Enum

enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;


// Any

const retornoDaApi: any = ['123', 213, false];
const retornoDaApi2: any = ['123', 213, false];

// Void

function printarNaTela(msg: string): void {
    console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object

function criar(objecto: object) {
    // ..
}

// Never
function loopInfinito(): never {
    while(true);
}

function erro(mensagem: string) {
    throw new Error(mensagem);
};

function falha(){
    return erro('Algo falhou');
}

//Union types

function exibirNota(nota: number | string) {
    console.log('A nota é ' + nota);
}

exibirNota('10');


// Alias 
type Funcionario = {
    nome: string,
    sobrenome: string,
    dataNascimento: Date
}
const funcionario: Funcionario[] = [{
    nome: 'Vitor',
    sobrenome: 'Farias',
    dataNascimento: new Date()
}, {
    nome: 'Luo',
    sobrenome: 'Plinio',
    dataNascimento: new Date()
}]

function tratarFuncionarios(funcionarios: Funcionario[]) {
    for(let funcionarios of funcionario) {
        console.log('Nome do Fúncionario: ', funcionarios.nome)
    }
}

let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string // OPerador diz q este campio é opcional '?'
}

const contato: Contato = {
    nome: 'Vitor',
    telefone1: '13943483'
}

// Type Assertion 
const minhaIdade: any = 23;
(minhaIdade as number).toString();

const input = document.getElementById("numero1") as HTMLInputElement;
// const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value)
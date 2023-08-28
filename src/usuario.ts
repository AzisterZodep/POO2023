export class Usuario{
    cod:number
    nome:string
    saldo:number = 0
    constructor(cod:number,nome:string){
        this.cod = cod
        this.nome = nome
    }
}
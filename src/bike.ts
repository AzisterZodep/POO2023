export class Bike{
    cod:number
    desc:string
    taxa:number
    disp:boolean = true
    constructor(cod:number,desc:string,taxa:number){
        this.cod = cod
        this.desc = desc
        this.taxa = taxa
    }
}

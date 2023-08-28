import { Bike } from "./bike"
import { Usuario } from "./usuario"

export class Agenda{
    bik:Bike
    usu:Usuario
    data:Date
    
    constructor(bik:Bike,usu:Usuario,data:Date){
        this.bik = bik
        this.usu = usu
        this.data = data
    }
}
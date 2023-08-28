import { Bike } from "./bike"
import { Agenda } from "./agenda"
import { Usuario } from "./usuario"

export class Alugador{
    bikes: Bike[] = [];
    usuarios: Usuario[] = []; 
    agendadas: Agenda[] = [];

    addBike(cod:number,desc:string,taxa:number){
        this.bikes.push(new Bike(cod,desc,taxa))
    }
    addUsuario(registro:number,nome:string){
        this.usuarios.push(new Usuario(registro,nome))
    }
    addAgenda(bik:Bike,usu:Usuario,data:Date){
        if(this.checkAgenda(bik,data)){
            console.log(bik.desc + "já foi agendada nessa data");
        } else {
            console.log(bik.desc + "já foi agendada com sucesso");
            this.agendadas.push(new Agenda(bik,usu,data))
        }
    }

    checkAgenda(bik:Bike,data:Date): boolean {
        console.log(bik.cod +" - "+ data)
        this.agendadas.forEach(element => {
            console.log(element.bik.cod +" - "+ element.data)
            if(element.bik.cod == bik.cod && element.data == data){
                return true
            }
        })
        return false
    }
}
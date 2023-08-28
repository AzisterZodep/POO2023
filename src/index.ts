import { Agenda } from "./agenda"
import { Alugador } from "./alugador"
import { Bike } from "./bike"
import { Usuario } from "./usuario"

const loja = new Alugador()
loja.addBike(0,"Bike azul aro 30",5)
loja.addBike(4,"Bike Prata Premium Ultra++",20)
loja.addUsuario(22367,"Kyluk Aztra")
loja.addAgenda(loja.bikes[1],loja.usuarios[0],new Date("2023-08-30"))
loja.addUsuario(22334,"faz el holter")
loja.addAgenda(loja.bikes[1],loja.usuarios[1],new Date("2023-08-30"))
console.log(loja)
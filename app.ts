import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";
import crypto from "crypto";
import { create } from "domain";

export class App {
    users: User[] = []
    bikes: Bike[] = []
    rents: Rent[] = []

    registerBike(bike: Bike): void{
        bike.id = crypto.randomUUID()
        this.bikes.push(bike)
    }

    removeUser(email:string): void{
        this.users = this.users.filter(user=>!(user.email === email))
    }
    rentBike(bikeId:string | undefined,userEmail:string,startDate:Date,endDate:Date): void{
        if(this.findUser(userEmail)&&this.findBike(bikeId)){
            this.rents.push(Rent.create(this.rents,this.findBike(bikeId),this.findUser(userEmail),startDate,endDate))
        }
    }
    returnBike(id:string | undefined,returnDate:Date): void{
        this.rents = this.rents.filter(rent => (rent.bike)&&!((rent.bike.id===id)&&(rent.dateTo===returnDate)))
    }

    findUser(email: string): User | undefined{
        return this.users.find(user => { return user.email === email})
    }
    findBike(bikeId: string | undefined): Bike | undefined{
        return this.bikes.find(bike => { return bike.id === bikeId})
    }

    registerUser(user: User): void {
        for (const rUser of this.users) {
            if (rUser.email === user.email) {
                throw new Error('Duplicate user.')
            }
        }
        user.id = crypto.randomUUID()
        this.users.push(user)
    }
}

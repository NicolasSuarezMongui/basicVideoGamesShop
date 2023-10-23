import { Client } from "../Models/Client.js";

export class ClientsController{
    constructor(){
        this.clients = []
    }

    addClient(client){
        this.clients.push(client)
    }

    transform(user){
        return new Client(user._id, user._names, user._lastNames, user._celPhone, user._email, user._birthDate, user._nacionality, user._password)
    }

    getClient(id){
        return this.clients.find(client => client._id === id)
    }

    getClients(){
        return this.clients
    }

    getTotalClients(){
        return this.clients.length
    }

    setClients (clients){
        this.clients = clients
    }

    delClient(client){
        this.clients.splice(this.clients.indexOf(client),1)
    }

    updateClient(client){
        const index = this.clients.indexOf(client)
        this.clients[index] = client
    }

    orderByPoints(){
        this.clients.sort((a,b) => a.points - b.points)
    }
}
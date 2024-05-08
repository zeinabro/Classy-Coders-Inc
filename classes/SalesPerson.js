const { Employees } = require("./Employees");

class SalesPerson extends Employees{
    #totalSales
    constructor(name,position,salary,clients){
        super(name,position,salary)
        this.clients=clients;
        this.#totalSales=0
    }

    getSalesNumber(){
        return this.#totalSales
    }

    makeSale(amount){
        this.#totalSales+=amount
    }

    findClient(client){
        let idx = this.clients.indexOf(client)
        if (idx===-1){
            throw new Error("Could not find client") 
        }
        return this.clients[idx]
    }
    
}

module.exports = {
    SalesPerson,
}
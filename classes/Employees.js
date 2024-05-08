class Employees {
    #salary
    #isHired
    static allEmployees = []
    constructor(name,position,salary){
        this.name=name
        this.position=position
        this.#salary=salary
        this.#isHired=true
        Employees.allEmployees.push(this)
    }
    
    static getEmployees(){
        return Employees.allEmployees
    }

    static getTotalPayroll(){
        let total=0;
        Employees.allEmployees.forEach(employee=>total+=employee.getSalary())
        return total
    }

    getSalary(){
        return this.#salary
    }

    setSalary(amount){
        this.#salary=amount
    }

    getStatus(){
        return this.#isHired
    }

    setStatus(command){
        if (command=="hire"){
            this.#isHired=true
        } else if (command="fire"){
            this.#isHired=false
        }
    }
    
}

module.exports = {
    Employees,
}
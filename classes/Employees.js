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
        if (amount<0){
            throw new Error("Salary cannot be negative")
        }
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

    promote(position){
        this.position=position
        if (position=="Manager"){
            this.#salary=1000
        } else if (position=="SoftwareEngineer"){
            this.#salary=750
        } else if (position=="SalesPerson"){
            this.#salary=500
        }
    }
    
}

module.exports = {
    Employees,
}
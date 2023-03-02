const Employee = require("./Employee");

class Manager extends Employee {
    const (name, id, email, officeNumber) {
        return (name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;
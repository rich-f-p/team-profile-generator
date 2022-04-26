const Employee = require('../lib/Employee')
// test employee class
describe("Employee class", () => {
    const employee = new Employee("wilbert","128","wilbert@email.com");
//test to see if it is a object
    it("creates a object with name, id, and email", () => {
        expect(employee).toEqual({ name: "wilbert", id: "128", email: "wilbert@email.com" });
    })
    describe("getName", () => {
        it("returns name of employee", () => {

            const name = employee.getName()
            expect(name).toEqual("wilbert")
        })
    })
    describe("getId", () => {
        it("returns employee id", () => {

            const id = employee.getId()
            expect(id).toEqual("128")
        })
    })
    describe("getEmail", () => {
        it("returns employee email", () => {

            const email = employee.getEmail()
            expect(email).toEqual("wilbert@email.com")
        })
    })
    describe("getRole", () => {
        it("returns individual role", () => {

            const role = employee.getRole()
            expect(role).toEqual("Employee")
        })
    })
})

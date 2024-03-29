const Manager = require("../lib/Manager");
//test Manager class
describe("Manager class", () => {
    const manager = new Manager("bill","127","billemail","10");
    //test to see if it is a object
    it("creates an object with name, id, email, and office number", () =>{
        expect(manager).toEqual({name: "bill", id: "127", email: "billemail", officeNumber: "10"})
    })
    describe("getName", () => {
        it("returns name of manager", () => {

            const name = manager.getName()
            expect(name).toEqual("bill")
        })
    })
    describe("getId", () => {
        it("returns manager id", () => {

            const id = manager.getId()
            expect(id).toEqual("127")
        })
    })
    describe("getEmail", () => {
        it("returns manager email", () => {

            const email = manager.getEmail()
            expect(email).toEqual("billemail")
        })
    })
    describe("getRole", () => {
        it("returns individual role", () => {

            const role = manager.getRole()
            expect(role).toEqual("Manager")
        })
    })
})
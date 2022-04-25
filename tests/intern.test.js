const Intern = require('../lib/Intern')

describe("Enginee class", () => {
    const intern = new Intern("blank","125","blankemail","blankschool");
    it("creates an object with name, id, email, and office number", () =>{
        expect(intern).toEqual({name: "blank", id: "125", email: "blankemail", school: "blankschool"})
    })
    describe("getName", () => {
        it("returns name of manger", () => {

            const name = intern.getName()
            expect(name).toEqual("blank")
        })
    })
    describe("getId", () => {
        it("returns intern id", () => {

            const id = intern.getId()
            expect(id).toEqual("125")
        })
    })
    describe("getEmail", () => {
        it("returns intern email", () => {

            const email = intern.getEmail()
            expect(email).toEqual("blankemail")
        })
    })
    describe("getRole", () => {
        it("returns individual role", () => {

            const role = intern.getRole()
            expect(role).toEqual("Intern")
        })
    })
    describe('getSchool', () => {
        it('returns school name', () => {
            const school = intern.getSchool();
            expect(school).toEqual('blankschool')
        })
    })
})
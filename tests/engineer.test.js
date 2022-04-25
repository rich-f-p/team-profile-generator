const Engineer = require('../lib/Engineer')

describe("Enginee class", () => {
    const engineer = new Engineer("joe","126","joeemail","joegit");
    it("creates an object with name, id, email, and office number", () =>{
        expect(engineer).toEqual({name: "joe", id: "126", email: "joeemail", github: "joegit"})
    })
    describe("getName", () => {
        it("returns name of manger", () => {

            const name = engineer.getName()
            expect(name).toEqual("joe")
        })
    })
    describe("getId", () => {
        it("returns engineer id", () => {

            const id = engineer.getId()
            expect(id).toEqual("126")
        })
    })
    describe("getEmail", () => {
        it("returns engineer email", () => {

            const email = engineer.getEmail()
            expect(email).toEqual("joeemail")
        })
    })
    describe("getRole", () => {
        it("returns individual role", () => {

            const role = engineer.getRole()
            expect(role).toEqual("Engineer")
        })
    })
    describe('getGithub', () => {
        it('returns github username', () => {
            const git = engineer.getGithub();
            expect(git).toEqual('joegit')
        })
    })
})
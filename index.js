const inquire = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const temp = require('./src/template')
const fs = require('fs')
var totalMem = [];
// questions that will be displayed to the user when choosing a Manager
const managerQuestions = [{
    type: 'input',
    message: 'Enter manager name:',
    name: 'name',
},{
    type: 'input',
    message: 'Enter member ID: ',
    name: 'id',
},{
    type:'input',
    message: 'Enter member email: ',
    name: 'email'
},{
    type: 'input',
    message: "Enter manager's office number",
    name: 'officeNumber'
},{
    type: 'list',
    message: 'Add another member?',
    choices: ['Manager','Intern','Engineer','no more'],
    name:'newRole'
}]
// questions that will be displayed to the user when choosing a Intern
const internQuestions = [{
    type: 'input',
    message: 'Enter a name:',
    name: 'name',
},{
    type: 'input',
    message: 'Enter member ID: ',
    name: 'id',
},{
    type:'input',
    message: 'Enter member email: ',
    name: 'email'
},{
    type: 'input',
    message: 'Enter intern school',
    name: 'school'
},{
    type: 'list',
    message: 'Add another member?',
    choices: ['Manager','Intern','Engineer','no more'],
    name:'newRole'
}]
// questions that will be displayed to the user when choosing a Engineer
const engineerQuestions = [{
    type: 'input',
    message: 'Enter a name:',
    name: 'name',
},{
    type: 'input',
    message: 'Enter member ID: ',
    name: 'id',
},{
    type:'input',
    message: 'Enter member email: ',
    name: 'email'
},{
    type: 'input',
    message: 'Enter their github username',
    name: 'github'
},{
    type: 'list',
    message: 'Add another member?',
    choices: ['Manager','Intern','Engineer','no more'],
    name:'newRole'
}]
//function to set all of data into an array so that it can be accessed later
function addAnother(data){
    if (data.newRole === 'Manager'){
        inquire.prompt(managerQuestions).then((data)=>{
            manager = new Manager(data.name,data.id,data.email,data.officeNumber)
            pushMem(manager);
            addAnother(data);
        })
    }
    if (data.newRole === 'Intern'){
        inquire.prompt(internQuestions).then((data)=>{
            intern = new Intern(data.name,data.id,data.email,data.school)
            pushMem(intern);
            addAnother(data);
        })
    }
    if (data.newRole === 'Engineer'){
        inquire.prompt(engineerQuestions).then((data)=>{
            engineer = new Engineer(data.name,data.id,data.email,data.github)
            pushMem(engineer);
            addAnother(data);
        })
    }if(data.newRole ==='no more'){
        completeFile(totalMem)
    }
    
}
// function to push to totalMem array
function pushMem(data){
    totalMem.push(data)
}
// function to generate a completed html and css file with the users date included
function completeFile(totalMem){
var cardArr = []
for(i=0;i<totalMem.length;i++){
    let newcard = temp.memberCard(totalMem[i])
    cardArr.push(newcard)
    }
    const html = temp.htmlFile(cardArr);
    fs.writeFile('./dist/index.html', html, (err) => {
        if(err) {
            return console.error(err);
        }
        console.log("Saved!");
    });
    const css = temp.cssFile();
    fs.writeFile('./dist/style.css',css, (err) => {
        if(err){
            return console.error(err);
        }
        console.log("Saved!");
    })
}
//function to start the application
function init(){
    inquire.prompt(managerQuestions).then((data) =>{
        manager = new Manager(data.name,data.id,data.email,data.officeNumber)
        pushMem(manager);
        addAnother(data);
    })
}
init()

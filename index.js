const inquire = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const fs = require('fs')


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

const internQuestion = [{
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

function init(){
    inquire.prompt(managerQuestions).then((data) =>{
        
    })
}
init()

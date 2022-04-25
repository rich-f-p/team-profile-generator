const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const empQuestions = [{
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
    type: 'list',
    message: 'Choose member role: ',
    choices: ['Manager','Intern','Engineer'],
    name:'role'
}]

const managerQuestion = [{
    type: 'input',
    message: "Enter manager's office number",
    name: 'offNum'
}]
const internQuestion = [{
    type: 'input',
    message: 'Enter intern school',
    name: 'school'
}]
const engineerQuestions = [{
    type: 'input',
    message: 'Enter their github username',
    name: 'git'
}]


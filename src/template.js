//template for html file includes bootstrap
function htmlFile(memcard){
    return`<!DOCTYPE html>
    <html>
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Team Generator</title>
        </head>
        <body>
            <header id="custom-color" class="container-fluid p-5 mb-2">
                <h1 id="custom-text" class="text-center">My Team</h1>
            </header>
            <section id="cardSection" class="row flex-row justify-content-center ">
                <!-- cards -->
                ${memcard}
            </section>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        </body>
    </html>
`}
// cssfile that includes extra styling for generated elements
function cssFile(){
    return`
#custom-color{
    background-color:rgb(229, 78, 78);
    color: white;
}
#custom-card{
    background-color: rgb(67, 67, 238);
    color: white;
}
`}
//creates an indvidual card for each team member 
function memberCard(data){
    //check for specific information that will be displayed on the card
    let roleproperty = '';
if(data.github){
    roleproperty = `Github: ${data.github}`;
}
if(data.school){
    roleproperty = `School: ${data.school}`;
}
if(data.officeNumber){
    roleproperty = `Office number: ${data.officeNumber}`;
}
//template for the generated cards including information on each member
const genCard = `
<div class="card m-1" style="width: 18rem;">
    <div id="custom-card" class="card-body">
    <h3>${data.name}</h3>
    <h3>${data.getRole()}</h3>
    </div>
    <div class="card m-3" style="width: 15rem;">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${data.id}</li>
            <li class="list-group-item">${data.email}</li>
            <li class="list-group-item">${roleproperty}</li>
        </ul>
    </div>
</div>`
return genCard;
}

module.exports = {htmlFile,cssFile,memberCard}
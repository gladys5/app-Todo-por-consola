//
import inquirer from "inquirer"
require('colors')
let menuOpts=[{
    type:'list',
    name:'option',
    message:'Que decea hacer?',
    choices:['opt1','opt2','opt3']
}]
 const inquirerMenu= async()=>{
    console.clear()
    console.log("==================================".blue)
    console.log("=======SELECCIONE UNA OPCION======".yellow)
    console.log("==================================\n".blue)
  const opt=  await inquirer
  .prompt([
    /* Pass your questions in here */
    menuOpts
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  }) 
  return opt
 }
module.exports={
    inquirerMenu
}
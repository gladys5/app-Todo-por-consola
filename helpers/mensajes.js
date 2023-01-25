

require('colors')

const mostrarMenu =()=>{ 
    //retornamos una promesa para evitar que el programa invalide la primera question la promesa resive 2 parametros resolve y reyect en este caso no se require pasarlo por que solo estamos mostrando una interface
    return new Promise(resolve=>{
console.clear()
console.log("==================================".blue)
console.log("=======SELECCIONE UNA OPCION======".yellow)
console.log("==================================\n".blue)
console.log(`${"1.".yellow}${"Crear tarea".blue}`)
console.log(`${"2.".yellow}${"Listar tareas".blue}`)
console.log(`${"3.".yellow}${"Tarea completadas".blue}`)
console.log(`${"4.".yellow}${"Tareas pendientes".blue}`)
console.log(`${"5.".yellow}${"Completar tarea(s)".blue}`)
console.log(`${"6.".yellow}${"Borrar tarea".blue}`)
console.log(`${"0.".yellow}${"Salir".blue} \n`)
//resivir y mandar mensajes por consola
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})
readline.question(`${"Seleccione la opcion:".blue}`, (opt) => {
  readline.close()
  //resolvemos la promesa mandando la opcion seleccionada
  resolve(opt)
})

    })
    
    
}

    const pausa = () => {
        //repetimos una promesa
     return new Promise(resolve=>{
         const readline = require("readline").createInterface({
           input: process.stdin,
           output: process.stdout,
         })
         readline.question(
           `\nPresione ${"ENTER".blue} para continuar\n`,
           (opt) => {
             readline.close()
             //resolvemos sin parametro por que lo que el usuario escriba en este punto no es relevancia solo buscamos cachar el ENTER
             resolve()
           }
         )
     })
    }
module.exports={
    mostrarMenu,
    pausa
}
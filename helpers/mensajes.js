require('colors')

const mostrarMenu =()=>{
    console.clear()
    console.log('=================================='.blue)
    console.log("=======SELECCIONE UNA OPCION======".yellow)
    console.log("==================================\n".blue)
    console.log(`${"1.".yellow}${"Crear tarea".blue}`)
    console.log(`${"2.".yellow}${"Listar tareas".blue}`)
    console.log(`${"3.".yellow}${"Tarea completadas".blue}`)
    console.log(`${"4.".yellow}${"Tareas pendientes".blue}`)
    console.log(`${"5.".yellow}${"Completar tarea(s)".blue}`)
    console.log(`${"6.".yellow}${"Borrar tarea".blue}`)
    console.log(`${"0.".yellow}${"Salir".blue} \n`)
//nuestra 
    const readline=require('readline').createInterface({
        input:process.stdin,
        output: process.stdout
    })
    readline.question(`${'Seleccione la opcion:'.blue}`,(opt)=>{
        console.log({opt})
        readline.close()
    })
    
}
module.exports={
    mostrarMenu
}
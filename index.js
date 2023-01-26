import { inquirerMenu ,pausa} from "./helpers/moduloInquirer.js"
import { Tarea } from "./models/tarea.js"
import { Tareas } from "./models/tareas.js"

console.clear()


const main = async () => {
  let opt = ""
  do {
    // opt = await inquirerMenu()
    // console.log({ opt })
    const tareas =new Tareas()
   
  const tarea = new Tarea('chalalala')
  //pasamos toda la informacion a un objeto para que tome el id de uuid
  tareas._listado[tarea.id]=tarea
  console.log(tareas)
    
   await pausa()
 if (opt == "7") {
return false
 }

  } while (opt !== "7")
}

main()

import { inquirerMenu ,pausa,leerInput} from "./helpers/moduloInquirer.js"
import { Tareas } from "./models/tareas.js"


console.clear()

const main = async () => {
  let opt = ""
 const tareas=new Tareas()
  do {
    opt = await inquirerMenu()

    switch (opt) {
      case "1":
        const desc=await leerInput('Descripcion: ')
        tareas.crearTarea(desc)
        console.log(tareas._listado)
        break
     
     
      
    }

   await pausa()
 if (opt == "7") {
return false
 }

  } while (opt !== "7")
}

main()

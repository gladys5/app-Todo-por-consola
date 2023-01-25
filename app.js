//---------------------------------------------------------------
// require("colors")
// const { mostrarMenu, pausa } = require("./helpers/mensajes")

// console.clear

// const main = async () => {
//   let opt = ""
//   //espera una opcion desde resolve que guardamos en variable opt
//   do {
//     opt = await mostrarMenu()
//     console.log({ opt })
//     //pasamamos la pausa para que sea tomada inmediatamente despues de el primer resolve con esto evitamos se limpie la consola  antes de resivir el enter asi provocamos un loop infinito que evita que se salga de la app
    
//     //si la opcion es igual a 0 salimos de la app al darle enter
    
//     if (opt !== "0") {
//       await pausa()

//     }
//   } while (
//     //ejecutando la opcion
//     opt !== "0"
//   )

// }
// main()
//-------------------------------------------------------------
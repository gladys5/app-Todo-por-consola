require("colors")
const { mostrarMenu,pausa } = require("./helpers/mensajes")

console.clear

const main = async () => {
  let opt =''
  //espera una opcion desde resolve que guardamos en variable opt
  do{
opt = await mostrarMenu()
console.log({opt})
//pasamamos la pausa para que sea tomada inmediatamente despues de el primer resolve con esto evitamos se limpie la consola  antes de resivir el enter asi provocamos un loop infinito que evita que se salga de la app 
await pausa()
  }
  //ejecutando la opcion 
  while(opt !=='0')
  console.log("hola")
  close()
 
}
main()

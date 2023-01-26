import inquirer from "inquirer"

import colors from "colors"
import readline from "readline"

const menuOpts = [
  {
    type: "list",
    name: "opcion",
    message: "Seleccione una opción",
    choices: [
      "Crear tarea",
      "Listar tareas",
      "Listar tareas completadas",
      "Listar tareas pendientes",
      "Completar tarea(s)",
      "Eliminar tarea(s)",
      "Salir",
    ],
  },
]

const inquirerMenu = async () => {
  console.clear()
  console.log("===========================".blue)
  console.log("   Seleccione una opción".yellow)
  console.log("===========================\n".blue)

  const opt = await inquirer.prompt(menuOpts)

  return opt
}
  const pausa = () => {
    //repetimos una promesa
    return new Promise((resolve) => {
      const readline1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      })
      readline1.question(
        `\nPresione ${"ENTER".blue} para continuar\n`,
        (opt) => {
          readline1.close()
          //resolvemos sin parametro por que lo que el usuario escriba en este punto no es relevancia solo buscamos cachar el ENTER
          resolve()
        }
      )
    })
  }

export { inquirerMenu ,pausa}

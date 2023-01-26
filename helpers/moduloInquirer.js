import inquirer from "inquirer"

import colors from "colors"

const menuOpts = [
  {
    type: "list",
    name: "opcion",
    message: "Seleccione una opción",
    choices: [
      {
        value: 1,
        name: "1",
        name: "Crear tarea",
      },
      { value: 2, name: "2.Listar tareas" },
      { value: 3, name: "3.Listar tareas completadas" },
      { value: 4, name: "4.Listar tareas pendientes" },
      { value: 5, name: "5.Completar tarea(s)" },
      { value: 6, name: "6.Eliminar tarea(s)" },
      { value: 7, name: "7.Salir" },
    ],
  },
]

const inquirerMenu = async () => {
  console.clear()
  console.log("===========================".blue)
  console.log("   Seleccione una opción".yellow)
  console.log("===========================\n".blue)

  const { opcion } = await inquirer.prompt(menuOpts)

  return opcion
}
  const pausa = async() => {
    const question = [
      {
        type: "input",
        name: "enter",
        message: `\nPresione ${"ENTER".blue} para continuar\n`,
      },
    ]
    await inquirer.prompt(question)
  }

export { inquirerMenu ,pausa}

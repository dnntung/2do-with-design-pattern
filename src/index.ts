import { TodoController } from "./modules/TodoController"

window.addEventListener("load", () => {

    const todoController: TodoController = TodoController.getInstance()

    console.log("Loaded")

})
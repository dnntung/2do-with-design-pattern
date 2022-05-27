import { TodoController } from "./modules/TodoController"
import { TodoListRenderer } from "./modules/TodoListRenderer"

window.addEventListener("load", () => {

    const controller: TodoController = TodoController.getInstance()
    
    const renderer: TodoListRenderer = new TodoListRenderer()
    renderer.container = document.getElementById("todo-list")
    controller.renderer = renderer


    console.log("Loaded")

})
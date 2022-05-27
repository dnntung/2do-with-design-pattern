import { Renderer } from "../interfaces/Renderer"
import { TodoItem } from "./Todo"
import { TodoItemRenderer } from "./TodoItemRenderer"

export class TodoListRenderer extends Renderer<TodoItem[]> {
    private _todoRenderer: TodoItemRenderer

    constructor() {
        super()
        this._todoRenderer =new TodoItemRenderer()
    }
    
    // Facade 
    render(data: TodoItem[]) {
        const listEl = document.createElement("ul")
        this._todoRenderer.container = listEl

        super.resetContainer()

        console.log("Rendering items...")
        
        data.map((item: TodoItem) => {
            this._renderTodoItem(item)
        })

        console.log("Adding items to container...")
        this.container.appendChild(listEl)

        console.log("Done render items...")
    }

    private _renderTodoItem(item: TodoItem)  {
        this._todoRenderer.render(item)
    }
}
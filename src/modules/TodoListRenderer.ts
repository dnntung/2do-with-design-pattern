import { Renderer } from "../interfaces/Renderer"
import { TodoItem } from "./Todo"
import { TodoItemRenderer } from "./TodoItemRenderer"

export class TodoListRenderer implements Renderer<TodoItem[]> {
    private _todoRenderer: TodoItemRenderer = new TodoItemRenderer()
    
    // Facade 
    render(data: TodoItem[]): Node {
        const container = document.createElement("ul")

        data.map((item: TodoItem) => container.appendChild(this._renderTodoItem(item)))

        return 
    }

    private _renderTodoItem(item: TodoItem): Node {
        return this._todoRenderer.render(item)
    }
}
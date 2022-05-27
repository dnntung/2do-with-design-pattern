import { Observer } from "../interfaces/Observer";
import { TodoItem } from "./Todo";
import { TodoListRenderer } from "./TodoListRenderer";

export class TodoObserver implements Observer {
    private _renderer: TodoListRenderer
    
    constructor() {
        this._renderer = new TodoListRenderer()
    };

    private _saveToStorage(data: any) {
        localStorage.setItem("todo_items", JSON.stringify(data))
    }

    update(data: TodoItem[]) {
        this._saveToStorage(data)
        this._renderer.render(data)
    }
}
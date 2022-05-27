import { Observer } from "../interfaces/Observer";
import { Renderer } from "../interfaces/Renderer";
import { TodoItem } from "./Todo";
import { TodoListRenderer } from "./TodoListRenderer";

export class TodoObserver implements Observer {
    private _renderer: TodoListRenderer
    
    constructor(renderer: TodoListRenderer) {
        this._renderer = renderer
    };

    private _saveToStorage(data: TodoItem[]) {
        localStorage.setItem("todo_items", JSON.stringify(data))
    }

    update(data: TodoItem[]) {
        this._saveToStorage(data)
        this._renderer.render(data)
    }
}
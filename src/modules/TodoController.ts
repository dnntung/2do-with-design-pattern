import { HistorySnapshot } from "./History";
import { TodoItem } from "./Todo";

export class TodoController {
    private _todoItems: TodoItem[];
    private static _controller: TodoController;
    private _history: HistorySnapshot

    constructor() {
        try {
            this._todoItems = JSON.parse(localStorage.getItem("todo_items"))
        }
        catch(err) {
            this._todoItems = []
        }
    }

    setTodoItems(todoItems: TodoItem[]) {
        this._todoItems = todoItems
    }

    // Singleton 
    static getInstance(): TodoController {
        if (!this._controller) {
            this._controller = new this()
        }

        return this._controller
    }

    createTodo(title: string, desc: string) {
        this._todoItems.push(new TodoItem(this._todoItems.length, title, desc))
    }

    editTodo(id: number, title: string, desc: string) {
        const todoItem: TodoItem = this._todoItems.find(item => item.id === id)
        todoItem.updateTodoItem(title, desc)
    }

    // Memento 
    saveHistory() {
        this._history =  new HistorySnapshot(this, this._todoItems)
    }

    rollbackFromHistory() {
        this._history.restore()
    }
}
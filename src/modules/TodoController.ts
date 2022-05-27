import { Renderer } from "../interfaces/Renderer";
import { TodoHistorySnapshot } from "./History";
import { ObserverManager } from "./ObserverManager";
import { TodoItem } from "./Todo";
import { TodoListRenderer } from "./TodoListRenderer";
import { TodoObserver } from "./TodoObserver";

export class TodoController {
    private _todoItems: TodoItem[];
    private static _controller: TodoController;
    private _history: TodoHistorySnapshot
    private _observerManager: ObserverManager;

    constructor() {
        this._observerManager = new ObserverManager()
        try {
            const storageItems: any[] = JSON.parse(localStorage.getItem("todo_items")) || []
            this.todoItems =  storageItems.map(item => new TodoItem(item._id, item._title, item._desc))
        }
        catch(err) {
            this._todoItems = []
        }
    }

    set renderer(renderer: TodoListRenderer) {
        this._observerManager.subscribe(new TodoObserver(renderer))
    }

    get todoItems() {
        return this._todoItems
    }

    set todoItems(todoItems: TodoItem[]) {
        this._todoItems = todoItems
        this._observerManager.notify(this._todoItems)
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
        this._observerManager.notify(this._todoItems)
    }

    editTodo(id: number, title: string, desc: string) {
        const todoItem: TodoItem = this._todoItems.find(item => item.id === id)
        todoItem.update(title, desc)
        this._observerManager.notify(this._todoItems)
    }

    removeTodo(id: number) {
        this._todoItems= this._todoItems.filter(item => item.id != id)
        this._observerManager.notify(this._todoItems)
    }

    // Memento 
    saveHistory() {
        this._history =  new TodoHistorySnapshot(this, this._todoItems)
    }

    rollbackFromHistory() {
        this._history.restore()
    }
}
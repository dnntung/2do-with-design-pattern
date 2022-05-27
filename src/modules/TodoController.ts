import { HistorySnapshot } from "./History";
import { ObserverManager } from "./ObserverManager";
import { TodoItem } from "./Todo";
import { TodoListener } from "./TodoListener";
import { TodoObserver } from "./TodoObserver";

export class TodoController {
    private _todoItems: TodoItem[];
    private static _controller: TodoController;
    private _history: HistorySnapshot
    private _observerManager: ObserverManager;

    constructor() {
        try {
            this._todoItems = JSON.parse(localStorage.getItem("todo_items"))
        }
        catch(err) {
            this._todoItems = []
        }

        this._observerManager.subscribe(new TodoObserver())
    }

    setTodoItems(todoItems: TodoItem[]) {
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
        this._history =  new HistorySnapshot(this, this._todoItems)
    }

    rollbackFromHistory() {
        this._history.restore()
    }
}
import { HistorySnapshot } from "../interfaces/HistorySnapshot";
import { TodoItem } from "./Todo";
import { TodoController } from "./TodoController";

export class TodoHistorySnapshot implements HistorySnapshot {
    private _controller: TodoController;
    private _data: TodoItem[]

    constructor(controller: TodoController, data: TodoItem[]) {
        this._controller = controller;
        this._data = data
    }

    restore() {
        this._controller.todoItems = this._data
    }
}
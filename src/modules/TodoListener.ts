import { TodoItem } from "./Todo"

export class TodoListener {
    _onChange: (todoItems: TodoItem[]) => void
    constructor(onChange: (todoItems: TodoItem[]) => void) {
        this._onChange = onChange
    }

    update(data: TodoItem[]) {
        if (this._onChange) {
            this._onChange(data)
        }
    }
}
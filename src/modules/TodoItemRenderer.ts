import { Renderer } from "../interfaces/Renderer";
import { TodoItem } from "./Todo";
import { TodoController } from "./TodoController";

export class TodoItemRenderer extends Renderer<TodoItem> {

    // Facade 
    render(data: TodoItem): void {
        console.log(data.completed)

        const itemContainer = document.createElement("li")
        itemContainer.setAttribute("data-id", data.id.toString())
        itemContainer.className = "list-group-item list-group-item-action"

        const checkboxEl: HTMLInputElement = this._renderTodoStatus(data.completed)
        const titleEl: HTMLElement = this._renderTitle(data.title, data.completed)
        const subtitleEl: HTMLElement = this._renderSubtitle(data.desc, data.completed)

        itemContainer.appendChild(checkboxEl)
        itemContainer.appendChild(titleEl)
        itemContainer.appendChild(subtitleEl)

        itemContainer.onclick = (e) => {
            const completed = !data.completed
            TodoController.getInstance().completeTodo(data.id, completed)
        } 


        this.container.prepend(itemContainer)
    }

    private _renderTitle(title: string, completed: boolean):HTMLElement {
        let titleEl
        if (!completed) {
            titleEl =  document.createElement("span")
        }else {
            titleEl = document.createElement("del")
        }
        titleEl.textContent = title

        return titleEl
    }

    private _renderSubtitle(subtitle: string, completed: boolean):HTMLElement {
        const subtitleEl =  document.createElement("p")
        subtitleEl.innerText = subtitle

        return subtitleEl
    }

    private _renderTodoStatus(completed: boolean): HTMLInputElement {
        const checkBoxEl = document.createElement("input")
        checkBoxEl.setAttribute("type", "checkbox");
        checkBoxEl.className = "form-check-input me-3"
        checkBoxEl.checked = completed

        return checkBoxEl
    }
}
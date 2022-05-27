import { Renderer } from "../interfaces/Renderer";
import { TodoItem } from "./Todo";

export class TodoItemRenderer extends Renderer<TodoItem> {

    // Facade 
    render(data: TodoItem): void {
        const itemContainer = document.createElement("li")

        itemContainer.appendChild(this._renderTodoStatus(data.completed))
        itemContainer.appendChild(this._renderTitle(data.title))
        itemContainer.appendChild(this._renderSubtitle(data.desc))

        this.container.appendChild(itemContainer)
    }

    private _renderTitle(title: string):HTMLElement {
        const titleEl =  document.createElement("h5")
        titleEl.innerText = title

        return titleEl
    }

    private _renderSubtitle(subtitle: string):HTMLElement {
        const subtitleEl =  document.createElement("p")
        subtitleEl.innerText = subtitle

        return subtitleEl
    }

    private _renderTodoStatus(completed: boolean):HTMLElement {
        const checkBoxEl = document.createElement("input")
        checkBoxEl.setAttribute("type", "checkbox");
        checkBoxEl.checked = completed

        return checkBoxEl
    }
}
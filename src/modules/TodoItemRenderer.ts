import { Renderer } from "../interfaces/Renderer";
import { TodoItem } from "./Todo";

export class TodoItemRenderer implements Renderer<TodoItem> {
    // Facade 
    render(data: TodoItem): Node {
        const container = document.createElement("li")

        container.appendChild(this._renderTitle(data.title))
        container.appendChild(this._renderSubtitle(data.desc))
        container.appendChild(this._renderTodoStatus(data.completed))

        return container
    }

    private _renderTitle(title: string):Node {
        const titleEl =  document.createElement("h5")
        titleEl.innerText = title

        return titleEl
    }

    private _renderSubtitle(subtitle: string):Node {
        const subtitleEl =  document.createElement("p")
        subtitleEl.innerText = subtitle

        return subtitleEl
    }

    private _renderTodoStatus(completed: boolean):Node {
        const checkBoxEl = document.createElement("input")
        checkBoxEl.setAttribute("type", "checkbox");
        checkBoxEl.checked = completed

        return checkBoxEl
    }
}
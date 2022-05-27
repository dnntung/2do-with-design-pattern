export abstract class Renderer<T> {
    private _container: HTMLElement

    set container(container: HTMLElement) {
        this._container = container
    }

    get container() {
        return this._container
    }

    resetContainer() {
        this._container.innerHTML = ""
    }

     render(data: T): void {}
}
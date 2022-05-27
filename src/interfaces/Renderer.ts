export interface Renderer<T> {
    render: (data: T) => Node
}
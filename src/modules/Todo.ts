
export class TodoItem  {
    private _id: number;
    private _title: string;
    private _desc: string;
    private _createdAt: Date;
    private _updatedAt: Date;
    private _completed: boolean;

    constructor(id: number, title: string, desc: string) {
        this._id = id;
        this._title = title
        this._desc = desc
        this._createdAt = new Date()
        this._updatedAt = new Date()
        this._completed = false
    }

    get id() {
        return this._id
    }

    get title() {
        return this._title
    }

    get desc() {
        return this._desc
    }

    get completed() {
        return this._completed
    }

    set title(title: string) {
        this._title = title
    }

    set desc(desc: string) {
        this._desc = desc
    }

    set completed(completed: boolean) {
         this._completed = completed
    }

    update(title: string, desc: string) {
        this._title = title
        this._desc = desc
        this._updatedAt = new Date()
    }
}
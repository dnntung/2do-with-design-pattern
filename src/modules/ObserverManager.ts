import { Observer } from "../interfaces/Observer"
import { TodoObserver } from "./TodoObserver"

export class ObserverManager {
    // Observer
    private  _observers:  Observer[]

    subscribe( observer: Observer) {
        this._observers.push(observer)

    }

    unsubscribe(observer: Observer) {
        this._observers = this._observers.filter(o => o!== observer)
    }

    notify(data: any) {
        this._observers.map(o => o.update(data))
        
    }
}
    
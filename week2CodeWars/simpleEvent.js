class Event {
    constructor() {
        this.subscribers = new Set();
    }
     
    subscribe(func) {
        this.subscribers.add(func);
    }
     
    unsubscribe(func) {
        this.subscribers.delete(func); 
    }
     
    emit(...args) {
        this.subscribers.forEach(s => s(...args));
    }
}


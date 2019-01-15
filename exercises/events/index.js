// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};
  }

  // Register an event handler
  on(eventName, callback) {
    // if evenet name is not register
    if (this.events[eventName] === undefined) {
      // register [callback]
      this.events[eventName] = [callback];
    } else {
      // this.events.push callback
      this.events[eventName].push(callback);
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    // event exist
    if (this.events[eventName]) {
      // for each fire cb
      this.events[eventName].forEach(event => {
        event();
      });
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    // if event exist
    if (this.events[eventName]) {
      // delete name
      delete this.events[eventName];
    }
  }
}

module.exports = Events;

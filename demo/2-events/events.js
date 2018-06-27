/** @jsx h */
const h = require("virtual-dom/h")
const { ActorSystem } = require("akkajs")
const { DomActor, localPort } = require("akkajs-dom/work")

const domHandlers = require("./dom-handlers.js")

const system = ActorSystem.create()

class EchoKeys extends DomActor {
  constructor () {
    super("root")
    this.status = []
  }
  render (value) {
    console.log("event " + value)
    if (value !== undefined) {
      this.status.push(<li>{value}</li>)
    }

    return <div>{[
      <button>click me</button>,
      <ul>{this.status}</ul>
    ]}</div>
  }
  events () {
    return { "click": domHandlers.click }
  }
  receive (msg) {
    this.update(msg)
  }
}

system.spawn(new EchoKeys())

module.exports = {
  localPort
}

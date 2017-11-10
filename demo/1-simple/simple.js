/** @jsx h */
const h = require("virtual-dom/h")
const { ActorSystem } = require("akkajs")
const { DomActor, localPort } = require("akkajs-dom/work")

const system = ActorSystem.create()

class Clock extends DomActor {
  constructor () {
    super("root")
  }
  render (value) {
    return <h3>{value}</h3>
  }
  receive (msg) {
    this.update(msg)
  }
}

const actor = system.spawn(new Clock())

setInterval(
  () => {
    actor.tell(new Date().toString())
  }, 1000
)

module.exports = {
  localPort
}
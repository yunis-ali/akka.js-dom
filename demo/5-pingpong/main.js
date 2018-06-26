const { UiManager, defaultUnamtchedFunction } = require("../../page")

new UiManager(
  require("./ping.js"),
  // new SharedWorker("./js/ping.out.js"),
  require("./dom-handlers.js"),
  defaultUnamtchedFunction,
  "ping"
)

new UiManager(
  // require("./pong.js"),
  // new Worker("./js/pong.out.js"),
  new SharedWorker("./js/pong.out.js"),
  require("./dom-handlers.js"),
  defaultUnamtchedFunction,
  "pong"
)

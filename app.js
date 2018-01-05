const express = require("express")
const app = express()

const util = require("ethereumjs-util")

const Extra = require("./extra.js")
const extra = new Extra()

const start = () => {
  app.get("/", onRequest)
  app.listen(3000, () => console.log("App listening on port 3000"))
}

const onRequest = (req, res) => {
  res.send("Hello World")
}

// start()

const privateKey = "0x3a1076bf45ab87712ad64ccb3b10217737f7faacbf2872e88fdd9a537d8fe266"
const privateBuffer = Buffer.from(privateKey)

const publicBuffer = util.privateToPublic(privateKey)
const publicKey = publicBuffer.toString()

const addressBuffer = util.privateToAddress(privateKey)
const address = addressBuffer.toString()

console.log("Private key: " + privateKey)
console.log("Public key: " + publicKey)
console.log("Address: " + address)
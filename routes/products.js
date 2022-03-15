const express = require("express")
const router = express.Router()

const contentful = require("contentful")

const client = contentful.createClient({
  space: "xb7h25767st1",
  accessToken: "xjUz7iN0IMF86bXX0Ymge_EeuBAbjbbh2WbTxjEhKQ0",
})

router.get("/", async (req, res) => {
  const response = await client.getEntries()
  res.send(response)
})

module.exports = router

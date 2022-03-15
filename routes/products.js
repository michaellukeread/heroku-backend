const express = require("express")
const router = express.Router()

const contentful = require("contentful")

const client = contentful.createClient({
  space: "xb7h25767st1",
  accessToken: "xjUz7iN0IMF86bXX0Ymge_EeuBAbjbbh2WbTxjEhKQ0",
})

router.get("/", async (req, res) => {
  const response = await client.getEntries()
  const filteredProducts = await response.items.filter(
    (item) => item.sys.contentType.sys.id === "product"
  )
  const items = await filteredProducts.reduce(
    (acc, item) => [
      ...acc,
      { ...item.fields, image: item.fields.image.fields.file },
    ],
    []
  )

  res.send(items)
})

module.exports = router

import express from "express"
import contentful from "contentful"

const router = express.Router()

const client = contentful.createClient({
  space: process.env.SPACE_KEY,
  accessToken: process.env.ACCESS_TOKEN,
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

export default router

const express = require("express")
const app = express()
const port = 3000

const products = require("./routes/products")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  )
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type")
  res.setHeader("Access-Control-Allow-Credentials", true)
  next()
})

app.use("/api/v1/products", products)

app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)

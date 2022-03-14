const express = require("express")
const app = express()
const port = 3000

let example = "starting"

app.get("/", (req, res) => res.send("Hello World!"))
app.get("/api/v1/test", (req, res) => res.send({ string: example }))
app.post("/api/v1/:string", (req, res) => (example = req.params.string))

app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)

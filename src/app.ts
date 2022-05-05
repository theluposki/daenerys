import express from "express"
import cors from "cors"

import UserRouters from "./routers/User"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/users", UserRouters)

export default app
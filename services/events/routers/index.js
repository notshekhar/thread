import { taskSchema } from "../schemas/index.js"

export default async function (app, options) {
    app.post("/", taskSchema)
}

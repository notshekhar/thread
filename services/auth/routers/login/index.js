import { loginSchema } from "../../schemas/index.js"

export default async function (app, opts) {
    app.post("/", loginSchema)

}


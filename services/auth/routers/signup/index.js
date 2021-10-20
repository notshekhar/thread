import { signupSchema } from "../../schemas/index.js"

export default async function (app, opts) {
    app.post("/", signupSchema)
}

con
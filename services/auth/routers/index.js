import { authSchema, loginSchema, signupSchema } from "../schemas/index.js"

export default async function (app, options) {
    app.get("/", authSchema)
}

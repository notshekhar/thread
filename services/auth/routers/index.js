import { example_schema } from "../schemas/index.js"

export default async function (app, options) {
    app.get("/:id", example_schema)
}

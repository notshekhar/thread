import { dirname, join } from "path"
import { fileURLToPath } from "url"
import AutoLoad from "fastify-autoload"

export default async function (app, opts) {
    app.register(AutoLoad, {
        dir: join(dirname(fileURLToPath(import.meta.url)), "routers"),
    })
    app.listen(21)
}

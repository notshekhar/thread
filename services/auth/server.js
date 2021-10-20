import { dirname, join } from "path"
import { fileURLToPath } from "url"
import AutoLoad from "fastify-autoload"
import Cors from "fastify-cors"
import JWT from "fastify-jwt"
import Swagger from "fastify-swagger"
import { jwt_secret } from "./config.js"
import example_plugin from "./plugins/index.js"

export default async function (app, opts) {
    app.register(Swagger, {
        exposeRoute: true,
        routePrefix: "/docs",
        swagger: {
            info: { title: "auth-service" },
        },
    })
    app.register(Cors, { origin: "*" })
    app.register(JWT, { secret: jwt_secret })
    app.register(example_plugin)
    app.register(AutoLoad, {
        dir: join(dirname(fileURLToPath(import.meta.url)), "routers"),
    })
    // app.register(route)
    // app.register("/bob", route)
    app.listen(80)
}

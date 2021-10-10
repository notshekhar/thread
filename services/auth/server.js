import { dirname, join } from "path"
import { fileURLToPath } from "url"
import AutoLoad from "fastify-autoload"

export default async function (app, opts) {
    // app.register(import("fastify-swagger"), {
    //     exposeRoute: true,
    //     routePrefix: "/docs",
    //     swagger: {
    //         info: { title: "auth-service" },
    //     },
    // })
    app.register(AutoLoad, {
        dir: join(dirname(fileURLToPath(import.meta.url)), "routers"),
    })
    // app.register(route)
    // app.register("/bob", route)
    app.listen(3000, () => {
        console.log("Listening to 3000")
    })
}

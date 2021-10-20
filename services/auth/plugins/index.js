import fp from "fastify-plugin"

export default fp(async function plugin(app, opts, done) {
    app.decorate("example", (val) => {
        if (val) done()
        throw new Error("error")
    })
})
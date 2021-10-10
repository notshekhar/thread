export default async function (app, options) {
    app.get("/", async (req, res) => {
        return "hello bob"
    })
}

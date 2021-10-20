export async function taskHandler(req, res) {
    const { type, message } = req.body
    console.log(type, "->", message)
    return { type, message }
}

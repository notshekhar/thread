import monk from "monk"
const db = monk("localhost/thread")
const users = db.get("users")

export async function authHandler(req, res) {
    const { token } = req.headers
    this.example()
    // let { username } = this.jwt.verify(token)
    // let user = await users.findOne({ username })
    // if (user) return true
    return false
}

export async function signupHandler(req, res) {
    const { username, password } = req.body
    let user = await users.findOne({ username })
    if (user) throw new Error("User Already Exists")
    user = await users.insert({
        username,
        password,
        created_at: new Date(),
    })
    console.log(user)
    return this.jwt.sign({ username })
}

export async function loginHandler(req, res) {
    const { username, password } = req.body
    let user = await users.findOne({ $and: [{ username }, { password }] })
    if (user) return this.jwt.sign({ username })
    throw new Error("Try again or Signup")
}

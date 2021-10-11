export default function Login() {
    return (
        <div>
            <div className="login-wrap">
                <form>
                    <input placeholder="username" name="username"></input>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                    ></input>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

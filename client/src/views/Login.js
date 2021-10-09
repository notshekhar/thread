export default function Login() {
    return (
        <div>
            <div className="login-wrap">
                <input placeholder="username" name="username"></input>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                ></input>
                <button>Login</button>
            </div>
        </div>
    )
}

import { Route, Redirect } from "react-router-dom"
import auth from "../js/auth"

export default function ProctectedRoute({
    authRedirect,
    component: Component,
    ...rest
}) {
    return (
        <Route
            {...rest}
            render={(props) => {
                //is already auth and auth redirection url is given
                if (authRedirect)
                    if (auth.isAuth())
                        return (
                            <Redirect
                                to={{
                                    pathname: authRedirect,
                                    state: {
                                        from: props.location,
                                    },
                                }}
                            />
                        )
                    else return <Component {...props}></Component>
                if (auth.isAuth()) return <Component {...props}></Component>
                return (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {
                                from: props.location,
                            },
                        }}
                    />
                )
            }}
        ></Route>
    )
}

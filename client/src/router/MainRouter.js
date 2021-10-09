import { ProctectedRoute } from "../components"

import { Switch } from "react-router-dom"

import { Login, Home } from "../views"

export default function MainRounter() {
    return (
        <Switch>
            <ProctectedRoute
                exact
                authRedirect="/"
                path="/login"
                component={Login}
            ></ProctectedRoute>
            <ProctectedRoute path="/" component={Home}></ProctectedRoute>
            {/* <Route component={NotFound} /> */}
        </Switch>
    )
}

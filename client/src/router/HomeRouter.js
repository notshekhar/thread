import { Switch, Route } from "react-router-dom"

export default function HomeRounter() {
    return (
        <Switch>
            <Route exact path="/" component={() => <div>nested 1</div>}></Route>
            <Route
                exact
                path="/two"
                component={() => <div>nested router</div>}
            ></Route>
        </Switch>
    )
}

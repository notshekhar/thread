import "./css/App.css"
import { MainRounter } from "./router"
import { BrowserRouter } from "react-router-dom"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <MainRounter></MainRounter>
            </BrowserRouter>
        </div>
    )
}

export default App

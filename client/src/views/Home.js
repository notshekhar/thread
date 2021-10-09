import { useState } from "react"
import { HomeRounter } from "../router"
import { useHistory } from "react-router-dom"

export default function Home() {
    const history = useHistory()
    const [a, setA] = useState(true)
    return (
        <div>
            <button
                onClick={() => {
                    history.push(a ? "./two" : "/")
                    setA(!a)
                }}
            >
                click
            </button>
            <HomeRounter></HomeRounter>
        </div>
    )
}

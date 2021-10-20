import { useEffect, useState } from "react"
import Codes from "../js/country_codes"
import { Authenticate } from "../components"

function CountryCode({ onCodeSelected }) {
    const [open, setOpen] = useState(false)
    const [codes] = useState(Codes)
    const [selectedIndex, setSelectedIndex] = useState(102)
    function toggle() {
        setOpen(v => !v)
    }
    useEffect(() => {
        toggle()
        toggle()
    }, [selectedIndex])
    return (
        <div className="input countrycode" onClick={() => toggle()}>
            <div className="selected_code">
                {codes[selectedIndex].name}
            </div>
            {open && (
                <div className="codes_list">
                    {
                        codes.map((code, i) => (
                            <div key={i} className="code" onClick={() => {
                                setSelectedIndex(i)
                                onCodeSelected(code)
                            }}>
                                {code.name}
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    )
}

export default function Login() {
    const [number, setNumber] = useState("")
    const [code, setSelectedCode] = useState({ code: "+91" })
    function authenticate(e) {
        e.preventDefault()
        alert(0)
    }
    return (
        <div>
            <form onSubmit={authenticate}>
                <div className="mobile-wrap">
                    <CountryCode onCodeSelected={(c) => setSelectedCode(c)} />
                    <div className="input mobile">
                        <div className="mobile_code">{code?.code}</div>
                        <input
                            type="number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </div>
                    <div id="recaptcha"></div>
                    <Authenticate number={number} code={code}>
                        <button type="submit">Enter</button>
                    </Authenticate>
                </div>
            </form>
        </div>
    )
}

async function GET(url, token) {
    let res = await fetch(url, {
        headers: {
            Token: token,
        },
    })
    let json = await res.json()
    return json
}

async function POST(url, data, token) {
    let res = await fetch(url, {
        method: "POST",
        headers: {
            "content-type": "appicaltion/json",
            Token: token,
        },
        body: JSON.stringify(data),
    })
    let json = await res.json()
    return json
}

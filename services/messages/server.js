const http = require("http")
const Socket = require("socket.io")

const server = http.createServer()

const io = Socket(server, {
    cors: {
        origin: "*",
    },
})
io.on("connection", (socket) => {
    socket.on("join-room", (id) => {
        socket.join(id)
    })
    console.log(socket.sockets)
    // sendData = {
    //     // type: emoji / text / image / video / audio / location,
    //     // by: id,
    //     // value: value,
    // }
    socket.on("message", (to_ids, messageData) => {
        to_ids.forEach((id) => {
            socket.to(id).emit.broadcast("recieve_message", {
                ...messageData,
                id: id,
            })
        })
    })
})
server.listen(3001, () => {
    console.log("message service on port 3001")
})

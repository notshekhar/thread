// import { baseUrl } from "../config"
// import { GET } from "../js/common"

function Auth() {
    this.auth = false
    this.isAuth = () => {
        return this.auth
    }
    this.login = () => {
        this.auth = true
    }
    this.logout = () => {
        this.auth = false
    }
}

export default new Auth()

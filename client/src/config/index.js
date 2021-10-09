export const DEPLOY = "dev"

export const baseUrl =
    DEPLOY === "dev" ? "http://127.0.0.1:3000/" : "something else"

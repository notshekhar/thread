import {
    authHandler,
    loginHandler,
    signupHandler,
} from "../controllers/index.js"

const Items = {
    type: "object",
    properties: {
        id: { type: "string" },
        name: { type: "string" },
    },
}

export const authSchema = {
    schema: {
        headers: {
            type: "object",
            required: ["token"],
            properties: {
                token: { type: "string" },
            },
        },
        response: {
            200: {
                type: "boolean",
            },
        },
    },
    handler: authHandler,
}

export const signupSchema = {
    schema: {
        body: {
            type: "object",
            required: ["username", "password"],
            properties: {
                username: { type: "string" },
                password: { type: "string" },
            },
        },
        response: {
            200: {
                type: "string",
            },
        },
    },
    handler: signupHandler,
}

export const loginSchema = {
    schema: {
        body: {
            type: "object",
            required: ["username", "password"],
            properties: {
                username: { type: "string" },
                password: { type: "string" },
            },
        },
        response: {
            200: {
                type: "string",
            },
        },
    },
    handler: loginHandler,
}

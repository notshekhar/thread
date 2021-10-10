import { example_handler } from "../controllers/index.js"

const Items = {
    type: "object",
    properties: {
        id: { type: "string" },
        name: { type: "string" },
    },
}

export const example_schema = {
    schema: {
        params: {
            type: "object",
            properties: {
                id: { type: "string" },
            },
        },
        response: {
            200: {
                type: "array",
                items: Items,
            },
        },
    },
    handler: example_handler,
}

export const example_schema_post = {
    body: {
        type: "object",
        require: ["name", "token"],
        properties: {
            name: { type: "string" },
            token: { type: "string" },
        },
    },
    schema: {
        response: {
            200: {
                type: "array",
                items: Items,
            },
        },
    },
}

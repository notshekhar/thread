import { taskHandler } from "../controllers/index.js"


export const taskSchema = {
    schema: {
        body: {
            type: "object",
            required: ["type", "message"],
            properties: {
                type: { type: "string" },
                message: { type: "string" }
            }
        },
        response: {
            200: {
                type: "object",
                properties: {
                    type: { type: "string" },
                    message: { type: "string" }
                }
            },
        },
    },
    handler: taskHandler,
}

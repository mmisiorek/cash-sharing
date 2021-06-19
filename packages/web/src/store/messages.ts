import { MessagesStateType } from "./messages.types"
import { ActionType } from "./index.types"

const initialState: MessagesStateType = {
    messages: ["iop"]
}

// Use the initialState as a default value
export function messagesReducer(state: MessagesStateType = initialState, action: ActionType): MessagesStateType {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        case "something_else":
            return {
                messages: ["a"]
            }

        // Do something here based on the different types of actions
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}
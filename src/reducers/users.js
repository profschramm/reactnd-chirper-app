import { RECEIVER_USER } from '../action/users'

export default function users (state = {}, action) {  // Default arg to init store
                                                     // Alternative: createStore() function
    switch (action.type) {
        case RECEIVER_USER :
            return {
                ...state,       // The rest of the state
                ...action.users // The new user info from the action
            }
        default:
            return state

    }
}
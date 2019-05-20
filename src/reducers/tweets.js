import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from '../actions/tweets'

export default function tweets (state = {}, action) {  // Default arg to init store
                                                   // Alternative: createStore() function
    switch (action.type) {
        case RECEIVE_TWEETS :
            return {
                ...state,       // The rest of the state
                ...action.tweets // The new user info from the action
            }
        case TOGGLE_TWEET :
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    likes: action.hasLiked === true  
                    ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
                    : state[action.id].likes.concat([action.authedUser])
                }
            }
        case ADD_TWEET:
            const {tweet } = action
            let replyingTo = {}
            if (tweet.replyingTo !== null) {
                replyingTo = {   // An object
                    [tweet.replyingTo]: {  // Contents of this object will be itself plus...
                        ...state[tweet.replyingTo],
                        replies: state[tweet.replyingTo].replies.concat([tweet.id])
                    }
                }
            }
            return {
                ...state,
                [action.tweet.id]: action.tweet,
                ...replyingTo,

            }

        default:
            return state

    }

}


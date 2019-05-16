import {getInitialData} from '../utils/api'
import {receiveUsers} from '../actions/users'
import {receiveTweets} from '../actions/tweets'
import {setAuthedUser} from '..actions/authedUser'

const AUTHED_ID = 'tylermcginnis'   // Faking a logged-in user

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then (({ user, tweets}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveTweets(tweets))
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }
}
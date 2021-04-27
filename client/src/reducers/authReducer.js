import { FETCH_USER } from '../actions/types'

// eslint-disable-next-line
export default function(state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            //if action.payload is empty, js treats it as a false
            //by adding a || false, we are essentially checking if
            //the action.payload is empty or not. If it's empty, it
            //will become '' || false which is false || false.
            return action.payload || false
        default:
            return state;
    }
}
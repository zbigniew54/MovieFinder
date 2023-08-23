// import { combineReducers } from "redux"
import {
    MOVIE_ADD, MOVIE_DELETE, MOVIE_UPDATE, MOVIE_LOAD_ALL
} from "./actions"
 
/* MOVIES: watched and rated
object:
{
     movId: {
            imdbID: (str) same as movId
            Title: (str)
            Type: (str) movie/series/episode
            Year: (num)
            Poster: URL to img
            rating: (int) [0:5]
            toWatch: (bool)
     }
     ...
}
*/
export default function movies( state=[], action )
{
    const {type,payload} = action

    switch( type )
    {
        // add movie to 'watched-rated' list if item with imdbID doesnt exists
        // ignores duplicates
        // payload={ imdbID, rating, ... }
        case MOVIE_ADD: {
            // console.log('MOVIE_ADD',payload)
            if( payload.imdbID in state )
                return state
            else               
                return {...state, [payload.imdbID]: { ...payload } }
        }
        
        // payload: movId,
        case MOVIE_DELETE: {
            // console.log('MOVIE_DELETE',payload)
            const newState = {...state}
            delete newState[payload]
            return newState
        }

        // payload: { movId, newRating },
        case MOVIE_UPDATE: {
            // console.log('MOVIE_UPDATE',payload)

            const movId = payload.imdbID

            if( movId in state ){
                const newState = {...state} 
                newState[movId] = { ...newState[movId], ...payload }
                // payload.newRating
                return newState
            }
            else{
                console.error('Movie doesnt exists!', payload)
                return state
            }
                // newState.movId = { rating: newRating }
            // return newState
        }

        case MOVIE_LOAD_ALL:
            return payload

        default:
            return state
    }
} 
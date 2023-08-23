import {connect} from "react-redux"
import {movieAdd,movieUpdate} from "../redux/actions"
import MovieData from "../components/MovieData"

function mapsState( state, ownProps )
{
    let movieObj

    // read data from state (if this movie is in state)
    if( ownProps.movie.imdbID in state ){
        const objInState = state[ ownProps.movie.imdbID ]
        movieObj = { ...ownProps.movie, ...objInState}
    }
    else
        movieObj = { ...ownProps.movie }

    return {
        movie: movieObj
    }
}

function mapDispatch( dispatch, ownProps )
{
    return {
        onRate: ( newRating ) =>{ 
            dispatch( movieAdd( ownProps.movie ) )  // add if doesnt exists
            dispatch( movieUpdate({
                imdbID: ownProps.movie.imdbID,
                rating: newRating 
            })) 

        //     dispatch( movieUpsert({ 
        // ...ownProps.movie, rating: newRating } ) )
        },
        onUpdateToWatch: ( toWatch ) =>{
            dispatch( movieAdd( ownProps.movie ) )  // add if doesnt exists
            dispatch( movieUpdate({
                imdbID: ownProps.movie.imdbID,
                toWatch: toWatch 
            })) 

        }
        //   dispatch( movieUpsert({ ...ownProps.movie, toWatch: toWatch } ) )
    }
}
 
export default connect( mapsState, mapDispatch )( MovieData )
import {connect} from "react-redux"
import {movieAdd,movieUpdate} from "../redux/actions"
import MovieMini from "../components/MovieMini"

function mapsState( state, ownProps )
{ 
    const movieObj = { ...ownProps.movie }

    // read rating from state (for) movies from search querry
    if( !('rating' in movieObj) &&
        ownProps.movie.imdbID in state )
        movieObj.rating = state[ ownProps.movie.imdbID ].rating

    return {
        movie: movieObj
    }
}

function mapDispatch( dispatch, ownProps )
{
    return {
        onRate: ( newRating ) =>
        {
            dispatch( movieAdd( ownProps.movie ) )  // add if doesnt exists
            dispatch( movieUpdate({
                imdbID: ownProps.movie.imdbID,
                rating: newRating 
            }))  
        }
    }
}
 
export default connect( mapsState, mapDispatch )( MovieMini )
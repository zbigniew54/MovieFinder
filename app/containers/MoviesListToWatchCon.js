import {connect} from "react-redux"
import {getMoviesToWatch} from "../redux/selectors"
import MoviesList from "../components/MoviesList"
 
function mapsState( state )
{ 
    return {
        list: getMoviesToWatch( state )
    }
}


export default connect( mapsState )( MoviesList )
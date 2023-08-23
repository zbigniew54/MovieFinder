import {connect} from "react-redux"
import {getMoviesRated} from "../redux/selectors"
import MoviesList from "../components/MoviesList"
 
function mapState( state )
{ 
    return {
        list: getMoviesRated( state )
    }
}
 
export default connect( mapState )( MoviesList )
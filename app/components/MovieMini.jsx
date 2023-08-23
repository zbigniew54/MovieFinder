// import React,{useState} from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom" 
import StarRating from './StarRating'

// PROPS:
// Title
// Year
// imdbID
// Type: movie, series, episode
// Poster: URL to img
export default function MovieMini({ movie, onRate })
{ 
    return <article className="movie-mini">
        <Link to={ "/movie/"+movie.imdbID } >
            <header>
                <h2>{ movie.Title }</h2>
                <h3>{ movie.Type }, { movie.Year }</h3>
            </header>
        
            <img src={ movie.Poster } alt={ movie.Title } />
            
        </Link>
        <footer>
            <StarRating 
                rating={ movie.rating }
                onChange={ onRate } />
        </footer>
    </article>
}
 
MovieMini.propTypes = { 
    movie: PropTypes.object.isRequired,  
    onRate: PropTypes.func.isRequired,    // onRate( newRating ) 
}
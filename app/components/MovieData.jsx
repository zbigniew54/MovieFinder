// import React from "react"
import StarRating from './StarRating'
import PropTypes from "prop-types"
/* 
MOVIE DATA:
    Title	    "Harry Potter and the Half-Blood Prince"
    Year	    "2009"
    Rated	    "PG"
    Released	"15 Jul 2009"
    Runtime	    "153 min"
    Genre	    "Action, Adventure, Family"
    Director	"David Yates"
    Writer	    "Steve Kloves, J.K. Rowling"
    Actors	    "Daniel Radcliffe, Emma Watson, Rupert Grint"
    Plot	    `As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as "the property of the Half-Blood Prince" and begins to learn more about Lord Voldemort's dark past.`
    Language	"English, Latin"
    Country	    "United Kingdom, United States"
    Awards	    "Nominated for 1 Oscar. 9 wins & 39 nominations total"
    Poster	    "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg"
    Ratings	    [] {Source,Value}
    Metascore	"78"
    imdbRating	"7.6"
    imdbVotes	"571,577"
    imdbID	    "tt0417741"
    Type	    "movie"
    DVD	        "01 Jun 2011"
    BoxOffice	"$302,334,374"
    Production	"N/A"
    Website	    "N/A"
    Response	"True"

    rating: int
    toWatch: bool
*/ 
export default function MovieData({ movie, onRate, onUpdateToWatch })
{
    return <article className="movie">
        <div 
            className="bg_image"
            style={{ backgroundImage:`url(${movie.Poster})`}}>
             <div className="overlay"></div>
        </div>
        <div>
            <img src={ movie.Poster } alt={ movie.Title }/>
        </div>
        <div className="desc">
            <StarRating 
                rating={ movie.rating }
                onChange={ onRate } />
            <br />
            { movie.toWatch 
                ?<button onClick={ e=>onUpdateToWatch(false) }>Remove from watch list</button>
                :<button onClick={ e=>onUpdateToWatch(true) }>Add to watch list</button>
            }

            <h1>{ movie.Title }</h1>
            <h3>{ movie.Type }, { movie.Year }</h3>

            <p>Genre: { movie.Genre }</p>
            <p>Actors: { movie.Actors }</p>

            <p>{ movie.Plot }</p>
        </div>
    </article>
}
 
MovieData.propTypes = { 
    movie: PropTypes.object.isRequired,  
    onRate: PropTypes.func.isRequired,    // onRate( newRating )
    onUpdateToWatch: PropTypes.func.isRequired,    // onUpdateToWatch: ( toWatch ) toWatch:(bool)
}

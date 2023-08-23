export const MOVIE_ADD="MOVIE_ADD"
export const MOVIE_DELETE="MOVIE_DELETE" 
export const MOVIE_UPDATE="MOVIE_UPDATE"
export const MOVIE_LOAD_ALL="MOVIE_LOAD_ALL"
 
// add movie to 'watched-rated' list if item with imdbID doesnt exists
// ignores duplicates
/* movieData={
    imdbID: (str) same as movId
    Title: (str)
    Type: (str) movie/series/episode
    Year: (num)
    Poster: URL to img
    rating: int (0-5)
} */
export function movieAdd( movieData )
{
    if( typeof(movieData.imdbID)!="string" )
        throw Error("Invalid imdbID", movieData ) 

    return{
        type: MOVIE_ADD,
        payload: movieData,
    }
}

// remove movie from 'watched-rated' list
export function movieDelete( movId )
{
    if( typeof(movId)!="string" )
        throw Error("Invalid movId", movId )

    return{
        type: MOVIE_DELETE,
        payload: movId,
    }
}

// Updates movie with movieData.imdbID
// Movie must exists
// movieData: must contain movieData, may not contain other params that are not updated
export function movieUpdate( movieData )
{
    if( typeof(movieData.imdbID)!="string" )
        throw Error("Invalid imdbID", movieData ) 

    return function( dispatch, getState )
    {
        // update state
        dispatch( {
            type: MOVIE_UPDATE,
            payload: movieData,
        })

        // save state to local storage
        console.log( "Save Data to Local Storage" )
        const moviesJSON = JSON.stringify( getState() )
        // console.log( moviesJSON )
        localStorage.setItem( "movies", moviesJSON )
    }
} 

// Overwrites current movies data with new data
export function movieLoadAll( moviesArr )
{
    return{
        type: MOVIE_LOAD_ALL,
        payload: moviesArr,
    }
}
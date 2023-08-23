

// returns array of movies (objects) with property toWatch=true
export function getMoviesToWatch( state )
{
    const toWatchArr=[]
    for( const movId in state ){
        const movie = state[movId]
        if( movie.toWatch )
            toWatchArr.push( movie )
    }
    return toWatchArr
}

// returns array of movies (objects) with rating>0
export function getMoviesRated( state )
{
    const ratedArr=[]
    for( const movId in state ){
        const movie = state[movId]
        if( movie.rating>0 )
            ratedArr.push( movie )
    }
    return ratedArr
}
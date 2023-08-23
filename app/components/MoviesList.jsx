// import React from "react"
import PropTypes from "prop-types"
import MovieMiniCon from '../containers/MovieMiniCon'

export default function MoviesList({ list })
{
    return <div className="movies-list">{
        list.map( (item) => <MovieMiniCon key={ item.imdbID } movie={ item } /> )     
    }</div>
}

MoviesList.propTypes = { 
    list: PropTypes.array.isRequired,   
}
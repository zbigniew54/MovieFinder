import  React,{useState, useEffect } from "react"
// import PropTypes from "prop-types"
import PulseLoader from "react-spinners/PulseLoader"
import { useParams } from "@remix-run/react";
import { getMovie } from '../core'
import MovieDataCon from '../containers/MovieDataCon'
  
export default function MovieDetails()
{     
    const [movieData,setMovieData] = useState(null)  
    const [status,setStatus] = useState("")     // fetch status

    const params = useParams()
    const movId = params.movId ?? ""

    // onMount:
    useEffect(()=>{
        getMovie( movId, setMovieData, setStatus ) 
    },[])

    return <>
    { (movId == "" || status=="error")
        ? "Cant load movie"
        : null
    }
    { status=="loading" &&
        <PulseLoader color="#ffd000" /> 
    }
    { movieData &&
        <MovieDataCon movie={movieData} />
    }
    </>

    //getMovie( movId, onFind, onStatusChange ) 
}
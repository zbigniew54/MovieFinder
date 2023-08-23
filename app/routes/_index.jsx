import {useState} from "react"
import PulseLoader from "react-spinners/PulseLoader"
import { searchMovie } from '../core'
import MoviesList from '../components/MoviesList'

import imgSearch from "~/images/search3.png"

export const meta = () => {
  return [
    { title: "Movies Finder" },
    { name: "description", content: "Remix, React, Redux App" },
  ]
}

export default function Search()
{
    const [page,setPage] = useState(1)
    const [movName,setMovName] = useState("")
    // const [searchBlocks,setSearchBlocks] = useState([]) // blocks with search results
  
    const [status,setStatus] = useState("")     // fetch status
    const [resultsArr,setResultsArr] = useState([]) // search results


    function onFind( newResultsArr ){    
        // console.log('onFind',newResultsArr)
        setResultsArr( prevArr => [...prevArr, ...newResultsArr ])
        setPage( p=>p+1 )
    }

    function search( forcePage=null ){    
        searchMovie( movName, onFind, setStatus, forcePage ?? page ) 
    }
 
    return <> 
        <form 
            className={ "search"+( status=="" ?" full" :"")} 
            onSubmit={ e=>{
                e.preventDefault() 
                setPage(1)
                setResultsArr([])
                search(1)
            }}>
            <h1>Find Movies and Series</h1>
            <input 
                placeholder="type title"
                type="text"
                value={movName}
                onChange={ e=>setMovName(e.target.value) }
            />
            <button type="submit"><img alt="Search" src={ imgSearch } /></button>
        </form>
        { status=="error" && <b>Not Found</b> }
        
        <MoviesList list={ resultsArr } />

        { status=="loading" && 
            <PulseLoader color="#ffd000" /> 
        }
        { resultsArr.length>0 &&
            <button 
                onClick={ e=>{ search() } } 
                className="big wide">More</button>
        }
    </>
}
const OMDB_API_URL = "https://www.omdbapi.com"
const OMDB_API_KEY = ""

// search movie by title
// onFind( resultsArr )
// onStatusChange( status ) status = [loading,finished,error]
export function searchMovie( movTitle, onFind, onStatusChange, page=1 )
{
    if( typeof(onFind) != "function" )
        throw Error("onFind is not a function")
    if( typeof(onStatusChange) != "function" )
        throw Error("onStatusChange is not a function")

    let getReq = OMDB_API_URL+'/?apikey='+OMDB_API_KEY
    getReq += "&s="+encodeURIComponent(movTitle) 
    
    const vPage = parseInt(page) 
    if( !isNaN(vPage) && vPage > 1 )
        getReq += "&page="+vPage

    onStatusChange("loading")

    fetch( getReq )
        .then( req=>req.json() )
        .then( data=>
        {
            if( data.Error ){
                onStatusChange("error")
                console.error( data.Error )
            }else{ 
                onStatusChange("finished")
                onFind(data.Search) 
            }
        })
        .catch(err=>{
            onStatusChange("error")
            
            console.error(err)
        } )
}

// get movie by id
// onFind( resultObj )
// onStatusChange( status ) status = [loading,finished,error]
export function getMovie( movId, onFind, onStatusChange ) 
{
    if( typeof(onFind) != "function" )
        throw Error("onFind is not a function")
    if( typeof(onStatusChange) != "function" )
        throw Error("onStatusChange is not a function")

    onStatusChange("loading")

    fetch( OMDB_API_URL+'/?apikey='+OMDB_API_KEY+"&i="+movId )
        .then( req=>req.json() )
        .then( data=>{
            if( data.Error ){
                onStatusChange("error")
                console.error( data.Error )
            }else{ 
                onStatusChange("finished")
                onFind(data) 
            }
        })
        .catch(err=>{
            onStatusChange("error")
            console.error(err)} )    
}

import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react"

import {useEffect } from "react"
import {Provider} from "react-redux" 
import store from "./redux/store"
import {movieLoadAll} from "./redux/actions"

import TopBar from './components/TopBar'
// import Search from './routes/Search'
// import MovieDetails from './routes/MovieDetails'
// import MoviesRated from './routes/MoviesRated'
// import MoviesToWatch from './routes/MoviesToWatch'
 
import style from "~/styles/style.css"

export const links = () => [
    { rel: "stylesheet", href: style  },
];

export default function App() 
{
    useEffect(()=>{
        try{
            console.log('Load Data from Local Storage')
            const moviesJSON = localStorage.getItem("movies")
            if( moviesJSON ){
                const moviesObj = JSON.parse( moviesJSON )
                // console.log( moviesObj )
                store.dispatch( movieLoadAll( moviesObj ) )
            }
        }
        catch( err ){
            console.error("Error loading from local storage:", err)
        }

    },[])

  return (
      <Provider store={store}> 
        <html lang="en" 
            onContextMenu={ 
            // Lock context menu (R-Click) in production mode
            ( process.env.NODE_ENV === "production" )? (e)=> { 
                e.preventDefault() 
                return false } 
                :null 
        }>
            <head>
                <meta charSet="utf-8" />
                <meta 
                    name="viewport" 
                    content="width=device-width,initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                <TopBar/> 
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
      </Provider>
  )
}

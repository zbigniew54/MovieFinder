// import React from "react"
// import PropTypes from "prop-types" 
import { useParams } from "@remix-run/react";
import MoviesListToWatchCon from '../containers/MoviesListToWatchCon'

export default function MoviesToWatch()
{
    const params = useParams()
    const orderBy = params.orderBy ?? ""

    return <MoviesListToWatchCon />
}
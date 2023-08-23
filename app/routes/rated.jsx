// import React from "react"
// import PropTypes from "prop-types"
import { useParams } from "@remix-run/react";
import MoviesListRatedCon from '../containers/MoviesListRatedCon'

export default function MoviesRated()
{
    const params = useParams()
    const orderBy = params.orderBy ?? ""

    return <MoviesListRatedCon />
}
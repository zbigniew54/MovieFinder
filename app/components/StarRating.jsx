import React,{useState } from "react" 
import PropTypes from "prop-types"

// double click same star sets rating to zero 
export default function StarRating( props ) 
{ 
	const [rating, setRating] = useState( props.rating ?? 0 )
    // const rating = props.rating

	const num_stars = props.stars || 5
	const starArr = [] 
    
	for( let s=0; s<num_stars; s++ )
		starArr.push( s )
 
	return( 
		<div className="starsRating" > 
		{ 
			starArr.map(( s ) => ( 
				<div 
					key={ s }
					onClick={ ( props.readOnly )? null: () => 
                    {
                        const newRating = (rating==(s+1))? 0: s+1
                        setRating( newRating ) 
                        
                        if( typeof props.onChange == "function" )
                            props.onChange( newRating )
                    }} 
					className={ "star star_" + (s < rating? 1: 0) +  (props.readOnly? " readOnly":"")  }
				> 
				</div> )) 
		} 
		</div>
	)
}
 
StarRating.propTypes = { 
    stars: PropTypes.number,                // stars [int][1:n] num of stars (max rating) (def:5)
    rating: PropTypes.number,               // rating [int][0:stars] current rating (visible stars) (def:0)
    readOnly: PropTypes.bool,               // readOnly: (optional) bool (def:true)
    onChange: PropTypes.func.isRequired,    // onChange( newRating ) -> called on rating change
}
import React from 'react'
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {TourContext} from '../context'
// import defaultImg from '../images/hotels/Ankara/1.Marinem Hotel Ankara'

export default function Tour({tour}) {
    const context = useContext(TourContext)
        const {
            title,
            totalPrice,
            slug
        } = tour
    const {min} = totalPrice
    return (
        <div className="tour">
        <Link to={`/detail/${slug}`} className="tour-link" >
            <h1 className="tour-title">{title}</h1>
                <p className="tour-text">from $ per {min} person</p>
            <div className="tour-images">
                {/* <img src={defaultImg} alt="" className="tour-img"/> */}
            </div>
        </Link>
        </div>
    )
    }

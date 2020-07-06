import React from 'react'
import {useContext} from 'react'
import Filters from './Filters'
import {TourContext} from '../context'
import Tour from './Tour'

export default function Results() {
    const context = useContext(TourContext)
    const {
        sortedTours
    } = context
    let tour = sortedTours
    tour = tour.map((item , index) => {
        return <Tour key={index} tour={item} />
    } )
    return (
        <React.Fragment>
        <header className="p-3" >
            <h1 className="header-title">
                iran trip planer
            </h1>
        </header>
        <div className="filters__container">
            <Filters />
        </div>
        <div className="tours">
        {tour}
        </div>

        </React.Fragment>  
    )
}

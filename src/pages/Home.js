import React from 'react'
import {useContext} from 'react'
import {TourContext} from '../context'
import Filters from './Filters'
import Loading from './Loading'

export default function Home() {
    const context = useContext(TourContext)

    const {
        loading
    } = context
    if (loading) {
        return <Loading />
    } 
    return (
        <React.Fragment>
        <header className="main-header">
            <h3 className="header-title">
                iran trip planer
            </h3>
            <div className="home-header-about">
            <h1 >
                Plan your trip iran
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laboriosam corrupti ex id rem temporibus, ipsa repellat nam fuga molestiae saepe nemo officia reprehenderit aliquid accusamus officiis, rerum illum obcaecati quasi esse debitis dolore doloribus quae autem?
            </p>
            </div>
        </header>
        <div className="filters__container">
            <Filters />
        </div>   
        </React.Fragment>
        )
}

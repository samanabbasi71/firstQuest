import React, { Component } from 'react'
import {TourContext} from '../context'
import Error from './Error'
import {Link} from 'react-router-dom'

export default class TourPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug 
        }
    }
    static contextType = TourContext
    render() {
        const {getTour} = this.context
        const Tour = getTour(this.state.slug)
        
        if(!Tour) {
            return <Error />
        }
        const {
            title,
            overView,
            cities
        } = Tour
        console.log(cities);
            let citiesName = cities[0].name
            let citiesImages = cities[0].images
            let image = citiesImages.map(item => item.src)
            console.log(image[0]);

        
        
        return (
            <div className="tourpage__container">
                <header className="header">
                    <h3 className="header-slug">
                    iran trip planer
                    </h3>
                    <img src="" alt="" className=""/>
                    <div className="header-info">
                        <div className="breadcrumb">
                            <Link to="/" className="breadcrumb-link">
                            <p className="breadcrumb-item">1stQuest</p>
                            </Link>
                            <p className="breadcrumb-item breadcrumb-p"> / </p>
                            <p className="breadcrumb-item">{title}</p>
                        </div>
                        <h1 className="header-title">
                        {title}
                        </h1>
                        <p className="header-about">
                            {overView}
                        </p>
                        <a href="#story" className="header-anchor">read story of this on</a>
                    </div>
                </header>
                <div className="tour-content"  >
                        <section className="tour-section" id="visa">
                            <p className="tour-section-title">
                                get iran e-visa and travel insurance
                            </p>
                            <p className="tour-section-info">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum deleniti nemo iste provident fuga delectus tempora eius voluptates recusandae ut ea corporis commodi iure, quibusdam exercitationem animi iusto, alias quasi perferendis accusamus labore inventore voluptas eveniet facilis. Nemo numquam officia itaque. Debitis placeat ipsum consequatur ut odit maiores veritatis praesentium?
                            </p>
                            <div className="tour-cards">
                                <Link to="#" className="tour-card">
                                    <div className="tour-card-top">
                                        <p className="tour-section-title">
                                        <span className="tour-card-icon">
                                            <i className="fa fa-book"></i>
                                        </span> iran online visa aplication form
                                        </p>
                                    </div>
                                    <p className="tour-card-bottom">
                                        between $ <span>19</span> - $ <span>29</span>
                                    </p>
                                </Link>
                                <Link to="#" className="tour-card">
                                    <div className="tour-card-top">
                                        <p className="tour-section-title">
                                        <span className="tour-card-icon">
                                            <i className="fa fa-shield"></i>
                                        </span> iran travel insurance
                                        </p>
                                    </div>
                                    <p className="tour-card-bottom">
                                        between $ <span>19</span> - $ <span>29</span>
                                    </p>
                                </Link>
                            </div>
                        </section>
                    </div>
                {
                    cities.map((item, index)=> {
                        return (
                        <div className="tour-content" key={index} >
                        <section className="tour-section" id="visa">
                            <p className="tour-section-title">
                                {item.name}
                            </p>
                            <p>{item.days} Days</p>
                            <p className="tour-section-info">
                                {item.thingsToDo}
                            </p>
                        <div className="tourpage-images">
                            {item.images.map((item, index )=> {
                            return <img src={item.src} key={index} className="tourpage-img" />
                            })}
                            {/* <a to="#" className="tourpage-images-link">
                                        learn more about {item.name}
                            </a> */}
                        </div>
                        <p className="tour-section-info">
                            cost and services in {item.name}
                        </p>
                            <div className="tour-cards">
                                <Link to="#" className="tour-card">
                                    <div className="tour-card-top">
                                        <p className="tour-section-title">
                                        <span className="tour-card-icon">
                                            <i className="fa fa-car"></i>
                                        </span> pick-up
                                        </p>
                                    </div>
                                    <p>
                                        From Airport To Hotel
                                    </p>
                                    <p className="tour-card-bottom">
                                        $ 19
                                    </p>
                                </Link>
                                <Link to="#" className="tour-card">
                                    <div className="tour-card-top">
                                        <p className="tour-section-title">
                                        <span className="tour-card-icon">
                                            <i className="fa fa-building"></i>
                                        </span> Hotel
                                        </p>
                                    </div>
                                    <p>Grand Hotel {item.name} </p>
                                    <p className="tour-card-bottom">
                                        between $ <span>19</span> - $ <span>29</span>
                                    </p>
                                </Link>
                            </div>
                        </section>
                    </div>
                        )
                    })
                }
            </div>
        )
    }
}

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
    getDetails = async () => {
        try {
            fetch(`https://1stquest.com/api/plan/v1/itineraries/${this.state.slug}`).then(res => {
                return res.json()
            }).then(res => {
            let response = res.data
            let toursDetail = response
        console.log(toursDetail);
            })
        } catch (error) {
            console.log(error);
            
        }
    }
    componentDidMount() {
        this.getDetails()
    }
    render() {
        const {getTour} = this.context
        const Tour = getTour(this.state.slug)
        
        if(!Tour) {
            return <Error />
        }
        const {
            title,
            overView
        } = Tour
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
                <div className="tour-content">
                    <section className="tour-section" id="visa">
                        <p className="tour-section-title">
                            get iran e-visa and travel insurance
                        </p>
                        <p className="tour-section-info">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque rerum dicta accusamus, excepturi omnis voluptatum minus fuga dolorem blanditiis tempora.
                        </p>
                        <div className="tour-cards">
                            <Link to="#" className="tour-card">
                                <div className="tour-card-top">
                                    <p className="tour-section-title">
                                    <span className="tour-card-icon">
                                        <i className="fa fa-book"></i>
                                    </span> iran visa aplication form
                                    </p>
                                    <span className="tour-card-icon">
                                        <i className="fa fa-book"></i>
                                    </span>
                                </div>
                                <p className="tour-card-bottom">
                                    between $ <span>19</span> - $ <span>29</span>
                                </p>
                            </Link>
                            <Link to="#" className="tour-card">
                                <div className="tour-card-top">
                                    <p className="tour-section-title">
                                    <span className="tour-card-icon">
                                        <i className="fa fa-book"></i>
                                    </span> iran visa aplication form
                                    </p>
                                    <span className="tour-card-icon">
                                        <i className="fa fa-book"></i>
                                    </span>
                                </div>
                                <p className="tour-card-bottom">
                                    between $ <span>19</span> - $ <span>29</span>
                                </p>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

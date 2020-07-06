import React, { Component } from 'react'
const TourContext = React.createContext()

export default class TourProvider extends Component {
    state= {
        tours: [],
        sortedTours: [],
        loading: true,
        days: '',
        name: '',
        budget: ''
    }
    // get tours
    getTours = async () => {
        try {
            fetch("https://1stquest.com/api/plan/v1/itineraries").then(res => {
                return res.json()
            }).then(res => {
        let response = res.data
        let tours = response
        console.log(tours);
        
        this.setState({
            tours,
            sortedTours: tours,
            loading: false,

        })
            })
        } catch (error) {
            console.log(error);
            
        }
    }

    // get tours detail
    // getDetails = async () => {
    //     try {
    //         fetch("https://1stquest.com/api/plan/v1/itineraries/cities").then(res => {
    //             return res.json()
    //         }).then(res => {
    //     let toursDetail = this.formatData(res.data)
    //     console.log(toursDetail);
    //         })
    //     } catch (error) {
    //         console.log(error);
            
    //     }
    // }


    componentDidMount() {
        // this.getCities()
        this.getTours()
        // this.getDetails()
    }

    getTour = slug => {
        let temptours = [...this.state.tours]
        const tour = temptours.find(tour => tour.slug === slug)
        return tour
    }

    handleChange = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? 
        target.checked : target.value
        const name = event.target.name
        
        this.setState({
            [name]: value
        }, this.filtering)
        
    }

    filtering = () => {
        let {
            tours,
            name,
            loading,
            days,
            price,
            budget
        } = this.state

        price = parseInt(price)
        let filteredTours = tours

        // city 
        if(!loading && name !== ''  && name !== 'All') {
            filteredTours = filteredTours.filter(tour => {
                if(tour.cities) {
                    for(let cityIndex = 0; cityIndex < tour.cities.length ; cityIndex++) {
                        let city = tour.cities[cityIndex]
                        if(city.name && city.name === name ) {
                            return tour
                        }
                    }
                }
            })
    }
        // dyas
        if(!loading && days !== '' && days !== 'all' ) {
            filteredTours = filteredTours.filter(tour => {
                if(tour.cities) {
                    for(let cityIndex = 0; cityIndex < tour.cities.length ; cityIndex++) {
                        let city = tour.cities[cityIndex]
                        if(city.days && city.days.toString() === days ) {
                            return tour
                        }
                    }
                }
            })
        }
         // tight budget
        if(!loading && budget === 'all') {
            filteredTours = filteredTours.filter(tour => tour.totalPrice.min >= 0  )
        }  
        // tight budget
        if(!loading && budget === '1') {
            filteredTours = filteredTours.filter(tour => tour.totalPrice.min >= 0 && tour.totalPrice.max <= 800 )
        }  
        // mid budget
        if(!loading && budget === '2') {
            filteredTours = filteredTours.filter(tour => tour.totalPrice.min >= 800 && tour.totalPrice.max <= 1000  )
        }   
        // luxury budget
        if(!loading && budget === '3') {
            filteredTours = filteredTours.filter(tour => tour.totalPrice.min >= 1000  )
        } 
        this.setState({
            sortedTours: filteredTours
        } , console.log("state changed"))

    }

    // handleReset = () => {
    //     let {
    //         tours
    //     } = this.state
    //     this.setState({
    //         sortedTours: tours,
    //     })
    // }
    render() {
        return (
            <TourContext.Provider value={{
                ...this.state,
                getTour: this.getTour,
                handleChange: this.handleChange
            }}>
                {this.props.children}
            </TourContext.Provider>
        )
    }
} 

const TourConsumer = TourContext.Consumer

export {TourContext, TourConsumer, TourProvider}

import React from 'react'
import {useContext} from 'react'
import Select from 'react-select';
import {TourContext} from '../context'
import {Link} from 'react-router-dom'
import Loading from './Loading'

// get all unique values
const getUnique = (value) => {
    return [...new Set(value)]
}
export default function Filters() {

    const context = useContext(TourContext)
        const {
            tours,
            loading,
            handleChange,
            name,
            days,
            budget,
            handleName,
            selectedOption
        } = context

        // if (loading) {
        //     return <Loading />
        // } 
        let names = []
        names = tours.map(tour => {
            return tour.cities.map(city => {
                return city.name
            })
        })
        var destinations = Array.prototype.concat.apply([], names);
        // price
        
        // get unique cities
        destinations = getUnique(destinations)
        destinations = ['All', ...destinations]
        let options = []
        for(let i = 0; i < destinations.length; i++){
            let name = destinations[i]
            let index = i
            let city = {
                value: name,
                label: name
            }
            options.push(city)
        }
        // options = destinations.map((item, index) => {
        //     return <option key={index} value={item} > {item} </option>
        // })
        console.log(options);
        
        return (
            <div className="filters">
                <section className="filter-section">
        <form className="filter-form">
            <div className="filter">
        <Select
        value={selectedOption}
        onChange={handleName}
        options={options}
        isMulti
        isSearchable
        name='name'
        id='name'
        isClearable={false}
      />
       </div>
        {/* <div className="filter">
        <p className="filter-label">preferred destinations</p>
            <select className="filter-ul" value={name} name="name" id="name" onChange={handleChange} 
            className="filter-select" required
            >
            <option value="" disabled selected>Select Iran Cities</option>
                    {destinations}
            </select>
        </div>  */}
        {/* <BudgetRange /> */}
     <div className="filter">
    <p className="filter-label">duration</p>
        <select value={days} id="days" name="days" onChange={handleChange}
        className="filter-select" required
        >
            <option value="" disabled selected>How Long ? </option>
            <option  value="all" className="filter-option">
                All
            </option>
            <option  value="1" className="filter-option">
            One Week
            </option>
            <option  value="2" className="filter-option">
                Two Week
            </option>
            <option  value="3" className="filter-option">
                One Month
            </option>
        </select>
    </div> 
 <div className="pair-select">
<div className="filter">
<p className="filter-label">budget range</p>
        <select value={budget} id="budget" name="budget"
        className="filter-select"
        onChange={handleChange} required>
            <option value="" disabled selected>How Much ?</option>
            <option  value="all" className="filter-option">
                All
            </option>
            <option  value="1" className="filter-option">
                Tight Budget
            </option>
            <option  value="2" className="filter-option">
                Mid Budget
            </option>
            <option  value="3" className="filter-option">
                Luxury Budget
            </option>
        </select>
    </div> 
    {/* travelers */}
     <div className="filter">
        <p className="filter-label">travelers</p>
        <select id="travelers" name="travelers"
        className="filter-select"
        required>
            <option value="" disabled selected>How Many Guys?</option>
            <option  name="all" className="filter-option">
                All
            </option>
            <option  name="one" className="filter-option">
                1 Passenger
            </option>
            <option  value="two" className="filter-option">
                2 Passenger
            </option>
            <option  value="three" className="filter-option">
                3 Passenger
            </option>
            <option  value="four" className="filter-option">
                4 Passenger
            </option>
        </select>
    </div> 
    </div> 
    {/* test */}

    <Link to="/results" className="search-link">
        <button className="search-btn">
            search
        </button>
    </Link>
</form>
</section>
</div>
)
}
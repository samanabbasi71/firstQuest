// import React, {Component} from 'react';
// import Select from 'react-select';
// import {TourContext} from '../context'
 
// const options = [
//   { value: 'All', label: 'All' },
//   { value: '1', label: 'One Week' },
//   { value: '2', label: 'Two Week' },
//   { value: '3', label: 'Three Week' },
// ];
 
// export default class App extends Component {
//   static contextType = TourContext
//   state = {
//     selectedOption: null,
//   };

//   handleChange = selectedOption => {
//     this.setState({ selectedOption });
//     console.log(`Option selected:`, selectedOption);
//   };
//   render() {
//     const { selectedOption } = this.state;
//     const {
//       handleChange
//     } = this.context
 
//     return (
//       <Select
//         value={selectedOption}
//         onChange={handleChange}
//         options={options}
//         name="days"
//         id='days'
//         isClearable={false}
//       />
//     );
//   }
// }

// <div className="filter">
// <p className="filter-label">duration</p>
//     <select value={days} id="days" name="days" onChange={handleChange}
//     className="filter-select" required
//     >
//         <option value="" disabled selected>How Long ? </option>
//         <option  value="all" className="filter-option">
//             All
//         </option>
//         <option  value="1" className="filter-option">
//         One Week
//         </option>
//         <option  value="2" className="filter-option">
//             Two Week
//         </option>
//         <option  value="3" className="filter-option">
//             One Month
//         </option>
//     </select>
// </div> 
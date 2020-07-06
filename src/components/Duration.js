import React from 'react'
import {useContext} from 'react'
// import { Select } from 'element-react';
// import 'element-theme-default';
// import { i18n } from 'element-react'
// import locale from 'element-react/src/locale/lang/en'
import { TourContext } from '../context';


export default function Duration({tours}) {
const context = useContext(TourContext)
  const {
    oneWeek,
    twoWeek,
    oneMonth,
    duration,
    handleChange
  } = context
  
    // i18n.use(locale);
    return (
      <select value={duration} name="duration" id="duration" onChange={handleChange}  size="large" placeholder="Pick Duration">
          <option id="oneweek" name="oneweek"  value={oneWeek}>
          One Week
          </option>
          <option id="oneweek" name="oneweek"  value={oneWeek}>
          One Week
          </option>
          <option id="oneweek" name="oneweek"  value={oneWeek}>
          One Week
          </option>
      </select>
    )
  
}

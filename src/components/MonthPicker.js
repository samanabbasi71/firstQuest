import React, { Component } from 'react'
import { DatePicker } from 'element-react';
import { Layout } from 'element-react';
import 'element-theme-default';
import { i18n } from 'element-react'
import locale from 'element-react/src/locale/lang/en'


export default class MonthPicker extends Component {

    constructor(props) {
        super(props)
        this.state = {}
      }
      
      render() {
        i18n.use(locale);
        const {value1, value2, value3} = this.state
      
        return (
        <DatePicker
                size="large"
                value={value2}
                placeholder="Pick a month"
                onChange={date=>{
                  console.debug('month DatePicker changed: ', date)
                  this.setState({value2: date})
                }}
                selectionMode="month"
                />
        )
      }
  
}

import React, { Component } from 'react'
import { Select } from 'element-react';
import 'element-theme-default';
import { i18n } from 'element-react'
import locale from 'element-react/src/locale/lang/en'


export default class BudgetRange extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      options: [{
        value: 'Option1',
        label: 'Option1'
      }, {
        value: 'Option2',
        label: 'Option2'
      }, {
        value: 'Option3',
        label: 'Option3'
      }, {
        value: 'Option4',
        label: 'Option4'
      }, {
        value: 'Option5',
        label: 'Option5'
      }],
      value: []
    };
  }
  
  render() {
    i18n.use(locale);
    return (
      <Select value={this.state.value} size="large">
        {
          this.state.options.map(el => {
            return <Select.Option key={el.value} label={el.label} value={el.value} />
          })
        }
      </Select>
    )
  }
  
}

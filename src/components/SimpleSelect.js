import React, { Component } from 'react'
import { Select } from 'element-react';
import 'element-theme-default';
import { i18n } from 'element-react'
import locale from 'element-react/src/locale/lang/en'


export default class SimpleSelect extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
          options: [{
            value: 1,
            label: 'One Week'
          }, {
            value: 2,
            label: 'Two Week'
          }, {
            value: 3,
            label: 'One Month'
          }],
          value: ''
        };
      }
      
      render() {
i18n.use(locale);
        return (
          <Select value={this.state.value} clearable={true} placeholder="test"
          size="large">
            {
              this.state.options.map(el => {
                return <Select.Option key={el.value} label={el.label} value={el.value} />
              })
            }
          </Select>
        )
      }
      
}
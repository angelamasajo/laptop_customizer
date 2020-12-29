import React, { Component } from 'react';
import Total from './Total'
import Option from './Option'

class Cart extends Component {
  
  
  render () {
    return (
      <section className="main__summary">
            <h2>Your cart</h2>
            <Option 
              USCurrencyFormat={this.props.USCurrencyFormat}
              selectedOption={this.props.selectedOption}
            />
            <Total
              total={this.props.total} 
              USCurrencyFormat={this.props.USCurrencyFormat}
            />
          </section>
    )
  }
}

export default Cart;
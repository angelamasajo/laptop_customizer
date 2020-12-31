import React, { Component } from 'react';
import Specs from './Specs';
import { FEATURES } from './FEATURES';


class MainForm extends Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <Specs
          USCurrencyFormat={this.props.USCurrencyFormat}
          updateFeature={this.props.updateFeature}
          features={FEATURES}
          selected={this.props.selected}
        />
      </form>
    )
  }
}

export default MainForm;

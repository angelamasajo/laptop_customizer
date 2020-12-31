import React, { Component } from 'react';
import slugify from 'slugify';
import Parts from './Parts';
import { FEATURES } from './FEATURES';



class Specs extends Component {

  render() {
    const features = Object.keys(FEATURES).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = FEATURES[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <Parts 
            key={item.name}
            itemHash={itemHash}
            feature={feature}
            selected={this.props.selected}
            updateFeature={this.props.updateFeature}
            item={item}
            USCurrencyFormat={this.props.USCurrencyFormat}
          />

        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });
    return (
      features
    )
  }
}

export default Specs;
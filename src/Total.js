import React, { Component } from 'react';

class Total extends Component {


  render() {
    // const total = Object.keys(this.props.total).reduce(
    //   (acc, curr) => acc + this.props.total[curr].cost,
    //   0
    // );
    return (
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {this.props.USCurrencyFormat.format(this.props.total)}
        </div>
      </div>
    )
  }
}

export default Total;

// import React, { Component } from 'react';

// class Total extends Component {

//   render() {
//     const total = Object.keys(this.props.total).reduce((acc, curr) => {
//       acc + this.props.total[curr].cost, 0;
    
//       return (
//         <div className="summary__total">
//           <div className="summary__total__label">Total</div>
//           <div className="summary__total__value">
//             {this.props.USCurrencyFormat.format(this.props.total)}
//           </div>
//         </div>
//       )
//     });
//     return (
//       total
//     )  
//   }
// }

// export default Total;
import React, { Component } from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increment, decrement } from "../store/modules/counter";

class CounterContainer extends Component {
   render() {
      const { color, number, increment, decrement } = this.props;

      return (
         <Counter
            number={number} //
            increment={increment}
            decrement={decrement}
            color={color}
         />
      );
   }
}

const mapStateToProps = (state) => ({
   number: state.counter.number,
   color: state.counter.color,
});

// const mapDispatchToProps = (dispatch) => ({
//    increment: () => dispatch(increment()),
//    decrement: () => dispatch(decrement()),
// });

const mapDispatchToProps = {
   increment,
   decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

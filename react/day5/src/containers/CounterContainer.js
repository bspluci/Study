import React, { Component } from "react";
import Counter from "../components/Counter";
import { increment, decrement } from "../store/modules/counter";
import { connect } from "react-redux";

class CounterContainer extends Component {
   render() {
      const { number, increment, decrement } = this.props;
      return <Counter number={number} onIncrement={increment} onDecrement={decrement} />;
   }
}

const mapStateToProps = (state) => ({
   number: state.counter.number,
});

const mapDispatchToProps = (dispatch) => ({
   increment: () => dispatch(increment()),
   decrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

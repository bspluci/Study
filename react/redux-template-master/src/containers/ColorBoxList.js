import React, { Component } from "react";
import ColorList from "../components/ColorList";
import { connect } from "react-redux";
import { colorBox, minus } from "../store/modules/counter";

class ColorBoxList extends Component {
   render() {
      const { colorBox, colorName, minus, num } = this.props;

      return (
         <ColorList
            colorBox={colorBox} //
            colorName={colorName}
            minus={minus}
            num={num}
         />
      );
   }
}

const mapStateToProps = (state) => ({
   colorName: state.counter.colorName,
   num: state.counter.num,
});

const mapDispatchToProps = {
   colorBox,
   minus,
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorBoxList);

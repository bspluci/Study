import React, { Component } from "react";
import "./ColorList.css";

class CreateColorBox extends Component {
   render() {
      const { colorBox, colorName, name, plus, minus, num } = this.props;

      const style = {
         display: "flex",
         width: "100px",
         height: "100px",
         backgroundColor: name,
         listStyle: "none",
         opacity: num,
      };

      return (
         <li
            className={name}
            style={style}
            onClick={() => {
               minus(num);
            }}
         ></li>
      );
   }
}

class ColorList extends Component {
   state = {
      input: "",
      name: [],
   };

   handleColorName = (e) => {
      const input = e.target.value;

      this.setState({
         ...input,
         input: input,
      });
   };

   handleCreateColor = (e) => {
      e.preventDefault();

      const { input, name } = this.state;

      this.setState({
         name: name.concat(input),
      });
   };

   render() {
      const { colorBox, colorName, minus, num } = this.props;
      const { name } = this.state;

      return (
         <div>
            <form
               onSubmit={(e) => {
                  this.handleCreateColor(e);
                  colorBox(name);
               }}
               className="ColorList"
            >
               <input onChange={this.handleColorName} placeholder="원하는 색을 입력하세요" />
            </form>
            <ul style={{ display: "flex" }}>
               {name.map((name) => {
                  return (
                     <CreateColorBox
                        name={name} //
                        key={name}
                        minus={minus}
                        num={num}
                     />
                  );
               })}
            </ul>
         </div>
      );
   }
}

export default ColorList;

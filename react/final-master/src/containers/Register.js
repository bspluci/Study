import React, { Component } from "react";
import AuthModal from "../components/auth/AuthModal";
import { connect } from "react-redux";
import { changeInput, resetForm } from "../store/modules/auth";

class Register extends Component {
   handleChange = (e) => {
      const { name, value } = e.target;
      this.props.changeInput({ type: "register", key: name, value });
   };

   handleSubmit = (e) => {
      e.preventDefault();
      this.props.resetForm("register");
   };
   render() {
      return (
         <AuthModal
            type="register"
            form={this.props.register}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
         />
      );
   }
}

const mapStateToProps = (state) => ({
   register: state.auth.register,
});

const mapDispatchToProps = (dispatch) => ({
   changeInput,
   resetForm,
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);

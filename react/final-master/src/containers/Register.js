import React, { Component } from "react";
import AuthModal from "../components/auth/AuthModal";
import { connect } from "react-redux";
import { changeInput, resetForm, registerThunk } from "../store/modules/auth";

class Register extends Component {
   handleChange = (e) => {
      const { name, value } = e.target;
      this.props.changeInput({ type: "register", key: name, value });
   };

   handleSubmit = (e) => {
      e.preventDefault();
      const { username, password } = this.props.form;
      this.props.registerThunk({ username, password });
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

const mapDispatchToProps = {
   changeInput,
   resetForm,
   registerThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

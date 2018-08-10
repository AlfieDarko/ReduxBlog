import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
// similar to the connect helper

class PostsNew extends Component {
  render() {
    return <div>PostsNew!</div>;
  }
}

export default reduxForm({
  form: "PostsNewForm"
})(PostsNew);
// Make sure that the string you assign to the form property is unique
// If you wanted to make an editForm component,
// IT HAS TO BE DIFFERENT OR IT WILL MESS WITH THE STATE OF THE OTHER FORM!

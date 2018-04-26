import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addArticle } from '../actions/index';

// Connects dispatch with to component
const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};

// This will be a stateful Component
class ConnectedForm extends Component {
  constructor() {
    super();

    this.state = {
      title: ''
    }
  }

  handleChange(e) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // const title = this.state.title;
    const { title } = this.state;
    const id = uuidv1();
    // Auto-magically becomes {id: id, title: title}
    this.props.addArticle({ id, title });
    // Why does this stay blank if our component
    // will be stateful?
    this.setState({
      title: ""
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          <label for="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <button type="submit">ADD</button>
      </form>
    )
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

// Since the connect function is being exported,
// I'm assuming the Component will be rendered
// through that.
export default Form;

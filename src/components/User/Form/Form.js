import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      job: '',
    };

    this.state = this.initialState;
  }

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, job } = this.state;

    return (
      <form>
        <label htmlFor="name">Name
          <input type="text" name="name" value={name} id="name" onChange={this.handleChange} />
        </label>
        <label htmlFor="job">Job
          <input type="text" name="job" value={job} id="job" onChange={this.handleChange} />
        </label>
        <input
          type="button"
          value="Submit"
          onClick={this.submitForm}
        />
      </form>
    );
  }
}

export default Form;

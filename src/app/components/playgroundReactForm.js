import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class PlaygroundForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueA: '',
      valueB: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    console.log('Submitted valueA: ' + this.state.valueA + ', valueB: ' + this.state.valueB);
    event.preventDefault();
  }

  render() {
    return (
      <div className="col-md-8 mx-auto">
        <form onSubmit={this.handleSubmit}>
          <div className="row pb-2">
            <div className="col-md-6 mx-auto">
              <input
                name="valueA" type="text" className="form-control" value={this.state.valueA}
                onChange={this.handleChange} placeholder="Input A" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mx-auto">
              <input
                name="valueB" type="text" className="form-control" value={this.state.valueB}
                onChange={this.handleChange} placeholder="Input B" />
            </div>
          </div>
          <div className="pt-2">
            <input type="submit" className="btn btn-danger" value="Submit to console" />
          </div>
        </form >
        <div className="pt-2">
          <p>
            state of valueA = {this.state.valueA}
          </p>
          <p>
            state of valueB = {this.state.valueB}
          </p>
        </div>
      </div >
    );
  }
}

export default PlaygroundForm;

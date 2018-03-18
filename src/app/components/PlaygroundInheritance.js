import React from 'react';
import PlaygroundForm from './playgroundReactForm';

class PlaygroundChildA extends React.Component {
  render() {
    return (
      <div>
        <p>
          Child - A - {this.props.childText}
        </p>
      </div>
    );
  }
}

function ChildB(props) {
  return (
    <div>
      <p>
        Child - B - {props.childText}
      </p>
    </div>
  );
}

class PlaygroundInheritance extends React.Component {
  render() {
    return (
      <div className="text-center pt-5">
        <h4>{'Components, props, inheritance testing'}</h4>
        <div className="pb-2">
          <PlaygroundChildA childText="I'm props of component A" />
          <ChildB childText="I'm props of component B" />
        </div>
        <div className="pb-2">
          <h4>{'Multiple input testing'}</h4>
        </div>
        <PlaygroundForm />
      </div>
    );
  }
}

export default PlaygroundInheritance;

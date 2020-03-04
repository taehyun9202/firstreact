import React, { Component } from 'react';

class PersonCard extends React.Component {
    render() {
        const {firstName, lastName, age, hairColor} = this.props
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>age: {this.props.age}</p>
                <p>hair color: {this.props.hairColor}</p>
            </div>
        );
    }
}
export default PersonCard
import React, { Component } from 'react';

class PersonCard extends React.Component {
    render() {
        const {firstName, lastName, age, hairColor} = this.props
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>age: {Number(this.props.age)+Number(this.state.clickCount)}</p>
                <p>hair color: {this.props.hairColor}</p>
                <button onClick={this.handleClick}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        ); 
    }
    constructor(props){
        super(props);
        this.state = {
            clickCount: 0
        }
    }
    handleClick = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        })
    }

}
export default PersonCard

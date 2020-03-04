import React, { Component } from 'react';

class HelloWorld extends Component{
    render(){
        return(
            <div>
                {this.props.sometext}
            </div>
        )
    }
}

export default HelloWorld
import React, { useState } from 'react';



const FunctionalPersonCard = props => {
    // -- way 1 --
    const [clickCount, age] = useState(0);

    const Increament = () => {
        age(clickCount + 1);
    }

    return(
    <div>
        <h1>{props.lastName}, {props.firstName}</h1>
        <p>age: {props.age + clickCount}</p>
        <p>hair color: {props.hairColor}</p>
        <button onClick={Increament}>Birthday Button for {props.firstName} {props.lastName}</button>
    </div>

    // -- way2 --
    // const [clickCount, age] = useState(0);
    // return(
    // <div>
    //     <h1>{props.lastName}, {props.firstName}</h1>
    //     <p>age: {props.age + clickCount}</p>
    //     <p>hair color: {props.hairColor}</p>
    //     <button onClick={ () => age(clickCount +1) }>Birthday Button for {props.firstName} {props.lastName}</button>
    // </div>
)
}
    


export default FunctionalPersonCard

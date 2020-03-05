import React, { useState } from 'react';



const FunctionalPersonCard = props => {
return(
    <div>
        <h1>{props.lastName}, {props.firstName}</h1>
        <p>age: {props.age}</p>
        <p>hair color: {props.hairColor}</p>
        {/* <button onClick={this.Increament}>Birthday Button for {props.firstName} {props.lastName}</button> */}
    </div>
)
}
//    const [clickCount, age] = useState(props.age);

//     const Increament = () => {
//         age(clickCount + 1);
//     }
// }


export default FunctionalPersonCard
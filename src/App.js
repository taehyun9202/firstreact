import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import PersonCard from './components/PersonCard'; // personalcard
import FunctionalPersonCard from './components/FunctionalPersonCard'; // functionalpersoncard


// --Helloworld--
// function App() {
//   return (
//     <div className="App">
//       <HelloWorld sometext={"Hello world"}/>
//       <HelloWorld sometext={"reusing this component"}/>
//     </div>
//   );
// }


// --Personcard--
function App() {
  return (
    <div className="App">
      <PersonCard firstName = "Jane" lastName = "Doe" age = "45" hairColor = "Black"/>
      <PersonCard firstName = "John" lastName = "Smith" age = "68" hairColor = "Brown"/>
      <PersonCard firstName = "Millard" lastName = "Fillmore" age = "50" hairColor = "Brown"/>
      <PersonCard firstName = "Maria" lastName = "Smith" age = "62" hairColor = "Brown"/>
    </div>
  );
}
export default App;

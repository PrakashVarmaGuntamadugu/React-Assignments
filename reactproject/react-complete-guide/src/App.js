import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'
//Passing attributes is name and age. Passing content in between tags.
//useState to manage state in a functional component
//useState returns an array with exactly two elements. first element we get back is current state.
//second element is the function that allows to update the state. 
const app = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      {name:'Varma', age:28},
      {name:'Vanya', age:27},
      {name:'Chimmy', age:26}
    ]
  
  
  });

  const [otherState, setOtherstate] = useState('some other value');
  console.log(personsState,otherState);

  const switchNameHandler = () => {
    //console.log('Was clicked');
    // DOnt do this. this.state.persons[0].name = 'Prakash Varma';
    setPersonsState({persons: [
     {name:'Prakash Varma', age:28},
     {name:'Vanya', age:27},
     {name:'Chimmy', age:29}
   ]
  })
  }

    return (
      <div className="App">
        <h1> Hi, I am a React app</h1>
        <p> This is really working </p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age ={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} 
                age={personsState.persons[1].age}
                click={this.switchNameHandler}> My Hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
  
};

export default app;



 

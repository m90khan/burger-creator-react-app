import { useState } from 'react';
import ErrorBoundary from './Errors/errorBoundary';
function App() {
  const [userInput, setUserInput] = useState('');
  const inputChangedHandler = (e) => {
    setUserInput(e.target.value);
  };
  return (
    <div className="App">
      <input
        type="text"
        name=""
        id=""
        value={userInput}
        onChange={(e) => inputChangedHandler(e)}
      />
      <h1>{userInput}</h1>
    </div>
  );
}

export default App;

/*
Context API
globally avaialble js object to store states to be able to use globally. we define some initial poperties and then can set values

const authContext = React.createContext({
authenticate: false,
login: () =>{}
})

export default authContext;

<AuthContext.Provider 
value=({authenticate: this.state.authenticated,
login : this.loginHandler})
*/

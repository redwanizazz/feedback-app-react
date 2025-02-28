
function App(){
    return (
        <div className='container'> //The word is class is reserved 
                                     and as such className is used as an alternative.
            <h1>My App</h1>
        </div>
    );
}

// --> The underlying JS function beneath the function App()
// import React from "react";

// function App() {
//     return React.createElement('div', {className: 'container'}, React.createElement('h1', {}, 'My App'));
// }

export default App;
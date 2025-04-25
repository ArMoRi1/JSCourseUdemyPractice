import logo from './logo.svg';
import './App.css';
import {Component, StrictMode} from 'react';

const Header = () =>{
  return <h2>Hello, IRa!</h2>;
}

// const Field = () =>{
//
//   return
// }
class Field extends Component {
    render() {
          const holder = 'Enter here...';
          const styledField = {
            width: '300px',
            fontSize: '22px',
          };
          return <input placeholder={holder}
                        type="text"
                        style={styledField}/>;
    }
}

function Btn(){
  const text = 'Log in';
  const logged = true;
  // if(logged){
  //   return <button>Entered</button>;
  // }else{
  //   return <button>{text}</button>;
  // }

  return <button>{logged ? 'Enter' : text}</button>
  // return <button>{p}</button>;
}
function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header/>
      </StrictMode>
      <Field/>
      <Btn/>
    </div>
  );
}
export {Header};
export default App;

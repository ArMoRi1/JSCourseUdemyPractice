
import './App.css';

function WhoAmI({name, surname, link}){
  return (
      <div>
        <h1>My name is {name()}, surname - {surname} </h1>
        <a href={link}>My profile</a>
      </div>
  );
}

function App() {
  return (
    <div className="App">
        <WhoAmI name={()=>{return 'Art'}} surname="MOchalov" link="facebook.com"/>
        <WhoAmI name={()=>{return 'Ira'}} surname="GEyna" link="facebook.com"/>
    </div>
  );
}

export default App;

import {Component, Fragment} from 'react';
import './App.css';

class WhoAmI extends Component{
    constructor(props) {
        super(props);
        this.state = {
            years : 27,
            text: '+++',
            position: '',
        }
    }
    nextYear = () =>{
        this.setState(state =>({
            years: state.years + 1,
            text: state.text + "+",
        }));
    }

    commitInputChanges = (e)=>{
        // console.log(e.target.value);
        this.setState({
            position: e.target.value,
        });
    }

    render(){
        const {name, surname, link} = this.props;
        const {position, text, years} = this.state;
        return (
            <>
                <button onClick={this.nextYear}>{text}</button>
                <h1>My name is {name}, surname - {surname}, age - {years}, position - {position} </h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Type position:</span>
                    <input type="text" onChange={this.commitInputChanges}/>
                </form>
            </>
        );
    }
}

function App() {
  return (
    <Fragment>
        <WhoAmI name={'Art'} surname="MOchalov" link="facebook.com"/>
        <WhoAmI name={'Ira'} surname="GEyna" link="facebook.com"/>
    </Fragment>
  );
}

export default App;

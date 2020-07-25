import React from 'react';
import Sounds from './sounds';
import KeyPad from './components/key';
import Display from './components/display';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      display:""
    };
    this.handleDisplay = this.handleDisplay.bind(this);
  }
  
  handleDisplay(name){
    this.setState({
      display:name
    })
  }

 render(){
   const {display} = this.state;
    return (
    <div className="App" id="drum-machine">
    <KeyPad sounds={Sounds} onHandleName = {this.handleDisplay}/>
    <Display display = {display}/>
    </div>
  )};
}

export default App;

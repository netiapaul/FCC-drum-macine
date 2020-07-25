import React from 'react';
import './key.css';

class Drum extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pressed:false
        }
        this.playAudio = this.playAudio.bind(this);
    };
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
      };
    
      componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
      };

    handleKeyPress = e => {
        if (e.keyCode === this.props.sound.keyCode) {
          this.playAudio();
        }
      };

      pressKey(){
        this.setState({
            pressed:true
        })
    };

    playAudio(){
        const {sound,onHandleName} = this.props;
        const audio = document.getElementById(sound.key);
        if (!audio) {
            return;
          }
        audio.play();
        this.pressKey();
        onHandleName(sound.id)
    };

    

    render(){
        const {sound} = this.props;

        return(
            <div className="drum drum-pad" id={sound.id} onClick={this.playAudio}>
                <audio className="clip" src={sound.url} id={sound.key}/>
                
                <button type="button" className="btn btn-outline-primary" onClick={this.playAudio}>
                {sound.key}
                </button>
            </div>
        )
    }
};

export default Drum;
import React from 'react';
import './key.css';
import Drum from './drum';

class KeyPad extends React.Component{
    constructor(props){
        super(props);
    };

    render(){

        const {sounds,onHandleName} = this.props;

        return(
            <div className="card mx-auto mt-4">
                <div className="card-header">
                    Drum Machine
                </div>
                <div className="card-body">
                    {sounds.map(sound=>(
                        <div className="row" key = {sound.id}>
                            <div className="col-4">
                            <Drum className="btn btn-outline-primary" id={sound.key} sound= {sound} onHandleName ={onHandleName} />
                            </div>
                        </div>
                    ))} 
                </div>
            </div>
        )
    }

};

export default KeyPad;


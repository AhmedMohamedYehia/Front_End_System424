import React, { Component } from 'react';
import axios from 'axios';
import './premiumCode.css';

export class premiumCode extends Component {
    state={
        code: ''
    }

    showReject() {
        alert("The subscription code is invalid.");
    }
 
    showConfirm() {
        alert("Congratulations! You are PREMIUM now.");
    }

    sendMail = () =>{
        /*axios.post('')
            .then(res => {

            })*/
    }

    checkCode = () => {
        if(this.state.code !== ""){
            axios.post('')
            .then(res => {
                if(res.status == 204){
                    //console.log(this.state.code);
                    this.showConfirm();
                }
                else{
                    this.showReject();
                }
            })
        }
        else{
            this.showReject();
        }
    }

    onChange = (e) => this.setState({ code: e.target.value });
    
    render() {
        return (
            <div className="container-fluid">
                <div className="blue">
                    <h1 className="boldheader">Get Premium</h1>
                    <ul className="">
                        <li  className="checklist">Listen without the distraction of ads</li>
                        <li  className="checklist">Play music with no phone service</li>
                        <li  className="checklist">Skip as many songs as you want</li>
                    </ul>
                </div>

                <div className="secondpart">
                    <div className="boxdiv">
                        <div className="form-group">
                        <button onClick={this.sendMail} type="button" className="btn btn-success btn-block">GET CODE</button>
                            <label for="formGroupExampleInput">Subscription code</label>
                            <input value={this.state.code} onChange={this.onChange} type="text" name="code" className="form-control" id="formGroupExampleInput" placeholder="XXXX"/>
                        </div>
                        <button onClick={this.checkCode} type="button" className="btn btn-success btn-block">START MY SPOTIFY PREMIUM</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default premiumCode
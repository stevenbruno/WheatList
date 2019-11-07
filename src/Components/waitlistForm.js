import React, {Component} from 'react';
import PartySizeSelector from './partySizeSelector';
import {fakeData, addToWaitlist, getFullWaitlist} from '../DatabaseCalls'


class WaitlistForm extends Component {

    constructor(){
        super();
        this.state={
            guestName: '',
            guestPhoneNumber: '',
            partySize: ''
        }
    }
    onChangeHandler = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    setPartySize = (number) =>{
        this.setState({
            partySize: number
        })
    }

    submitHandler = (e) =>{
        console.log("submitHandler")

        console.log(this.state);

        addToWaitlist(this.state, this.props.name)
        console.log("submitHandler")
        
        this.setState({
            guestName: '',
            guestPhoneNumber:'',
            partySize:''
        })
    }

    render(){
        return(
            <div>
            <form onChange={this.onChangeHandler}>
                <div>
                    <label htmlFor="guestName">Name:</label>
                        <input name="guestName" className="guestName"type="text" />
                </div>


                <div> 
                    <label htmlFor="guestPhoneNumber">Phone Number</label>
                        <input name="guestPhoneNumber" className="guestPhoneNumber" type="text" />
                </div>

                <PartySizeSelector setPartySize={this.setPartySize}/>


                <button onClick={this.submitHandler} type="submit">SUBMIT</button>
            </form>
            </div>
        )
    }

}

export default WaitlistForm;
import React, {Component} from 'react';
import PartySizeSelector from './partySizeSelector';
import Formik from 'formik';


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


                <button type="submit">SUBMIT</button>
            </form>
            </div>
        )
    }

}

export default WaitlistForm;
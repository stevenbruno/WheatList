import React, {Component} from 'react';
import PartySizeSelector from './partySizeSelector';


class WaitlistForm extends Component {

    constructor(){
        super();

        this.state={
            guestName: '',
            guestPhoneNumber: '',
            partySize: ''
        }

    }

    onChangeHandler(){
        
    }

    render(){
        return(
            <div>
            <form>
                <div>
                    <label for="guestName">Name:</label>
                        <input className="guestName"type="text" />
                </div>

                <div> 
                    <label for="phoneNumber">Phone Number</label>
                        <input className="phoneNumber" type="text" />
                </div>

                <PartySizeSelector />


                <button type="submit">SUBMIT</button>
            </form>
            </div>
        )
    }

}

export default WaitlistForm;
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

    onChangeHandler = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        });

        console.log(this.state);

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
                    <label htmlFor="phoneNumber">Phone Number</label>
                        <input name="phoneNumber" className="phoneNumber" type="text" />
                </div>

                <PartySizeSelector />


                <button type="submit">SUBMIT</button>
            </form>
            </div>
        )
    }

}

export default WaitlistForm;
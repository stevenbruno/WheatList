import React, {Component, Fragment} from 'react';
import {cancelReservation} from '../DatabaseCalls'


class CancelForm extends Component{

    constructor(){
        super();

        this.state={
            cancelSubmission: false
        }
    }

    clickHandler = () => {

        cancelReservation(this.props.guestPhoneNumber, 'BrightWok')

        this.setState({
            cancelSubmission: true
        })
        this.props.setFormSubmission()

    }


    render(){
        return(
            <div className="positionInfo">

                <div>
                    <i class="material-icons checkIcon">check_circle_outline</i>&nbsp;
                    Position in line <span className="positionVal">&nbsp;&nbsp;{this.props.waitlistPosition}</span>
                </div>
                <div>
                <i class="material-icons checkIcon">check_circle_outline</i>&nbsp;
                    Estimated wait <span className="positionVal">&nbsp;&nbsp;{this.props.waitTime} minutes</span>
                </div>

                <button className="ui red basic button cancelButton" onClick={this.clickHandler}>Cancel reservation</button>

            </div>
        )

    }

}

export default CancelForm;
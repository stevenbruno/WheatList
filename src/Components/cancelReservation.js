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
            <Fragment>

                <p>You're the {this.props.waitlistPosition}th party in line!</p>

                <p>You have approximately {this.props.waitTime} minutes left.</p>

                <button onClick={this.clickHandler}>Sorry, but I have to cancel!</button>

            </Fragment>
        )

    }

}

export default CancelForm;
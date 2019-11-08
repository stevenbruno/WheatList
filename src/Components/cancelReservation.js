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

                <p>You have approximately {this.props.waitTime} until your table will be ready.</p>

                <button className="ui red basic button" onClick={this.clickHandler}>Cancel reservation</button>

            </Fragment>
        )

    }

}

export default CancelForm;
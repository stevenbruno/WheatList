import React, {Component, Fragment} from 'react';


class CancelForm extends Component{

    constructor(){
        super();

        this.state={
            cancelSubmission: false
        }
    }

    clickHandler = () => {

        this.setState({
            cancelSubmission: true
        })

        this.props.setFormSubmission()

    }


    render(){

        return(
            <Fragment>

                <p>You're the {this.props.waitlistPosition} in line!</p>

                <button onClick={this.clickHandler}>Sorry, but I have to cancel!</button>

            </Fragment>
        )

    }

}

export default CancelForm;
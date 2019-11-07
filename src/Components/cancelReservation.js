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

                <p className="lineText">You're the {this.props.waitlistPosition} in line!</p>

                <button className="ui red basic button" onClick={this.clickHandler}>Cancel reservation</button>

            </Fragment>
        )

    }

}

export default CancelForm;
import React, {Component} from 'react';


class PartySizeSelector extends Component {

    constructor(){
        super();

        this.state ={
            partySize: 0,
            moreSelected: false
        }
    }


    onChangeHandler(e){

        this.setState({
            partySize: e.target.value
        })
    }

    render(){
        return(
            <div className ="partySizeInput">
                <div><input value="1"/>1</div>
                <div><input value="2"/>2</div>
                <div><input value="3"/>3</div>
                <div><input value="4"/>4</div>
                <div><input value="5"/>5</div>
                <div>More</div>
            </div>
        )
    }
}

export default PartySizeSelector;
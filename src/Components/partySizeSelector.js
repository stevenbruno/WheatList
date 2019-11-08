import React, {Component} from 'react';


class PartySizeSelector extends Component {

    constructor(){
        super();

        this.state ={
            partySize: 0,
            moreSelected: false,
            numberSelected: null,
        }
    }


    onChangeHandler = (e) =>{
        this.props.setPartySize(e.target.value);
    }

    onClickHandler =  (e) => {
        if(e.target.id !== "more"){
           this.setState({
                numberSelected: e.target.id,
                partySize: e.target.id,
                moreSelected: false
            })
            this.props.setPartySize(e.target.id)
        }
        else{
            this.setState({
                moreSelected: true
            })
        }
    }
    
    showMore = ()=>{
        if(this.state.moreSelected){
            return(
                <input type="number" onChange ={this.onChangeHandler}/>
            )
        }
    }

    render(){
        return(
            <div>
                <label>Party Size</label>
                <div className="partyNumberWrapper">
                    <div className="numberButton" id="1" onClick={this.onClickHandler}>1</div>
                    <div className="numberButton" id="2" onClick={this.onClickHandler}>2</div>
                    <div className="numberButton" id="3" onClick={this.onClickHandler}>3</div>
                    <div className="numberButton" id="4" onClick={this.onClickHandler}>4</div>
                    <div className="numberButton" id="5" onClick={this.onClickHandler}>5</div>
                    <div id="more" onClick={this.onClickHandler}>More</div>
                </div>
                {this.showMore()}
            </div>

        )
    }
}

export default PartySizeSelector;
import react, {Component} from 'react'


class Number extends Component{

    constructor(){
        super();

        this.state ={
            selected: false
        }
    }

    onClick = (e) =>{
        this.setState({
            selected:true
        })
    }

    render(){
        <div className={this.props.number}>{this.props.number}</div>
    }

}
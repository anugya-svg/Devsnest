import React,{Component} from "react"
class Card extends Component{
    constructor()
    {
        super()
        this.state={
            count:0
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        this.setState((prevState)=>{
            return{
                count : prevState.count+1
            }
        })
    }
    render(){
        return(
            
            <button onClick={this.handleClick}>{this.state.count}</button>
           
        )
    }
}
export default Card
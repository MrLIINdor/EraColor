import React from "react";



class Color extends React.Component{
    render(){
        return (<div className= "card"
                    style={{backgroundColor:this.props.bg}}>
                        <p> {this.props.bg} </p>
                </div>)
    }
}

export default Color;
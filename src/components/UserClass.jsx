import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:2,
        }
    }
    render(){
        const {name,location}=this.props;
        return(
        <div className="user-card">
            <h2>Count:{this.state.count}</h2>
            <button onClick={()=>{
                //this.state.count=this.state.count++
                this.setState({
                    count:this.state.count +1,
                })
            }}>Button Increment</button>
            <h2>Name:{name}</h2>
            <h2>Location:{location}</h2>
            <h2>Contact:@Prasshantth</h2>
        </div>
    )
    }
};
export default UserClass;


// Notes in React Class Components:-
// We can not update state like this.state.count=this.state.count++;
// If we want to update state, we have to use 'this.setState' which is given by React.
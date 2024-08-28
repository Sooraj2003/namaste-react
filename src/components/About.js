import { Component } from "react";
import UserClass from "./UserClass";
import User from "./User";

class About extends Component{
    constructor(props){
        super(props);
      //console.log("Parent Constructor");
      
    }
    componentDidMount(){
        //console.log("Parent did mount");
        
    }
    render(){
       // console.log("Parent Render");
        return(
            <div>
                <h1>This is Sooraj.</h1>
                <h2>Learning to write code in react</h2>
                 {/* <UserClass name={"first"} location={"Bangalore"} socials={"@sooraj_np"}/> */}
                 <User/>
                
            </div>
        )
    }
}

export default About;
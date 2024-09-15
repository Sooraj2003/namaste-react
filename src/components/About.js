import { Component } from "react";
import UserClass from "./UserClass";
import User from "./User";
import UserContext from "../utils/UserContext";

class About extends Component{
    constructor(props){
        super(props);
     
      
    }
    componentDidMount(){
       
        
    }
    render(){
      
        return(
            <div className="mx-auto my-10 p-2 w-6/12 bg-gray-300 text-center font-bold rounded-lg">
                <h1 className="text-2xl">This is Sooraj.</h1>
                <h2 className="text-xl">Learning to write code in react</h2>
                 {/* <UserClass name={"first"} location={"Bangalore"} socials={"@sooraj_np"}/> */}
                 {/* <UserContext.Consumer>
                    {(data)=><h1>{data.userInfo}</h1>}
                 </UserContext.Consumer> */}
                 {/* <User/> */}
                
            </div>
        )
    }
}

export default About;
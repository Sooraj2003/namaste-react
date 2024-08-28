import React from "react";
class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Dummy name",
                location:"Dummy Location",
                count:0
            }
        }
      
        console.log(this.props.name+"Child Constructor");
        
    }
    async componentDidMount(){
        //console.log(this.props.name+"Child did mount");
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        this.setState({
            userInfo:json,
        });

        this.timer = setInterval(()=>{
            console.log("setInteval called");
            
        },1000)
        
        
    }
    componentDidUpdate(prevProps,prevState){
        //console.log("Child component did update");
        
         
    }
    componentWillUnmount(){
       // console.log("Child component unmounted");
       clearInterval(this.timer);
        
    }
// if there are many state variables ,it only sets the state variables defined in the setState
    render(){
        //console.log(this.props.name+"Child Render");
        
        const{name,location,avatar_url} = this.state.userInfo;
       
        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h1>Name:{name}</h1>
                <h1>Location:{location}</h1>
                <h1>Socials:@sooraj_np</h1>
            </div>
        )
    }
}

export default UserClass;
/*
Parent Constructor
Parent Render
  first child constructor
  first child render
  first child did mount

  second child constructor
  second child render
  second child did mount

Parent did mount

React life const 2 phases
 Render phase
 Commit phase

 after the render dom manipulation takes place and dom manipuation is expensive for browsers,so first finish the render phase of all the child components perform the reconciliation of individuals ,then make the dom manipuation this optimisation is made by react
Parent Constructor
Parent Render
  first child constructor
  first child render

  second child constructor
  second child render

  first child did mount
  second child did mount

Parent did mount
*/

/*
  ----Mounting-----
   
   constructor dummy data
   render dummy data
   component did mount dummy data
   fetch api inside component did mount

    ----Updating------

   set state
   render api data
   component did update

   -----Unmounting-------
    
   component will unmount



*/
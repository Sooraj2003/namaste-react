import { useEffect, useState } from "react";

const User = ({name,location,socials}) =>{
  const [count,setCount] = useState(0);
  useEffect(()=>{
    //call api
    // async function fetchData(){
    //     const daat 
    // }
    ;
    const timer = setInterval(()=>{
    
      
    },1000)

    return ()=>{
      clearInterval(timer);
    }
  },[]);

    return (
        <div className="user-card">
            <h1>Count:{count}</h1>
            <button onClick={()=>{
              setCount(1);
            }}>Click</button>
            <h1>Name:functional component</h1>
           
        </div>
    )
}
export default User;
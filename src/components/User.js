import { useEffect, useState } from "react";

const User = ({name,location,socials}) =>{
  const [count,setCount] = useState(0);
  useEffect(()=>{
    //call api
    // async function fetchData(){
    //     const daat 
    // }
    console.log("useEffect called");
    const timer = setInterval(()=>{
      console.log("SetInteval inside functional");
      
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
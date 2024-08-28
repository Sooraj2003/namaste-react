import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

 const Header = () => {
    const [btnName,setBtnName]=useState("Login")
    console.log("Header renderd");
    // useState -> at top of the component -> must not be enclosed inside a if ,for or a function scope/block
     // useffect without dependency array -> called every time the component renders
     //useeffect with empty dependency array -> called only first time the component renders
     //useeffect with dependency inside dependency array -> calls only the val of dependency changes
    useEffect(()=>{
        console.log("useeffect called");
        
    },[btnName]);
     const onlineStatus = useOnlineStatus();
    return (
        <div className="p-4 flex justify-between bg-pink-100 shadow-xl">
            <div className="w-36 ">
                <img className="bg-pink-100 rounded-lg" alt="app-logo" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex text-lg font-medium ">
                    
                {/* a -> reloades the entire page or layout,link -> refreshes the certain component,interchanges the certain component */}
                    <li className="m-2 p-2 ">Online Status : {onlineStatus?"🟢":"🔴"}</li>
                    <li className="text-gray-500 m-2 p-2  hover:text-gray-950"><Link  to="/grocery">Grocery</Link></li>
                    <li className="text-gray-500 m-2 p-2  hover:text-gray-950"><Link to="/">Home</Link></li>
                    <li className="text-gray-500 m-2 p-2  hover:text-gray-950"><Link to="/about">About</Link></li>
                    <li className="text-gray-500 m-2 p-2  hover:text-gray-950"><Link to="/contact">Contact</Link></li>
                    <li className="text-gray-500 m-2 p-2  hover:text-gray-950">Cart</li>
                    <button className="text-gray-500 m-2 p-2 min-w-20 hover:text-gray-950" onClick={()=>{
                        btnName==="Login"?setBtnName("Logout"):setBtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
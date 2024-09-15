import { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "../src/components/Header"
import Body from "../src/components/Body"
//import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import {createBrowserRouter,Outlet,RouterProvider,Outlet} from "react-router-dom"
import RestaurantInfo from "./components/RestaurantInfo";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import BillContext from "./utils/billContext";
//import Grocery from "./components/Grocery";

const Grocery = lazy(()=> import("./components/Grocery"));
const About = lazy(()=> import("./components/About"))
const App = ()=>{
    //big bundle takes a long time to be loaded by browser,so bigger single bundle is divided into smaller bundles which consists all components for the particular feature
    //chunking
    //code splitting
    //dynamic bundling
    //lazy loading
    //on demand loading
    const [userName,setUserName] = useState();
    const [bill,setBill] = useState(0);
    useEffect(()=>{
       // make a api call and send userName password
       const data = {userName:"Sooraj"}
       setUserName(data.userName)
    },[])

    return (
        <Provider store={appStore}>
            <BillContext.Provider value={{billInfo:bill,setBill}}>
        <UserContext.Provider value={{userInfo:userName,setUserName}}>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </BillContext.Provider>
        </Provider>
    )
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<Suspense fallback={<h1>Loading.....</h1>}><About/></Suspense>,  
            },{
                path:"/contact",
                element:<Contact/>
            },{
                path:"/restaurant/:resId",
                element:<RestaurantInfo/>
            },{
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading......</h1>}><Grocery/></Suspense>
            },{
                path:"/cart",
                element:<Cart/>
            }
        ]
       
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);



import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should render the login button in header component",()=>{
    render(
        <BrowserRouter>
     <Provider store={appStore}>
       <Header/>
    </Provider>   
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button");

    expect(loginButton).toBeInTheDocument()
})

it("Should render the cart 0 in header component",()=>{
    render(
        <BrowserRouter>
     <Provider store={appStore}>
       <Header/>
    </Provider>   
    </BrowserRouter>
    );

    const cartItem = screen.getByText("🛒(0)");

    expect(cartItem).toBeInTheDocument()
})

it("Should render the cart  in header component",()=>{
    render(
        <BrowserRouter>
     <Provider store={appStore}>
       <Header/>
    </Provider>   
    </BrowserRouter>
    );

    const cartItem = screen.getByText(/🛒/);

    expect(cartItem).toBeInTheDocument()
})

it("Should click on the login button of header component",()=>{
    render(<BrowserRouter>
        <Provider store={appStore}>
          <Header/>
        </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button",{name:"Login"})

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button",{name:"Logout"})

    expect(logoutButton).toBeInTheDocument();
})
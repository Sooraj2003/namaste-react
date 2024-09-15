import { Provider } from "react-redux";
import { render,screen,act, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import MOCK_DATA from "../mocks/resCategory.json"
import RestaurantInfo from "../RestaurantInfo";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(()=>{
      return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
      })
})

it("Should access a category from restaurant info",async ()=>{
    await act(async ()=>render(<Provider store={appStore}><RestaurantInfo/></Provider>));

    const accordianHeader = screen.getByText("Drinks (9)");

     expect(accordianHeader).toBeInTheDocument();

     fireEvent.click(accordianHeader);

})

it("Should render 9 item lists",async ()=>{
 await act(async ()=> render(<Provider store={appStore}><RestaurantInfo/></Provider>));

 const addBtns = screen.getAllByRole("button",{name:"Add"});
 
 
})
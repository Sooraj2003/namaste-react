import { render,screen ,act, fireEvent} from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/resListMockdata.json"
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})
beforeAll(()=>{
    
    
})
beforeEach(()=>{
  
    
})

afterEach(()=>{
    
})

afterAll(()=>{
   
    
})
it("Should search the rescard",async ()=>{
   await act(async ()=> render(<BrowserRouter><Body/></BrowserRouter>))
   
   const resCardsBefore = screen.getAllByTestId("resCard")
   expect(resCardsBefore.length).toBe(20)
   const searchInput = screen.getByTestId("searchInput");
   fireEvent.change(searchInput,{target:{value:"pizza"}});

   const search = screen.getByRole("button",{name:"Search"});
   fireEvent.click(search);

   const resCardsAfter = screen.getAllByTestId("resCard")

   expect(resCardsAfter.length).toBe(1);

})

it("Shoud display top rated restaurants",async ()=>{
    await act(async ()=>render(<BrowserRouter><Body/></BrowserRouter>))
    const resCardBefore = screen.getAllByTestId("resCard")
    expect(resCardBefore.length).toBe(20)
    const topRatedBtn = screen.getByText("Top Rated Restaurants");

    fireEvent.click(topRatedBtn);

    const resCardsAfter = screen.getAllByTestId("resCard");

    expect(resCardsAfter.length).toBe(18)
})
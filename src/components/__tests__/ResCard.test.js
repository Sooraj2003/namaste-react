import { render,screen } from "@testing-library/react"
import ResCard, { withPromoted } from "../ResCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import '@testing-library/jest-dom'


it("should render the res card with props",()=>{
    render(<ResCard resData={MOCK_DATA.resData}/>)

    const name = screen.getByText("Big Bowl");

    expect(name).toBeInTheDocument()
})

it("Should render the promoted res card",()=>{
    const ResCardPromoted = withPromoted(ResCard);

    render(<ResCardPromoted resData={MOCK_DATA.resData}/>);

    const open = screen.getByText("Open");

    expect(open).toBeInTheDocument();
})
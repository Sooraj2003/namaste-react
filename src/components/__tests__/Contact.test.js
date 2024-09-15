import Contact from "../Contact"
import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom'

describe("test cases for contact page",()=>{
    it("should test if contact component rendered",()=>{
        //render
        render(<Contact/>);
        //query
        const heading = screen.getByRole("heading");
         //assertion
        expect(heading).toBeInTheDocument();
    });
    
    it("should render the submit button",()=>{
        //render
        render(<Contact/>);
        //query
        const button = screen.getByRole("button");
        //assertion
        expect(button).toBeInTheDocument();
    })
    
    it("should render the submit button",()=>{
        //render
        render(<Contact/>);
        //query
        const button = screen.getByText("Submit");
        //assertion
        expect(button).toBeInTheDocument();
    })
    
    it("should render the input box in the contact component",()=>{
        //render
        render(<Contact/>);
        //Query
        const inputName = screen.getByPlaceholderText("name");
        //assertion
        expect(inputName).toBeInTheDocument();
    })
    
    it("should render 2 input boxes",()=>{
        //render
        render(<Contact/>);
        //query
        const inputBoxes = screen.getAllByRole("textbox");
        
        
        //assertion
        expect(inputBoxes.length).toBe(2);
    })
})


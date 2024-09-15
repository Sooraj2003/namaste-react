import { sum } from "../sum";

test("Should test the sum function",()=>{
   const result = sum(2,3);

   //Assertion
   expect(result).toBe(5);
})
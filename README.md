This is Namaste React.




Parcel
 - Dev Build
 - Server hosting
 - HMR - Hot Module Replacement
    - File watching algorithm - c++
 - Image optimization
 - Tree shaking
 - Minification
 - Compression
 - Bundling
 - Differential bundling using Browser's List
 - Dev and Prod build
 - Caching for faster builds
 - Diagnostics
 - Error handling
 - Code splitting


 App layout

//  App
//    - Header
//      - logo
//      - navbar
//    - Body
//       - searh
//       - res container
//         - rescards
//    - Footer
  

  File structuring
  Default imports and exports
  Named imports and exports
  Config Driven UI
  props
  keys


  React Hooks - javascript utility functions
   useState - is a powerful state variable , which tracks the state of particular variable and re-renders the component whenever there is a change in the state ,with the help of reconcilation algorithm.


   Routing
    - Client Side Routing
    - Server Side Routing

    # types of testing (done by developers)
     - Unit testing - testing the components in isolation
     - Integration testing - testing the components integration with other components
     - end to end testing (e2e testing) - user enter to user exit - user flow is tested - entire app flow is tested


   # setting up testing in my application
     - install react testing library - build on top of dom testing library
     - install jest - above both perfect combo
     - insatll babel dependency and config the babel 
     - config parcel to disable babel transpilation
     - init jest (config jest)
     - install jsdom for above jest 28,bcoz react testing library doesnt ship it 
     - __tests__ dunder - folder which consists of all test files - jest checks in this folder
     - Header.test.js/Header.spec.js
     - config babel with @babel/preset-react to render jsx
     - install and import @test-library/jest-dom to use tobeinthedocument and many other functions
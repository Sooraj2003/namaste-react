
// <div class="parent">
//     <div class="child1">
//         <h1>I'm H1</h1>
//         <h2>I'm H2</h2>
//     </div>
//<div class="child2">
//         <h1>I'm H1</h1>
//         <h2>I'm H2</h2>
//     </div>
// </div>






const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
        [React.createElement("h1",{},"I'm H1"),React.createElement("h2",{},"I'm H2")]),
        React.createElement("div",{id:"child2"},
            [React.createElement("h1",{},"I'm H1"),React.createElement("h2",{},"I'm H2")])]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
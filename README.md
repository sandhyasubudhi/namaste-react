Namaste React Course

From Episode 1(App.js File)
/**
 * 
 *   <div id="parent">
 *       <div id="child">
 *           <h2>I am h2 an tag</h2>
 *           <h1>I am h1 an tag</h1>
 *       </div>
 *   </div> 
 *   <div id="parent">
 *       <div id="child">
 *           <h2>I am h2 an tag</h2>
 *           <h1>I am h1 an tag</h1>
 *       </div>
 *   </div>
*/

const parent = React.createElement("div",{ id: "parent" },
    [React.createElement("div",{ id: "child" },
        [
            React.createElement( "h1",{},"I am an h1 tag"),
            React.createElement( "h2",{},"I am an h2 tag")
        ]
    ),
    React.createElement("div",{ id: "child" },
        [
            React.createElement( "h1",{},"I am an h1 tag"),
            React.createElement( "h2",{},"I am an h2 tag")
        ]
    )]
);

//JSX is used to make above work simpler 

const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello World using React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); 

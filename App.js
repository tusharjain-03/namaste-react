// {}: An object that takes an attributes for a tag
// React.createElement makes an object
const heading = React.createElement("h1",{id:"heading"},"Hello World From ReactJS");

const root = ReactDOM.createRoot(document.getElementById("root"));

// render method is responisble for taking an object and converting it into tag and putting it on the dom.
root.render(heading);

/*
   <div id="parent">
      <div id="child">
         <h1>I'm h1 tag</h1>
         <h2>I'm h2 tag</h2>
      </div>
   </div>

   Nesting of HTML Elements using React-:
   
   const parent=React.createElement("div",{id:"parent"},
                React.createElement("div",{id:"child"},
                [React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")]));
   const root=ReactDOM.createRoot(document.getElementById("root"));
   root.render(parent);
*/
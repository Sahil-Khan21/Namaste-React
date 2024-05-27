   
    const heading = React.createElement(
      "div",
      { class: "parent" },
      React.createElement(
        "div",
        { class: "child" },
        [React.createElement("h1", { class: "heading", id:"1" }, "I am h2 tag"),
        React.createElement("h2",{class:"heading2", id:"2"},"I am h2 tag")]
      )
    );
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    const root = ReactDOM.createRoot(document.body);
    root.render(heading); 
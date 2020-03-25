import React, { useRef } from "react";

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

// type Props = {

// }

const App = () => {

  const inputRef = useRef(null);
  const parseCardsSheetFromURL = () => {
    console.log(inputRef.current);
  };
 
  return (
    <div className="div">
      {/* <h3>
        Importer Tool
      </h3>
      <form onSubmit={parseCardsSheetFromURL}>
        <label htmlFor="sheetURL">Sheet URL</label>
        <input type="text" id="sheetURL" ref={inputRef}/>
        <input type="submit" value="Submit" />
      </form> */}
    </div>
  );
};

export default App;

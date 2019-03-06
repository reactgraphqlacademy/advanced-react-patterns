import React, { useState, useEffect } from "react";

const DocumentTitleEffect = () => {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `${count} clicks`;
  });

  return (
    <div>
      <p>Click counter on the document title</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default DocumentTitleEffect;

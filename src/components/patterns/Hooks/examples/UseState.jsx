import React, { useState } from "react";

const Input = () => {
  const [value, setValue] = useState("default value");

  return <input value={value} onChange={e => setValue(e.target.value)} />;
};

// class Input extends React.Component {
//   state = {
//     value: ""
//   };

//   onChange = e => {
//     this.setState({ value: e.target.value }, () => {
//       console.log("Current Input state:", this.state.value);
//     });
//   };

//   render() {
//     const { value } = this.state;
//     const { onChange } = this;

//     return <input value={value} onChange={onChange} />;
//   }
// }

export default Input;

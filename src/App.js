import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Converter from "./Converter";
import vendors from './Vendors'

// export default function App() {
//   const [value, setValue] = useState([]);

//   return (
//     <>
//       <div className="header">
//         <Header />
//       </div>
//       <div className="converter">
//         <Converter
//           prompt="Select Vendor..."
//           options={vendors}
//           id="name"
//           markup="markup"
//           value={value}
//           onChange={(val) => setValue(val)}
//         />
//       </div>
//       <div>
//         <Price />
//       </div>
//     </>
//   );
// }

export default class App extends Component {
  render() {
  return (
    <div className="header">
      <Header />
      <Converter vendors={vendors} />
    </div>
  );
}
}

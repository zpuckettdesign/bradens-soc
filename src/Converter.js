import React, { Component } from "react";
import vendors from "./Vendors";

export default class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    const result = vendors.find(({ name }) => name === this.state.value);
    const math = document.getElementById("cost").value;
    e.preventDefault();

    this.setState({value: result.markup * math});
  }

  render() {
    let vendors = this.props.vendors;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Select Vendor:
          <select value={this.state.value} onChange={this.handleChange}>
            {vendors.map((item) => (
              <option key="id">{item.name}</option>
            ))}
          </select>
        </label>
        <input id="cost" type="number" />
        <input type="submit" value="Calculate" />
        <h4 value={this.state.value} >Sales Price: {this.state.value}</h4>
      </form>
    );
  }
}

// export default function Converter({
//   //props -->
//   options,
//   prompt,
//   value,
//   onChange,
//   id,
//   markup, // <-- props //
// }) {
//   const [open, setOpen] = useState(false);
//   const [query, setQuery] = useState("");
//   const ref = useRef(null);

//   useEffect(() => {
//     ["click", "touchend"].forEach((e) => {
//       document.addEventListener(e, toggle);
//     });

//     return () =>
//       ["click", "touchend"].forEach((e) => {
//         document.removeEventListener(e, toggle);
//       });
//   }, []);

//   function toggle(e) {
//     setOpen(e && e.target === ref.current);
//   }

//   function filter(options) {
//     return options.filter(
//       (option) => option[id].toLowerCase().indexOf(query.toLowerCase()) > -1
//     );
//   }

//   function displayValue() {
//     if (query.length > 0) return query;
//     if (value) return value[id];
//     return "";
//   }
//   function selectOption(option) {
//     setQuery("");
//     onChange(option);
//     setOpen(false);
//   }
// function lookUpVendor(name, prop) {
//     for(var i = 0; i < options.length; i++) {
//         if (options[i].name===name){
//             if(options[i].hasOwnProperty(prop)===true){
//                 return options[i][prop]
//             }
//             else {
//                 return "No such property";
//             }
//         }
//     }
// return "No such vendor"
// }

//   return (
//     <div className="dropdown" style={{ width: 300 }}>
//       <div className="control">
//         <div className="selected-value" ref={ref}>
//           <input
//             className="search"
//             type="text"
//             ref={ref}
//             placeholder={value ? value[id] : prompt}
//             value={displayValue()}
//             onChange={(e) => {
//               setQuery(e.target.value);
//               onChange(null);
//             }}
//             onClick={toggle}
//             onTouchEnd={toggle}
//           />
//         </div>
//         <div className={`arrow ${open ? "open" : null}`} />
//       </div>
//       <div className={`options ${open ? "open" : null}`}>
//         {filter(options).map((option) => (
//           <div
//             id="option"
//             key={option[id]}
//             className={`option ${value === option ? "selected" : null}`}
//             onClick={() => {selectOption(option); lookUpVendor();}}
//             onTouchEnd={() => selectOption(option)}
//           >
//             {option.name}
//           </div>
//         ))}
//         <input type="number" />
//       </div>
//     </div>
//   );
// }

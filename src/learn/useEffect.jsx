// import React from "react";
// import { useState, useEffect } from "react";

// const App = props => {
//   const [state, setState] = useState(props);
//   const { name, price } = state;

//   useEffect(() => {
//     console.log("useEffect呼んでる！");
//   });

//   useEffect(() => {
//     console.log("componentDidMount");
//   }, []);

//   useEffect(() => {
//     console.log("this callback is for name");
//   }, [name]);

//   return (
//     <>
//       <p>
//         現在の{name}は{price}円持っています。
//       </p>
//       <button
//         onClick={() => {
//           setState({ ...state, price: price + 1 });
//         }}
//       >
//         +1
//       </button>
//       <button
//         onClick={() => {
//           setState({ ...state, price: price - 1 });
//         }}
//       >
//         -1
//       </button>
//       <button
//         onClick={() => {
//           setState(props);
//         }}
//       >
//         RESET
//       </button>
//       {/* e.targetで入力値を拾える */}
//       <input
//         value={name}
//         onChange={e => setState({ ...state, name: e.target.value })}
//       ></input>
//     </>
//   );
// };

// //defaultPropsはInitialStateと同義。Appの持つメソッド
// App.defaultProps = {
//   name: "JSON_HardCoder",
//   price: 1000
// };

// export default App;

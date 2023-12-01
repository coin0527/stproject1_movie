// import { useEffect, useState } from "react";

// export const UseDetectClose = (elem, initialState) => {
//   const [isOpen, setIsOpen] = useState(initialState);

//   useEffect(() => {
//     const onClick = (e) => {
//       if (elem.current !== null && !elem.current.contains(e.target)) {
//         setIsOpen(!isOpen);
//       }
//     };

//     if (isOpen) {
//       window.addEventListener("click", onclick);
//     }
//     return () => {
//       window.addEventListener("click", onclick);
//     };
//   }, [isOpen, elem]);
// };

// // Player.jsx
// import React, { useState, useEffect } from 'react';

// const Player = () => {
//   const [position, setPosition] = useState({ x: 50, y: 50 });

//   useEffect(() => {
//     const handleKeyPress = (event) => {
//       const speed = 10;
//       switch (event.key) {
//         case 'ArrowUp':
//           setPosition((prevPos) => ({ ...prevPos, y: prevPos.y - speed }));
//           break;
//         case 'ArrowDown':
//           setPosition((prevPos) => ({ ...prevPos, y: prevPos.y + speed }));
//           break;
//         case 'ArrowLeft':
//           setPosition((prevPos) => ({ ...prevPos, x: prevPos.x - speed }));
//           break;
//         case 'ArrowRight':
//           setPosition((prevPos) => ({ ...prevPos, x: prevPos.x + speed }));
//           break;
//         default:
//           break;
//       }
//     };

//     window.addEventListener('keydown', handleKeyPress);
//     return () => {
//       window.removeEventListener('keydown', handleKeyPress);
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         width: '50px',
//         height: '50px',
//         backgroundColor: 'red',
//         position: 'absolute',
//         left: position.x,
//         top: position.y,
//       }}
//     />
//   );
// };

// export default Player;

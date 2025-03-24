import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [matrix, setMatrix] = useState(Array(9).fill("white"));
  const [clickSequence, setClickSequence] = useState([]);

  const handleBoxClick = (index) => {
    if (matrix[index] === "white") {
      const updatedMatrix = [...matrix];
      updatedMatrix[index] = "green";
      setMatrix(updatedMatrix);
      setClickSequence([...clickSequence, index]);

      if (clickSequence.length === 8) {
        setTimeout(() => {
          changeBoxesToOrange([...clickSequence, index]);
        }, 500);
      }
    }
  };

  const changeBoxesToOrange = (sequence) => {
    let updatedMatrix = [...matrix];
    sequence.forEach((idx, i) => {
      setTimeout(() => {
        updatedMatrix[idx] = "orange";
        setMatrix([...updatedMatrix]);
      }, i * 500);
    });
  };

  return (
    <div className="container">
      <h1 className="title">3x3 Matrix Color Change</h1>
      <motion.div 
        className="grid"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {matrix.map((color, index) => (
          <motion.div
            key={index}
            className="box"
            style={{ backgroundColor: color }}
            onClick={() => handleBoxClick(index)}
            whileHover={{ scale: 1.1 }}
            animate={{ backgroundColor: color }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default App;
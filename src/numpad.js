import React, { useState, useEffect } from "react";

const NumberPad = ({ onNumberClick }) => {
  const [inputNumbers, setInputNumbers] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [locked, setLocked] = useState(false);

  const handleNumberClick = (number) => {
    if (!locked) {
      if (inputNumbers.length < 4) {
        setInputNumbers(inputNumbers + number);
        onNumberClick(inputNumbers + number);
      }
    }
  };

  const clearInput = () => {
    if (!locked) {
      setInputNumbers("");
      onNumberClick("");
      setMessage("");
    }
  };

  const handleDelete = () => {
    if (!locked) {
      setInputNumbers(inputNumbers.slice(0, -1));
    }
  };

  useEffect(() => {
    let timer;
    if (attempts === 1) {
      timer = setTimeout(() => {
        setMessage("");
        setLocked(false);
        console.log("first");
      }, 3000);
    } else if (attempts === 2) {
      timer = setTimeout(() => {
        setMessage("");
        setLocked(false);
        console.log("second");
      }, 4000);
    } else if (attempts > 2) {
      timer = setTimeout(() => {
        setMessage("");
        setLocked(false);
        console.log("third");
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [attempts, locked, setLocked]);

  const handleEnter = () => {
    console.log(attempts);
    if (!locked) {
      const pass = "1563";
      if (inputNumbers === pass) {
        setMessage("Access Granted");
        setAttempts(0);
      } else if (attempts === 0) {
        setMessage("Access Denied - Try Again");
        setAttempts(attempts + 1);
      } else if (attempts === 1) {
        setMessage("Access Denied - Try Again in 30 seconds");
        setLocked(true);
        setAttempts(attempts + 1);
      } else if (attempts === 2) {
        setMessage("Access Denied - Try Again in 1 Minute");
        setLocked(true);
        setAttempts(attempts + 1);
      } else {
        setMessage("Access Lockdown");
        setLocked(true);
      }
    }
  };

  return (
    <div className=" bg-stone-200 flex flex-col items-center justify-center h-screen">
      <div
        className={
          message === "Access Granted"
            ? "text-green-600 mb-6 text-3xl"
            : "text-red-600 mb-6 text-xl"
        }
      >
        {message}
      </div>
      <div className="mb-8 flex justify-evenly w-3/4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl">
              {inputNumbers[index] === undefined ? (
                <span style={{ opacity: 0 }}>{String.fromCharCode(88)}</span>
              ) : (
                <span style={{ opacity: 1 }}>x</span>
              )}
            </div>
            <div className="w-8 h-1 bg-stone-400 mt-1 mx-auto"></div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <button
            key={number}
            className="bg-white text-gray-800 font-bold text-3xl py-2 px-6 rounded ml-4 mr-4 mt-4"
            onClick={() => handleNumberClick(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <button
          key={0}
          className="bg-white text-gray-800 font-bold text-3xl py-2 px-6 rounded ml-4 mr-4 mt-4"
          onClick={() => handleNumberClick(0)}
        >
          0
        </button>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-8">
        <button
          className="bg-red-600 text-3xl text-white py-2 px-2 rounded"
          onClick={clearInput}
        >
          Clear
        </button>
        <button
          className="bg-orange-400 text-white  text-3xl py-2 px-2 rounded"
          onClick={handleDelete}
        >
          Back
        </button>
        <button
          className="bg-lime-800 text-white text-3xl py-2 px-2 rounded"
          onClick={handleEnter}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default NumberPad;

//  function Timmer(){
    import React, { useState, useEffect } from 'react';

const Timmer = () => {
  const [count, setCount] = useState(1);
  let intervalId;

  useEffect(() => {
    intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 100);
    
    // Cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, []); 

  useEffect(() => {
    if (count == 0) {
      clearInterval(intervalId);
    }
  }, [count]);

  return (
    <div>
      <h2>Timer: {count}</h2>
    </div>
  );
};

const TimerComponent = () => {
  return (
    <>
      <h1>I am Timmer</h1>
      <Timmer />
    </>
  );
};

export default TimerComponent;

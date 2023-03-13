import { useState, useEffect } from "react"

export const useTimer = (to, onDone, initialValue=false) => {
    const [time, setTime] = useState(0);
    const [timeout, _setTimeout] = useState();
    const [isRunning, setRunning] = useState(initialValue)
  
    const countDown = () => {
      setTime((prev) => prev + 0.5);
    };
    
    const stop = () =>{
        setRunning(false)
    }

    const runTimer = () => {
        if (isRunning){
            if (time >= to){
                return onDone();
            }
            const timer = setTimeout(() => {
                countDown();
            }, 500);
            _setTimeout(timer);
        }
    };
    
    const reset = () => {
        setTime(0);
        clearTimeout(timeout);
      };
  
    useEffect(() => {
      runTimer();
    }, [time]);
  
    return { time, reset, stop };
  };
import React, { useEffect } from "react";
import { useState } from "react";

const Counter = (props) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (props.defaultValue) setCounter(props.defaultValue);
        else setCounter(0);
    }, [props.defaultValue]);

    return (
        <div>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <div>Counter: {counter}</div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    );
};

export default Counter;

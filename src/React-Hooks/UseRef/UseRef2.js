// UseRef hook create a mutable variable which will not re render the components.
// UseRef also used to access the DOM element directly
import React, { useState, useEffect, useRef} from "react";
const UseRef2 = () =>{
const [myData, setMyData] = useState("");
const [count, setCount] = useState();
useEffect (() => {
setCount (count + 1)},[]);
return (
    <div>
        <input
type="text"
value={myData}
onChange={(e) => setMyData(e.target.value)}/>

<p>The number of times render: {count}</p>
    </div>
);
};
export default UseRef2
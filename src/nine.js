import { useEffect, useState } from "react";
function Nine(){
    const [count,setCount] = useState(1);
    useEffect(()=>{
        //setCount(5);
        console.log("use effect is called")
    },[count]);
    const btnUpdateCount=()=>{
        setCount(count+2);
    }
    return( 
        <div>
            <h1>Count {count}</h1>
            <button className="btn btn-dark" 
            onClick={btnUpdateCount}>Click here</button>
        </div>
    )
}
export default Nine; 
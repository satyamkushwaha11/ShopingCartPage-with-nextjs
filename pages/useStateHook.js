import react, { useState } from "react";





export default function useStateHook() {
    
    const [Input, setInput] = useState("");
    const [heading,setheading]=useState('satyam')
    
    const changeInput = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
        
        
    }
    const submit=()=>{
        setheading(Input)
        setInput("")

    }
    return (
        <>
            <h2>{heading}</h2>
            <input type="text" placeholder="enter heading" value={Input} onChange={changeInput}/>
            <button onClick={()=>submit()}  >click</button>
           
        </>
    )
}
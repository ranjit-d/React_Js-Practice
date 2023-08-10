// import React from 'react';

// import { useState } from "react";
import React, { useState } from "react";



export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked"+text);
        // setText ("You have clicked on handleUpclick");
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleloClick =()=> {
    console.log("Uppercase was clicked" + text);
    // setText ("You have clicked on handleUpclick");
    let newText = text.toLowerCase();
    setText(newText);
  }
 const handleclearclick =()=>{
  let newText='';
  setText(newText)
 }


    const handleonchange=(event)=>{
        console.log("onchange");
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    // text="new text";
    // setText("new Text");?
  return (
    <>
    <div className="container">
    <h2>{props.heading}  </h2>
<div className="mb-3">
  {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert To Upppercase</button>
<button className='btn btn-primary mx-2' onClick={handleloClick}>Convert To Lowercase</button>
<button className='btn btn-primary mx-2' onClick={handleclearclick}>Clear text</button>
    </div>
    <div className="container my-3">
      <h1>Your text Summery</h1>
    
    <p> {text.split("").length} words and {text.length}  charectors</p>
    <p>{0.008* text.split("").length}Minutes Read</p>
    <h2>Preview</h2>
   <p>{text}</p>
     </div>
    </>
  )
}

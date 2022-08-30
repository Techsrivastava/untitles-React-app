import React, {useState} from 'react'


export default function TextForm(props) {
    // // const handleUpClick = ()=>{
    //     // console.log("Uppercase was clicked: " +  text);
    //     let newText = text.toUpperCase();
    //     setText(newText)
    // }

    // const handleOnChange = (event)=>{
    //     // console.log("On change");
    //     setText(event.target.value)
    // }

    const [text, setText] = useState('Enter text here3'); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <div> 
            <h1>{props.heading} - {text}</h1>
            <div className="mb-3"> 
            <textarea className="form-control"  id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" >Convert to Uppercase</button>
        </div>
    )
}
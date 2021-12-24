import React, { useState } from 'react'

export default function TextForm(props) {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btnText, setBtnText] = useState("Enable Dark Mode")
    const toggleStyle = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText("Enable Light Mode")
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }
    const handleUpClick = () => {
        console.log("UpperCase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "primary");
    }
    const handleLowClick = () => {
        console.log("LowerCase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "primary");
    }
    const handleCopyClick = () => {
        console.log("Copy was clicked");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard", "success");
    }
    const handleClearClick = () => {
        console.log("Clear was clicked");
        let newText = "";
        setText(newText);
        props.showAlert("Cleared the text", "danger");
    }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");

    const wordCounter = (text)=> {
        let wordNumber = text.split(" ").filter(function (n) { return n !== "" }).length;
        return wordNumber;
    }
    return (
        <>
            <div className="container my-3 " style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder="Enter your text here" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#003366' : 'white', color: props.mode === 'light' ? 'black' : 'white' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>Your text summary</h1>
                <p>{wordCounter(text)} words and {text.length} characters</p>
                <p>{text.length === 0 ? 0 : 0.008 * wordCounter(text)} Minutes Read</p>
            </div>
        </>
    )
}

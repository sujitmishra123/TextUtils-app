import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpClick=()=>{
    //console.log("upper case was clicked");
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("converted to upper case!","success");
  }
  const handleLoClick=()=>{
    //console.log("upper case was clicked");
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lower case!","success");
  }
  const handleClearClick=()=>{
    //console.log("upper case was clicked");
    let newText=" "
    setText(newText)
    props.showAlert("text cleared!","success");
  }
  const handleOnChange=(event)=>{
    //console.log("on change");
    setText(event.target.value)
  }
  const handleCopy =()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();

    props.showAlert("copy to clipboard!","success");
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("remove extra spaces!","success");
  }

  const [text, setText] = useState("enter text here");
  //text=new Text; wrong way to change state
  //setText("new Text");//right way to change state

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-2">
        <textarea
          className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'#042743'}}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"onClick={handleUpClick}>Convert To Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"onClick={handleLoClick}>Convert To Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"onClick={handleExtraSpaces}>Remove Extra spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1> your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    
    </div>
    </>
  );
}

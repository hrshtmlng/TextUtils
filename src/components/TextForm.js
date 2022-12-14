import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase!!", "success")
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase!!", "success")
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
    props.showAlert("Cleared all the text!!", "success")
  }

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const handleCopy = () => {
    var text = document.getElementById('myBox')
    text.select()
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!!", "success")
  }
  
  const [text, setText] = useState('');
  return (
    < >
      <div className='container' style={{color:props.mode===`dark`?`white`:`#042743`}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode===`dark`?`grey`:`white`,color:props.mode===`dark`?`white`:`#042743`}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-outline-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-outline-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-outline-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-outline-primary mx-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-4" style={{color:props.mode===`dark`?`white`:`#042743`}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words & {text.length} characters</p>
      <p>{0.008 * text.split(" ").length } Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
   
  )
}

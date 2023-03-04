import { useState } from "react"

export default function Textform() {
  const [text,setText]=useState("Enter Your Text Here");
  const handleupclick=()=>{
    console.log("uppercase was clicked")
    // setText("clicked uppercase")
    let newtext = text.toUpperCase();
    setText(newtext)
  }
  const handlelowercase=()=>{
    console.log("uppercase was clicked")
    // setText("clicked uppercase")
    let newtext = text.toLowerCase();
    setText(newtext)
  }
  const handleOnChange=(event)=>{
    // console.log("on change")
    setText(event.target.value)
  }
  return (<>
    <div className='container my-3'>
      <div className="mb-3">
      <h3>Enter Your Text Here</h3>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="button" className="btn btn-primary mx-2"  onClick={handleupclick} >UPPERCASE</button>
<button type="button" className="btn btn-secondary mx-2" onClick={handlelowercase}>LOWERCASE</button>
    </div>
    <div className="container">
      <p>{text}</p>
    </div>
    </>
  )
}

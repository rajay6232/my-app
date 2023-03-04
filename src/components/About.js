import React,{useState} from 'react'
export default function About() {
  const [mystyle,setMyStyle]=useState({
      backgroundColor:'white',
      color:'black',
  })
  const [btntext,setBtnText]=useState("enable dark mode")
const togglestyle=()=>{
  if(mystyle.color==="white"){
    setMyStyle({
      backgroundColor:"white",
      color:"black",
      border:"1px solid white"
    })
    setBtnText("Enable Dark Mode")
  }else{
    setMyStyle({
      backgroundColor:"black",
      color:"white"
    })
    setBtnText("Enable Light Mode")
  }
}



  return (
    <div className="container" style={mystyle}> 
    <h1>About us</h1>
       <div className="accordion" id="accordionExample">
  <div className="card">
    <div className="card-header" style={mystyle} id="headingOne">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left" type="button" style={mystyle} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body" style={mystyle}>
        Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the  class.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" style={mystyle} id="headingTwo">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed" type="button" style={mystyle} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body" style={mystyle}>
        Some placeholder content for the second accordion panel. This panel is hidden by default.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" style={mystyle} id="headingThree">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed" style={mystyle} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h2>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body" style={mystyle}>
        And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
      </div>
    </div>
  </div>
<button type="button" onClick={togglestyle} class="btn btn-dark my-2">{btntext}</button>

  </div>

</div>  
     
  )
}

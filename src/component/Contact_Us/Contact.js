import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <div>
            <h1 class="cont">Contact Us</h1>
            <div className="card" style={{width: "20rem", 
            marginLeft:"500px",
             border: "2px solid skyblue",
              padding:"10px",}}>
  <img src="\images\img8.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p style={{color:"green"}} class="card-text">Name:G K Tourism <br/> Contact: 9052006789 <br/> Website: www.gktourism.com</p>
  </div>
</div>
<div>
  <p id="para">     An outcome of years of experience and practice, An Introduction to the Business of Tourism offers a fresh perspective of the skill-oriented, 
    knowledge-based and multi-disciplinary arena of the tourism business. 
    It presents a balanced mix of the basic principles and concepts, their application and policy 
    implications as well as the business realities and operational aspects of the tourism industry.</p>
</div>
            
        </div>
    )
}

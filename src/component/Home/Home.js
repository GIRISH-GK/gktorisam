import React from 'react'
import './Home.css'

export default function Home() {
    return (
        <div>
            <h1 id="home">Welcome to G K Tourisam</h1>
           <div className="card" style={{width: "23rem"}}>
                <img src="\images\img1.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"fuchsia"}} class="card-text">Name: Goa<br/></p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="\images\img2.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"blue"}} class="card-text">Name:Kerala<br/> </p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="\images\img3.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"gray"}} class="card-text">Name:Madya Pradesh<br/></p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="\images\img9.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"darkblue"}} class="card-text">Name: Agra<br/> </p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="\images\img5.jpg" class="card-img-top" alt="..."/>
                <div class="card-body" >
                <p style={{color:"crimson"}} class="card-text">Name: Delhi Port<br/> </p>
            </div>
            </div>
            <div className="card" style={{width: "23rem"}}>
                <img src="\images\img6.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                <p style={{color:"red"}} class="card-text">Name:Iscon Bangalore<br/> </p>
            </div>
            </div>

        </div>
    )
}

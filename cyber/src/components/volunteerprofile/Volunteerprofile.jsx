import React, { useEffect, useState } from 'react'
import Nav from '../Nav/Nav'
import './Volunteerprofile.css'
import axios from 'axios';
// import Image from "react-bootstrap/Image";


function Volunteerprofile() {

    const token = localStorage.getItem("Token");
    console.log("Token",token);

const [Volunteerprofile,setVolunteerprofile] = useState([]);
useEffect(()=>{
    axios
    .get('http://localhost:1111/api/volunteer/volunteerprofile',{
        headers:{
            Authorization:`Bearer ${token}`,
        },
    })
    .then((data)=>{
        console.log(data.data.data[0])
        setVolunteerprofile(data.data.data[0])
    })
    .catch((err)=>{
        console.log(err)
    })
},[])


  return (
    <div>
        <Nav/>
        <div className='body-vp'>


        <div className="card-vp">
  <div className="bgj uwu" />
  <div className="bgj" />
  <div className="content">
   
   

  <div className="file-vr">
            <div className="image-vr">
              <input type="file" id="file-upload" name="Image" hidden/>
              <label htmlFor="file-upload">
                <img src={`/upload/${Volunteerprofile.Image}`} alt="" className='img-vp' />
              </label>
            </div>
                      
          </div>
   
   
   {/* <div>

    <Image src="p-vp.png" className='img-vp'></Image>
   </div> */}
    <div className="h1-vp">
     NAME : {Volunteerprofile.Name}
      
    </div>
    <div className="h2-vp">
      AGE : {Volunteerprofile.Age}
      
    </div>
    <div className="h2-vp">
      ADDRESS : {Volunteerprofile.Address}
    </div>
    <div className="h2-vp">
      PHONE_NO : {Volunteerprofile.Phone_no}
    </div>
    <div className="h2-vp">
        QUALIFICATION : {Volunteerprofile.Qualification}
      
    </div>
    <div className="p-vp">
      <p>I do human things such as exist, eat foot, and work.</p>
    </div>
  </div>
</div>
            

        </div>
        <div className="container2">
        <p className="div-p">www.sheildcybercrimeportal@gmail.com</p>
      </div>
    </div>
  )
}

export default Volunteerprofile
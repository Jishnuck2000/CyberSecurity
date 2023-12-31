import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Complaint from './components/Complaint/Complaint'
import Login from './components/log/Login'
import Register from './components/Reg/Register'
import Nav from './components/Nav/Nav'
import DisplayComplaint from './components/DisplayComplaint/DisplayComplaint'
import VolunteerRegister from './components/VolunteerRegister/VolunteerRegister'
import Home from './components/home/Home'
import Viewvolunteer from './components/viewvolunteer/Viewvolunteer'
import Profile from './components/Profile/Profile'
import Sessionbooking from './components/sessionbooking/Sessionbooking'
import Viewsession from './components/viewsession/Viewsession'
import About from './components/about/About'
import Updatevolunteer from './components/updatevolunteer/Updatevolunteer'
import Text from './components/test/Text'
import Sessiondetail from './components/sessiondetails/Sessiondetail'
import Volunteerstatus from './components/volunteerstatus/Volunteerstatus'
import Volunteerprofile from './components/volunteerprofile/Volunteerprofile'
import Adminsessionform from './components/adminsessionform/Adminsessionform'
import Sessionlist from './components/sessionlist/Sessionlist'






function App() {
  return (
    <>

    <Router>
      
      <Routes>
      <Route path='/'element={<Nav/>}/>
      <Route path='/profile'element={<Profile/>}/>


        <Route path='/log'element={<Login/>}/>
        <Route path='/reg'element={<Register/>}/> 
        <Route path='/comp'element={<Complaint/>}/>
        <Route path='/dis'element={<DisplayComplaint/>}/>
        <Route path='/vcomp'element={<VolunteerRegister/>}/>
        <Route path='/hom'element={<Home/>}/> 
        <Route path='/vvol'element={<Viewvolunteer/>}/>
        <Route path='/session/:name/:time/:date'element={<Sessionbooking/>}/>
        <Route path='/viewsession'element={<Viewsession/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/update/:id'element={<Updatevolunteer/>}/>
        <Route path='/text'element={<Text/>}/>
        <Route path='/sd'element={<Sessiondetail/>}/>
        <Route path='/vs'element={<Volunteerstatus/>}/>
        <Route path='/volunteerprofile'element={<Volunteerprofile/>}/>
        <Route path='/adminsessionform'element={<Adminsessionform/>}/>
        <Route path='/sessionlist'element={<Sessionlist/>}/>


















 
       


        
      </Routes>
    </Router>
    
    </>
  )
}

export default App
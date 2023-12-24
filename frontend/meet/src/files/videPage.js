import React,{useEffect, useState} from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import CallInfo from './CallInfo';
import ChatWindow from './chatWindow';
const VidePage = () => {
  const [searchParams,setsearchParams]=useSearchParams();
  const [apptInfo,setapptInfo] =useState()

  useEffect(() => {
    const token=searchParams.get('token');
    console.log(token)
    const fetchDecodedToken=async()=>{
      const response=await fetch('https://localhost:5000/validate-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:  JSON.stringify({token}) 
      });
      const data = await response.json();
      console.log(data)
      // Here if jwt is not verified then error will come ....leaving it to done later.....
      setapptInfo(data.decodedData)
    }
    fetchDecodedToken()
   
  }, [searchParams])
  console.log(typeof(setsearchParams),apptInfo)
  
  return (
    <>
  
   <div className="main-video-page">
    <div className="video-chat wrapper">
      <video id='large-feed' autoPlay controls playsInline></video>
      <video id='own-feed' autoPlay controls playsInline></video>
      {/* {apptInfo.name} */}
      {apptInfo && apptInfo.name ? <CallInfo apptInfo={apptInfo} /> :<></>}
      <ChatWindow/>
    </div>
   </div>

    <Link to='/'>Home</Link>
    </>
  )
}

export default VidePage
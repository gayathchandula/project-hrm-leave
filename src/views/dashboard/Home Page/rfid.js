import React, {useEffect, useState} from 'react';
import {Link } from 'react-router-dom';
import {
  CButton,
  CRow,
} from '@coreui/react'
import logo from '../../../assets/animation_640_kqng99bo.gif'

const Tables = () => {
const [loading,setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },5000)
  }, []);


  if (loading) {
    return (
      <div style={{ padding: "10px 20px", textAlign: "center", justifyContent:"center", display:"flex", alignItems:"center", width:"100%", height:"100vh", backgroundColor:"#FFFFFF"}}>
        <img src={logo} alt="loading..." />
      </div>
    )
  }

  return (

    <>

      <h1 style={{padding: "10px 20px", textAlign: "center", color: "black", alignItems:"center"}}>
        SMART People Management System
      </h1>
      <Link to="/login">
        <CButton color="primary" className="mt-3" active tabIndex={-1}>Go to Login </CButton>
      </Link>
      <div>
        <br></br>
      </div>
      <CRow>


      </CRow>

    </>
  )
}

export default Tables




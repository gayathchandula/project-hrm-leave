import React, {useEffect, useState} from 'react';
import {Link } from 'react-router-dom';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import {
  CButton,
  CRow,
} from '@coreui/react'


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
      <div style={{ padding: "10px 20px", textAlign: "center", justifyContent:"center", display:"flex", alignItems:"center", width:"100%", height:"100vh"}}>
        <ClimbingBoxLoader color={"#235ed9"} loading={loading} size={30} />
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




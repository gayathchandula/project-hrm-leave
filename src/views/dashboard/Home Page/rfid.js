import React from 'react';
import {Link } from 'react-router-dom';

import {
    CButton,
    CRow,
} from '@coreui/react'

const Tables = () => {


  return (

    <>

      <h1 style={{padding: "10px 20px", textAlign: "center", color: "black"}}>
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




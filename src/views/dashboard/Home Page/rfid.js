import React, { useEffect, useState } from 'react';
//import ReactDOM from 'react-dom';
// import {DebounceInput} from 'react-debounce-input';
import {Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CButton,
    CForm,
    CSelect,
    CFormGroup,
    CFormText,
    CCardFooter,
    CInput,
    CInputFile,
    CLabel,
    CRow,
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

import usersData from '../../users/UsrsData'
var imageName = require('src/assets/img_avatar.png')

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['Employee ID','First Name', 'Last Name', 'Employee Type','Shift Type','Created At', 'Updated At', 'Action']
var isEffect = false;
const Tables = () => {
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState([]);
  const [ShiftName, setShiftName] = useState([]);
  const [employeeTypeId, setemployeeTypeId] = useState([]);
  const [hour_rate, sethour_rate] = useState([]);
  const [rfid, setrfid] = useState();
  const [listData, setListData] = useState({ lists: [] });
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE4OTM3Mjc2fQ.YiGSokx728s4K93CjaC7BMWUa1kHO60UwdMitGwKCdQ' ;


  const headers = {
    headers: {

      "Authorization":`Bearer ${token}`
    }
  };
  const testIt = async (num) => {
    setrfid(num)
    if (isEffect) { isEffect = false; return;}

      if (num.length >= 10) {
        try{
          const body = ({rfid} );
          const loginResponse = await axios.post("https://hrm-innovigent.herokuapp.com/api/v1/movements", body,headers);

          console.log(loginResponse.data.data.employee.firstName);
           // Clear RFID field
          setfirstName(loginResponse.data.data.employee.firstName);
          setlastName(loginResponse.data.data.employee.lastName);
          setShiftName(loginResponse.data.data.ShiftName);
          setemployeeTypeId(loginResponse.data.data.employee.employeeTypeId);

      } catch(err) {
        //err.response.data.message&& setErr(err.response.data.message)
        setrfid('');
      }

    isEffect = true;
    setrfid('');



    }
  }

  return (

    <>

<h1 style={{ padding: "10px 20px", textAlign: "center", color: "black"}}>
          SMART People Management System
          </h1>
<Link to="/login">
                      <CButton  color="primary" className="mt-3" active tabIndex={-1}>Go to Login </CButton>
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




//<CInput id="password" name="text-input" placeholder="RFID No"  value={rfid} onChange={(e) => setrfid(e.target.value)} onKeyUp={(e) =>testIt(e.target.value)} />


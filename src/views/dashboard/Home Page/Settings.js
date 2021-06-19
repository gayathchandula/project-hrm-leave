import React, {useEffect, useState} from 'react'
import {
  CCol,
  CRow,
  CCard,
  CCardBody,
  CButton,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CCardHeader, CSpinner
} from '@coreui/react'

import axios from "axios";
import {Link} from "react-router-dom";
var imageName = require('src/assets/img_avatar.png')
const Tabs = () => {

  const [designationName, setdesignationName] = React.useState('')
  const [listData, setListData] = useState({ lists: [] });
  const [loading, setLoading] = useState(true);
  const Name = localStorage.getItem("Name")
  const id = localStorage.getItem("id")
  const token = localStorage.getItem("Token")

  const headers = {
    headers: {

      "Authorization":`Bearer ${token}`
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://hrm-innovigent.herokuapp.com/api/v1/organizations/${id}/employeeslist/listEmployeeInfo`,headers
      );
      setListData({ lists: result.data.data});
      setdesignationName(result.data.data.designationName);
      setLoading(false);
      console.log(result.data.data.EmployeeList)
    };


    fetchData();
  }, []);


  if (loading) {
    return (
      <div style={{ padding: "10px 20px", textAlign: "center"}}>
        <CSpinner />
      </div>
    )
  }

  return (
    <CRow>
      <CCol xs="12" sm="6" md="4" className="mb-4">
        <CCard>

          <CCardBody>
            <div className="image-container" align="center">
              <label><img src={imageName.default} height="200px" /> </label>
              <h1><b>{Name}</b></h1>

              <CRow className="align-items-center mt-3">




              </CRow>
            </div>
            <p>overview</p>
            <p>Accounts Details</p>
            <p>Help</p>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="8" className="mb-4">
        <CCard>
          <CCardHeader>
            <p><b>PERSONAL PROFILE</b></p>
          </CCardHeader>
          <CCardBody>
            <CForm action="submit" method="post"  className="form-horizontal">

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="select">First name</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="text-input" name="text-input" placeholder=" " value={listData.lists.EmployeeList.firstName} />

                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Last name</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="text-input" name="text-input" placeholder="" value={listData.lists.EmployeeList.lastName} />

                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Email</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="text-input" name="text-input" placeholder="" value={listData.lists.EmployeeList.employeeEmail}/>

                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">phone</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="text-input" name="text-input" placeholder="" value={listData.lists.EmployeeList.phone} />

                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="email-input">occupation</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput type="email" id="email-input" name="email-input" placeholder="" value={designationName} />

                </CCol>
              </CFormGroup>






            </CForm>
          </CCardBody>
        </CCard>
      </CCol>


      <CCol>
        <CCard>
          <CCardBody>
            <CForm>
              <CCol col="3" sm="2" md="2" xl className="mb-1 mb-xl-0">
                <Link to="/Change Password">
                <CButton active block color="danger" aria-pressed="true"  style={{width:'150px'}}>Change Password</CButton>
                </Link>
              </CCol>



            </CForm>
          </CCardBody>
        </CCard>
      </CCol>

    </CRow>
  )
}

export default Tabs

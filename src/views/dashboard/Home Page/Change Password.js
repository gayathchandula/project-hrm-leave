import React, {useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormGroup,
  CInputGroup,
  CInputGroupPrepend,
CInputGroupText,

CInput,

CTooltip,
  CRow,
  CCol,
  CLink
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import CIcon from '@coreui/icons-react'
import axios from "axios";


const Changepassword = () => {
  const placements = [
    'top-start', 'top', 'top-end',
    'bottom-start', 'bottom', 'bottom-end',
    'right-start', 'right', 'right-end',
    'left-start', 'left', 'left-end'
  ]
  const orgid = localStorage.getItem("org")
  const token = localStorage.getItem("Token")
  const id = localStorage.getItem("id")
  const [password, setPassword] = useState();
  const onChangePassword = (e) => {
    setPassword(e.target.value );
  };
  const onSubmit = async (data) => {


    const body = ({password,id} );
    axios.defaults.baseURL = "https://hrm-innovigent.herokuapp.com/api/v1";

    const headers = {
      headers: {

        "Authorization":`Bearer ${token}`
      }
    };

    axios.post(`/organizations/${orgid}/employeeslist/updatepassword`, body, headers)
      .then((res) => {
        if (res.status === 200) {
          alert('Change success');
        }
      }).catch((err) => {
      console.error(err);
      alert('Error please try again');
    });
  };
  return (
    <>


      <hr/>

      <CCard>
        <CCardHeader>
        <b> CHANGE PASSWORD</b>
        </CCardHeader>
        <CCardBody>
           <CForm >
           <CFormGroup>
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText><CIcon name="cil-asterisk" /></CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" id="password1" name="password1" placeholder="type old Password" autoComplete="current-password"/>
                  </CInputGroup>
                </CFormGroup>

                <CFormGroup>
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText><CIcon name="cil-asterisk" /></CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" id="password1" name="password1" placeholder="enter new Password" onChange={onChangePassword}  autoComplete="current-password"/>
                  </CInputGroup>
                </CFormGroup>

                <CFormGroup>
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText><CIcon name="cil-asterisk" /></CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" id="password1" name="password1" placeholder="re enter Password" autoComplete="current-password"/>
                  </CInputGroup>
                </CFormGroup>
                <CFormGroup className="form-actions">
                  <CButton  size="lg" color="success" onClick={onSubmit}>Submit</CButton>
                </CFormGroup>
              </CForm>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Changepassword;

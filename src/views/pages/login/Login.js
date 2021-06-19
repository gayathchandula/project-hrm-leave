import React, {useContext, useState} from 'react';
import UserContext from '../../../userContext';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CSpinner,
  CRow,
  CAlert
} from '@coreui/react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import CIcon from '@coreui/icons-react'

const Login = () => {
    const [employeeEmail, setEmail] = useState();
    const [password, setPassword] = useState();
    const [err, setErr] = useState();
    const [loading, setLoading] = useState(false);
    const { setUserData } = useContext(UserContext);

    const history = useHistory();
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
        };
    const onChangePassword = (e) => {
        setPassword(e.target.value );
          };

          const submit = async (e) => {
              e.preventDefault();
            setErr("");
            setLoading(true);
              try{
                  const body = ({employeeEmail, password});
                  const loginResponse = await axios.post("https://hrm-innovigent.herokuapp.com/api/v1/employees/login", body);


                  localStorage.setItem("Token", loginResponse.data.data.token);
                  localStorage.setItem("id", loginResponse.data.data.user.id);
                  localStorage.setItem("org", loginResponse.data.data.user.organizationId);
                  localStorage.setItem("Emp", loginResponse.data.data.user.employeeTypeId);
                  localStorage.setItem("Name", loginResponse.data.data.user.firstName);
                  setUserData({
                    id: loginResponse.data.data.user.id,
                    user: loginResponse.data.data.user.firstName,


                });
                setLoading(false)
                if(loginResponse.data.data.user.statusId === '50'){

                  history.push("/dashboard");

                }
                history.push("/Employee Home");


              } catch(err) {
                setLoading(false)
                err.response.data.message && setErr(err.response.data.message)
              }
        };

  if (loading) {
    return (
      <div style={{ padding: "10px 20px", textAlign: "center"}}>
        <CSpinner />
      </div>
    )
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  {err ? (
                    <CAlert color="info" closeButton fade={5}>
                      {err}
                    </CAlert>
                  ) : null}

                  <CForm onSubmit={submit}>


                    <h1>Login</h1>
                    <p className="text-muted">Sign in to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>

                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Email" autoComplete="email" onChange={onChangeEmail}/>


                    </CInputGroup>

                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" autoComplete="current-password" onChange={onChangePassword} />
                    </CInputGroup>


                    {/* <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" autoComplete="current-password" onChange={onChangepasswordConfirm} />
                    </CInputGroup> */}

                    <CRow>

                      <CCol xs="6">
                        <CButton color="primary" type="submit" value="Submit" className="px-4">Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">



                        {/* <CButton color="link" className="px-0">Forgot password?</CButton> */}
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Don't have a HRM account?<br></br>
                    Contact Administrator</p>
<br></br><br></br>

                      <CButton color="primary" href="https://www.innovigenttech.com/" className="mt-3" active tabIndex={-1}>Register Now ! Contact Innovigent (Pvt) Ltd</CButton>

                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login

import React from 'react'
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


const changepassword = () => {
  const placements = [
    'top-start', 'top', 'top-end',
    'bottom-start', 'bottom', 'bottom-end',
    'right-start', 'right', 'right-end',
    'left-start', 'left', 'left-end'
  ]

  return (
    <>
      

      <hr/>

      <CCard>
        <CCardHeader>
        <b> CHANGE PASSWORD</b>
        </CCardHeader>
        <CCardBody>
           <CForm action="" method="post">
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
                    <CInput type="password" id="password1" name="password1" placeholder="enter new Password" autoComplete="current-password"/>
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
                  <CButton type="submit" size="lg" color="success">Submit</CButton>
                </CFormGroup>
              </CForm>
        </CCardBody>
      </CCard>
    </>
  )
}

export default changepassword;
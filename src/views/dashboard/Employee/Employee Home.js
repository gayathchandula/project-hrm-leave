import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CCollapse,
  CForm,
  CFormGroup,
  CLabel,
  CFade,
  CSwitch,
  CLink
} from  '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
var imageName = require('src/assets/img_avatar.png')

const Cards = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showCard, setShowCard] = React.useState(true)
  const Name = localStorage.getItem("Name")
  return (
    <>
      <CRow>
        <CCol xs="12" sm="6" md="4">
          <CCard>

            <CCardBody>

              <label><img src={imageName.default} height="200px" /> </label>
              <h1><b>{Name} {Name}</b></h1>
              <p>hello i am php developer</p>
              <div className="class-header" color="black">
                <p1>At work wor:<b>3 hours</b></p1>


                <table className="table">
                  <thead>
                  <tr>

                    <th scope="col">ATTENDANCE</th>
                    <th scope="col">LEAVE</th>
                    <th scope="col">AWARDS</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>

                    <td>0</td>
                    <td>0/0</td>
                    <td>0</td>
                  </tr>
                  </tbody>
                </table>

              </div>


            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              <b> <div class="ab1" color="p-3 mb-2 bg-transparent text-dark"/> PROFESIONAL INFO</b>

            </CCardHeader>
            <CCardBody>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Name</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">Username</p>
                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel>DOB</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">Username</p>
                </CCol>
              </CFormGroup>



              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Gender</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">Username</p>
                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Email</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">Username</p>
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Phone</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">Username</p>
                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Local Address</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">Username</p>
                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Permanent Address</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">Username</p>
                </CCol>
              </CFormGroup>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              <b>  NOTICE BORD</b>

            </CCardHeader>
            <CCardBody>
              <div>
                <div className="card">
                  <div className="card-content">

                    <div className="row mt-top">
                      <div className="col xl4 l4 m6 s12">
                        <p className="teal year_exp white-text">

                          <strong>2016</strong> - Mar
                          <strong>15</strong>
                        </p>
                      </div>
                      <div className="col xl8 l8 m6 s12">
                        <blockquote className="no-pad">
                          <h6 className="no-pad mt-bottom">
                            <strong>original tailan</strong>
                          </h6>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,

                          </p>
                        </blockquote>
                      </div>
                    </div>
                    <div className="row mt-top">
                      <div className="col xl4 l4 m6 s12">
                        <p className="teal year_exp white-text">

                          <strong>2016</strong> - Mar
                          <strong>17</strong>
                        </p>
                      </div>
                      <div className="col xl8 l8 m6 s12">
                        <blockquote className="no-pad">
                          <h6 className="no-pad mt-bottom">
                            <strong>Alice had been of late much</strong>
                          </h6>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                            earum doloribus dicta quod architecto, praesentium totam
                            molestiae similique culpa repellat blanditiis nam facilis eius
                            quaerat distinctio vitae, tenetur beatae repellendus?
                          </p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">

        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              <b>COMPANY DETAILS</b>


            </CCardHeader>
            <CCardBody>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Employee ID</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">Username</p>
                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Department</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">Username</p>
                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Designation</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">Username</p>
                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Date of Joining</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">Username</p>
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Salary ($)</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">Username</p>
                </CCol>
              </CFormGroup>





            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              <b>    UPCOMING EVENTS</b>

            </CCardHeader>
            <CCardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs="12" sm="6" md="4">

        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              <b>  BANK DETAILS</b>

            </CCardHeader>
            <CCardBody>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Father's Name</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">Username</p>
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Father's Name</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">Username</p>
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Father's Name</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">Username</p>
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Father's Name</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">Username</p>
                </CCol>
              </CFormGroup>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader color="black">
              <b> AWARDS</b>

            </CCardHeader>
            <CCardBody>

            </CCardBody>
          </CCard>

        </CCol>
      </CRow>
    </>
  )
}

export default Cards

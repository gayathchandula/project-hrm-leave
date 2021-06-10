import React, {useEffect, useState} from 'react'
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
  CLink, CSpinner, CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
import axios from "axios";
import moment from 'moment';
var imageName = require('src/assets/img_avatar.png')

const Cards = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showCard, setShowCard] = React.useState(true)
  const [department, setdepartment] = React.useState('')
  const [shift, setshift] = React.useState('')
  const [designationName, setdesignationName] = React.useState('')
  const [accountDecrypted, setaccountDecrypted] = React.useState('')
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
      console.log(result.data.data.EmployeeList.department.departmentName)
      setListData({ lists: result.data.data});
      setdepartment(result.data.data.EmployeeList.department.departmentName);
      setdesignationName(result.data.data.EmployeeList.designations.designationName);
      setaccountDecrypted(result.data.data.accountDecrypted);
      setshift(result.data.data.EmployeeList.shift.shiftName);

      setLoading(false);
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
    <>

        <>
      <CRow>

        <CCol xs="12" sm="6" md="4">
          <CCard>

            <CCardBody>


              <label><img src={imageName.default} height="200px" /> </label>
              <h1><b>{listData.lists.EmployeeList.firstName}&nbsp;{listData.lists.EmployeeList.lastName}</b></h1>

              <div className="class-header" color="black">



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
              <b> <div class="ab1" color="p-3 mb-2 bg-transparent text-dark"/> PERSONAL INFO</b>

            </CCardHeader>
            <CCardBody>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Name</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">{listData.lists.EmployeeList.firstName}&nbsp;{listData.lists.EmployeeList.lastName}</p>
                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel>DOB</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">{listData.lists.EmployeeList.DOB}</p>
                </CCol>
              </CFormGroup>



              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Gender</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">{listData.lists.EmployeeList.gender}</p>
                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Email</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">{listData.lists.EmployeeList.employeeEmail}</p>
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Phone</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">{listData.lists.EmployeeList.phone}</p>
                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Local Address</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">{listData.lists.EmployeeList.address}</p>
                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Permanent Address</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">{listData.lists.EmployeeList.address}</p>
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

                          <strong></strong>
                          <strong></strong>
                        </p>
                      </div>
                      <div className="col xl8 l8 m6 s12">
                        <blockquote className="no-pad">
                          <h6 className="no-pad mt-bottom">
                            <strong></strong>
                          </h6>
                          <p>


                          </p>
                        </blockquote>
                      </div>
                    </div>
                    <div className="row mt-top">
                      <div className="col xl4 l4 m6 s12">
                        <p className="teal year_exp white-text">

                          <strong></strong>
                          <strong></strong>
                        </p>
                      </div>
                      <div className="col xl8 l8 m6 s12">
                        <blockquote className="no-pad">
                          <h6 className="no-pad mt-bottom">
                            <strong></strong>
                          </h6>
                          <p>

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
                  <p className="form-control-static">{listData.lists.EmployeeList.id}</p>
                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Department</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">{department}</p>
                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Designation</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">{designationName}</p>
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Shift</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">{shift}</p>
                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Date of Joining</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">{moment(listData.lists.EmployeeList.createdAt).format("MMM Do YY")}</p>
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
              No Upcoming Events
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
                  <CLabel>Bank Name</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">{listData.lists.EmployeeList.bankName}</p>
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Account Holder Name</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">{listData.lists.EmployeeList.accountHolderName}</p>
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Account number</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">{accountDecrypted}</p>
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Branch Name</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">{listData.lists.EmployeeList.branchName}</p>
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

    </>
  )
}

export default Cards

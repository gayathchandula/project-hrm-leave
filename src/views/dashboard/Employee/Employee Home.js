import React, {useEffect, useState} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormGroup,
  CLabel,
  CSpinner,
  CButton,
  CTooltip,
  CInput, CAlert
} from '@coreui/react'
import axios from "axios";
import moment from 'moment';
var imageName = require('src/assets/img_avatar.png')

const Cards = () => {
  const [department, setdepartment] = React.useState('')
  const [image, setimage] = React.useState(imageName.Default)
  const [shift, setshift] = React.useState('')
  const [designationName, setdesignationName] = React.useState('')
  const [accountDecrypted, setaccountDecrypted] = React.useState('')
  const [listData, setListData] = useState({ lists: [] });
  const [listData1, setListData1] = useState({ lists1: [] });
  const [loading, setLoading] = useState(true);
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

      setListData({ lists: result.data.data.EmployeeList});
      setdepartment(result.data.data.EmployeeList.department.departmentName);
      setdesignationName(result.data.data.EmployeeList.designations.designationName);
      setaccountDecrypted(result.data.data.accountDecrypted);
      setshift(result.data.data.EmployeeList.shift.shiftName);


    };

    const fetchData1 = async () => {
      const result1 = await axios(
        `https://hrm-innovigent.herokuapp.com/api/v1/organizations/${id}/leaveRequests/leaveinfo`,headers
      );
      setListData1( { lists1: result1.data.data.employee});


    };
    const fetchData2 = async () => {
      const result2 = await axios(
        `https://hrm-innovigent.herokuapp.com/api/v1/organizations/${id}/profile/image/get`,headers
      );

      setimage( 'https://hrm-innovigent.herokuapp.com/' + result2.data.data.createImage.imagePath)
      setLoading(false);
    };
    fetchData();
    fetchData1();
    fetchData2();
  }, []);


  const imageHandler = (event) =>{
    const file = event.target.files[0] ;
    const  formData = new FormData()
    formData.append('image',file)
    axios.post(`https://hrm-innovigent.herokuapp.com/api/v1/organizations/${id}/profile/image`,formData,{
      //body: formData,
      headers:{
        'Accept': 'multipart/form-data',
        "Authorization":`Bearer ${token}`
      },
     //credentials: 'include',
    })
      .then(res => {
      if (res.status === 200) {
        window.location.reload();
        res.json()
      }
    })
      .catch(error =>{
        console.log(error)
        alert('Error please try again');
      })
  }

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

                <CTooltip
                  content="Click to Update Profile"
                  placement="top"
                >
                <label style={{ cursor: "pointer" }}>
                  <CInput type="file" name="image" accept="image/*" multiple={false} onChange={imageHandler}   style={{ display: "none" }}/>
                  <img src={image} height="200px" alt="img" style={{ display: "inline-block",position: "relative" }}  />
                </label>
                </CTooltip>




              <h1><b>{listData.lists.firstName}&nbsp;{listData.lists.lastName}</b></h1>

              <div className="class-header" color="black">



                <table className="table">
                  <thead>
                  <tr>

                    <th scope="col">ATTENDANCE</th>

                    <th scope="col">AWARDS</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>

                    <td>0</td>

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
                  <p className="form-control-static">{listData.lists.firstName}&nbsp;{listData.lists.lastName}</p>
                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel>DOB</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">{listData.lists.DOB}</p>
                </CCol>
              </CFormGroup>



              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Gender</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">{listData.lists.gender}</p>
                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Email</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">{listData.lists.employeeEmail}</p>
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Phone</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">{listData.lists.phone}</p>
                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Local Address</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">{listData.lists.address}</p>
                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Permanent Address</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">{listData.lists.address}</p>
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
                  <p className="form-control-static">{listData.lists.id}</p>
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
                  <p className="form-control-static">{moment(listData.lists.createdAt).format("MMM Do YY")}</p>
                </CCol>
              </CFormGroup>







            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">

            <CCard>
              <CCardHeader>
                <b> <div class="ab1" color="p-3 mb-2 bg-transparent text-dark"/> Leaves</b>

              </CCardHeader>
              <CCardBody>

                {listData1.lists1.map((country1, key) => (
                  <CFormGroup row>
                    <CCol md="3">
                      <b><CLabel key={key} value={country1.id}>{country1.leavetypes.LeaveTypeName}</CLabel></b>
                    </CCol>
                    <CCol xs="12" md="9">
                      <p className="form-control-static">{country1.daysRemaining}/{country1.numberOfDays}</p>
                    </CCol>
                  </CFormGroup>
                ))}

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
                  <p className="form-control-static">{listData.lists.bankName}</p>
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Account Holder Name</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">{listData.lists.accountHolderName}</p>
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
                  <p className="form-control-static">{listData.lists.branchName}</p>
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

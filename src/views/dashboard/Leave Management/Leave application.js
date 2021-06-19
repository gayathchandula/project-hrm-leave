import React, { useState, useEffect } from 'react';
import axios from "axios";
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
  CSpinner,
    CLabel,
    CRow,
} from '@coreui/react'
import { Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment';

const eventStyleGetter = function(event, start, end, isSelected) {
  console.log(event);
  var backgroundColor = '#' + event.hexColor;
  var style = {
    backgroundColor: backgroundColor,
    borderRadius: '0px',
    opacity: 0.8,
    color: 'black',
    border: '0px',
    display: 'block'
  };
  return {
    style: style
  };
}

const getBadge = reviewstatusId => {
  switch (reviewstatusId) {
    case 1 : return 'success'
    case 2 : return 'danger'
    case 3 : return 'warning'

    default: return 'primary'
  }
}

const changestatus = reviewstatusId => {
  switch (reviewstatusId) {
    case 1 : return "Approved"
    case 2 : return 'Declined'
    case 3 : return 'Pending'

    default: return 'primary'
  }
}

const fields = ['leavetypeId','numberOfDays', 'leaveRequestedDate', 'reason','reviewstatusId']

const Tables = () => {
  const [LeaveTypeId, setLeaveTypeId] = useState("");
    const [Reason, setReason] = useState("");
    const [date, setDate] = useState("");
    const [listData, setListData] = useState({ lists: [] });
  const [listData1, setListData1] = useState({ lists: [] });
    const [loading, setLoading] = useState(true);
    const orgid = localStorage.getItem("org")
  const empId = localStorage.getItem("id")
    const [numberOfDays, setnumberOfDays] = useState("");
  const localizer = momentLocalizer(moment)



    const onChangeLeaveTypeId = (e) => {
      setLeaveTypeId(e.target.value);
    };
    const onChangeReason = (e) => {
      setReason(e.target.value );
    };
    const onChangeDate = (e) => {
      setDate( e.target.value );
    };

    const onChangenumberOfDays = (e) => {
      setnumberOfDays( e.target.value );
    };
    const employeeTypeId =  localStorage.getItem("Emp")
    const token = localStorage.getItem("Token")
    const headers = {
        headers: {

            "Authorization":`Bearer ${token}`
        }
    };
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          `https://hrm-innovigent.herokuapp.com/api/v1/organizations/${orgid}/emp/LeaveTypes/list`,headers
        );
        setListData({ lists: result.data.data.LeaveTypesDetails });
        setLoading(false);
      };
      const fetchData1 = async () => {
        const result = await axios(
          `https://hrm-innovigent.herokuapp.com/api/v1/organizations/${empId}/leaveRequests/list`,headers
        );
        setListData1({ lists: result.data.data.leaveRequestDetails });
        setLoading(false);
      };
      fetchData();
      fetchData1();
    }, []);
    const onSubmit = async (data) => {


        const body = ({ LeaveTypeId,Reason,date,employeeTypeId,numberOfDays} );



    axios.post(`https://hrm-innovigent.herokuapp.com/api/v1/organizations/${orgid}/leaveRequests/create`, body, headers)
    .then((res) => {
        if (res.status === 200) {
          window.location.reload();
            alert('upload success');
        }
    }).catch((err) => {
        console.error(err);
        alert('Error please try again');
    });
    };

    const onDelete = async (rfid) => {


      const body = ({rfid} );



  axios.post(`https://hrm-innovigent.herokuapp.com/api/v1/organizations/${orgid}/employeeslist/delete`, body, headers)
  .then((res) => {
      if (res.status === 200) {
        window.location.reload();
          alert('delete success');
      }
  }).catch((err) => {
      console.error(err);
      alert('Error please try again');
  });
  };
  const events= listData1.lists.map((appointment)=>{
    return {
      id: appointment.id,
      title: appointment.reason,
      start: new Date(appointment.leaveRequestedDate),
      end: new Date(moment(appointment.leaveRequestedDate, "DD-MM-YYYY").add('days',appointment.numberOfDays)),
      allDay: true,
      reviewstatusId: appointment.reviewstatusId,
    }
  })

   if (loading) {
    return <CSpinner />
  }
  return (

    <>
    <CRow>
        <CCol xs="12" md="10">
            <CCard>
              <CCardHeader>
                New Leave Application Form
              </CCardHeader>
              <CCardBody>
                <CForm action="submit" method="post"  className="form-horizontal">




    <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Leave Type</CLabel>
                  </CCol>
                  <CCol>
                  <CSelect
                  name="Countries"
                  onChange={onChangeLeaveTypeId}
                  value={LeaveTypeId}
                  >
                    {listData.lists.map((country, key) => (
            <option key={key} value={country.id}>
              {country.LeaveTypeName}
            </option>
          ))}

                  </CSelect>
                      <CFormText>Select your Leave Type</CFormText>
                  </CCol>


                </CFormGroup>



                <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Reason</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput id="text-input" name="text-input" placeholder="Reason" value={Reason} onChange={onChangeReason}/>
                      <CFormText>Please Enter Reason</CFormText>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Date</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput id="text-input" type="date" name="text-input" placeholder="Special Date" value={date} onChange={onChangeDate} />
                      <CFormText>Please select Date</CFormText>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input"> Number of Days</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                    <CSelect onChange={onChangenumberOfDays} value={numberOfDays}>
                      <option selected>Select the Days</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </CSelect>
                      <CFormText>Please Select Days</CFormText>
                    </CCol>
                  </CFormGroup>
                </CForm>
              </CCardBody>
              <CCardFooter>
                <CButton data-testid="toggle" type="submit" size="lg" color="primary" onClick={onSubmit}> Submit Request</CButton>

              </CCardFooter>
            </CCard>

          </CCol>


    </CRow>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              My Leaves
            </CCardHeader>
            <CCardBody>

            <CDataTable
              items={listData1.lists}
              fields={fields}
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                'reviewstatusId':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.reviewstatusId)}>
                        {changestatus(item.reviewstatusId)}
                      </CBadge>
                    </td>
                  ),
                  'show_details':
          (item, index)=>{
            return (

              <td className="py-2">
                <CButton
                  color="danger"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={()=>{onDelete(item.rfid)}}

                >
                  Delete
                </CButton>
              </td>
            )
          }
              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Leave calendar
            </CCardHeader>
            <CCardBody>
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor='start'
                endAccessor='end'
                views={['month', 'day', 'week']}
                style={{height: 450}}
                eventPropGetter={
                  (event, start, end, isSelected) => {
                    let newStyle = {
                      backgroundColor: "lightblue",
                      color: 'black',
                      borderRadius: "0px",
                      border: "none"
                    };

                    if (event.reviewstatusId === 1) {
                      newStyle.backgroundColor = '#42ba96'
                    }
                    if (event.reviewstatusId === 2) {
                      newStyle.backgroundColor = '#df4759'
                    }
                    if (event.reviewstatusId === 3) {
                      newStyle.backgroundColor = '#ffc107'
                    }
                    return {
                      className: "",
                      style: newStyle
                    };
                  }
                }
              />

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Tables
